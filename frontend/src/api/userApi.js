import axios from "axios";

const urlApi = "https://dali-khinkali.ru/api";

export const userApi = {
  get: async (token) => {
    const res = await axios.get(`${urlApi}/users/me/`, {
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    });

    return res.data;
  },
  // Partial Edit
  patch: async (token, data) => {
    try {
      const res = await axios.request(`${urlApi}/users/me/`, {
        method: "PUT",
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          email: data.email,
        },
        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  },
  getAdress: async (token, id) => {
    const res = await axios.get(`${urlApi}/users/${id}/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return await res.data;
  },
  editAdsress: async (token, id, data) => {
    const res = await axios.request({
      url: `${urlApi}/users/${id}/`,
      headers: { Authorization: `Token ${token}` },
      method: "PATCH",
      data: data,
    });
    return await res.data;
  },
  orderHistory: async (token) => {
    const res = await axios.get(`${urlApi}/goods/order_history/`, {
      headers: { Authorization: `Token ${token}` },
    });

    return await res.data;
  },
  createOrder: async (token, totalPrice) => {
    const getUser = await userApi.get(token);

    const getAdress = await userApi.getAdress(token, getUser.id);

    const data = {
      user: getUser.id,
      total_price: totalPrice,
      cutlery: 1,
      delivery_cost: 200,
      fio: `${getUser.last_name} ${getUser.first_name}`,
      email: getUser.email,
      address: getAdress.delivery_address,
      delivery_time: "10:00",
      payment_method: "Nalichki",
    };

    const res = await axios.request({
      url: `${urlApi}/goods/create_order/`,
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    });

    return res.data;
  },
};

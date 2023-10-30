import axios from "axios";

export const addetionalServiseApi = async (token, data) => {
  try {
    const res = await axios.request({
      url: "http://127.0.0.1:8000/api/send-order/",
      data: data,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return await res;
  } catch (error) {
    return error.message;
  }
};
const url = "http://127.0.0.1:8000/api";
export const reserveApi = {
  hookah: async (token, data) => {
    const headers =
      `${token}`.length > 5
        ? {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          };
    const res = await axios.request({
      url: `${url}/send-hookah/`,
      method: "POST",
      headers: headers,
      data: data,
    });
    return await res.data;
  },

  reserveTable: async (token, data) => {
    const headers =
      `${token}`.length > 5
        ? {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          };
    const res = await axios.request({
      url: `${url}/reservations/`,
      method: "POST",
      headers: headers,
      data: data,
    });
    return await res.data;
  },
  taxi: async (token, data) => {
    const headers =
      `${token}`.length > 5
        ? {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          }
        : {
            "Content-Type": "application/json",
          };
    const res = await axios.request({
      url: `${url}/send-taxi/`,
      method: "POST",
      headers: headers,
      data: data,
    });
    return await res.data;
  },
};

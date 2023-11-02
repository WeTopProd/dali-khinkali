import axios from "axios";

export const basketApi = {
  url: "https://dali-khinkali/api/goods/",
  patch2pUrl: (id) => {
    return `${id}/shopping_cart/`;
  },

  countPatch: async (id, token, count) => {
    const res = await axios.request({
      method: "patch",
      url: `${basketApi.url}${basketApi.patch2pUrl(id)}`,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      data: { count: count },
    });

    return await res;
  },

  delete: async (id, token) => {
    const res = await axios.request({
      method: "delete",
      url: `${basketApi.url}${basketApi.patch2pUrl(id)}`,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });

    return await res;
  },
};

export default basketApi;

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

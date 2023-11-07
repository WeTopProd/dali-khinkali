import axios from "axios";

export const banquetHullApi = async (token, data) => {
  try {
    const res = await axios.request({
      url: "http://127.0.0.1:8000/api/send-banquet/",
      data: JSON.stringify(data),
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

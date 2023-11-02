import axios from "axios";

export const banquetHullApi = async (token, data) => {
  try {
    const res = await axios.request({
      url: "http://dali-khinkali/api/send-banquet/",
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

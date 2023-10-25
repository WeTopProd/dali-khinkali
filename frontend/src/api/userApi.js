import { Message } from "@mui/icons-material";
import axios from "axios";

const urlApi = "http://127.0.0.1:8000/api";

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
};

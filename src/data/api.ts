import axios from "axios";

const api = axios.create({
  baseURL: "https://arnia-kanban.vercel.app/api/",
  headers: {
    "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
  },
});

export default api;

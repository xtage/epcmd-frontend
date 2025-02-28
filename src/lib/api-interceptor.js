import axios from "axios";

const api = axios.create({
  baseURL: "https://wagtailcms.onrender.com/api",
});

export { api };

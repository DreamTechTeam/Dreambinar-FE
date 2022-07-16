import axios from "axios";

const strapi = axios.create({
  baseURL: "https://dreambinar-api.herokuapp.com/api",
});

export default strapi;

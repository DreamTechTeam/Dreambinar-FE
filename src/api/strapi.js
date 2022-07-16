import axios from "axios";

const strapi = axios.create({
  baseURL: process.env.REACT_APP_DREAMBINAR_API,
});

export default strapi;

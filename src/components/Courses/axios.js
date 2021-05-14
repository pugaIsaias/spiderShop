import axios from "axios";
import { config } from "../../config/Contants";

const instance = axios.create({
  baseURL: config.apiURL,
});

export default instance;

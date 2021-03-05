import axios from "axios";
import config from "../../config/server-config";

const instance = axios.create({
  baseURL: config.scheme + "://" + config.server + ":" + config.port + "/api/",
});

export default instance;

import axios from "axios";
import { baseUrlStaging, baseUrlTest, baseUrlProd } from "./baseUrl";

const instance = axios.create({
  baseURL: `${baseUrlStaging}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

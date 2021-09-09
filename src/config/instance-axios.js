import axios from "axios";

export const baseURL = "https://api.nytimes.com/svc/mostpopular/v2";

const instanceAxios = axios.create({
  baseURL,
  timeout: 30000,
});

export default instanceAxios;

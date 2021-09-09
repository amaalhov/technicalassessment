import axios from "axios";

export const baseURL = "http://api.nytimes.com/svc/mostpopular/v2";

const instanceAxios = axios.create({
  baseURL,
  timeout: 30000,
});

export default instanceAxios;

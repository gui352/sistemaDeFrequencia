import axios from "axios";

const apiBrazil = axios.create({
  baseURL: 'https://covid19-brazil-api.vercel.app/api/report/v1/brazil',
});

export default apiBrazil;
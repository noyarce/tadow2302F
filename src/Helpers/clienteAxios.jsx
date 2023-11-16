import axios from "axios";
import { getToken } from "./usuario";

const clienteAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
});

clienteAxios.interceptors.request.use(
  function (config) {
     const token = getToken();
     if (token) {
       config.headers["authorization"] = `Bearer ${token}`;
     }
    return config;
  },
  function (error) {
    console.log('error', error);
    if (error.response.status === 401) {
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

clienteAxios.interceptors.response.use(
  function (response) {
    if (response.data.codigo === 401) {
      window.location = "/login";
    }

    if (response.data.codigo === 403) {
        //error de permisos
    }

    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 401) {
      window.location = "/login";
    } else {
      return Promise.reject(error);
    } 
  }
);

// documentacion de interceptors --> https://axios-http.com/docs/interceptors

export default clienteAxios;
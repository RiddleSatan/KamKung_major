import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, //indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers
  headers: {
    //This defines default HTTP headers that will be sent with every request made using this Axios instance.
    "Content-Type": "application/json", //Specifies that the data being sent in the request body is JSON.
    Accept: "application/json", //Indicates that the client expects a JSON response from the server.
  },
});

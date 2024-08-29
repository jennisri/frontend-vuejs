// import axios
import axios from "axios";

// membuat objext dari axios untuk mendefinisikan baseURL
const api = axios.create({
  // set default endpoint api
  baseURL: "http://localhost:3000",
});

export default api;

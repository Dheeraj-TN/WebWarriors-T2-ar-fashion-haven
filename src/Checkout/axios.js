import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/ar-fashion-139f4/us-central1/api",
});
export default instance;

//'http://127.0.0.1:5001/clone-2fecc/us-central1/api

import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amazon-clone1.cloudfunctions.net/api",
});

export default instance;

import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("admin_access_token");

let headers = {
  'Content-Type': '*/*',
    Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

if (token) {
  headers["Authorization"] = `Bearer ${token}`;
}


const instance = axios.create({
  headers,
  withCredentials: true,
});

export default instance;

import axios from "axios";

const baseURL = "http://localhost:3005";

async function login(username, password) {
  const url = `${baseURL}/login`;
  const response = await axios.post(url, { username, password });
  return response.data.token;
}

async function register(username, password) {
  const url = `${baseURL}/register`;
  const response = await axios.post(url, { username, password });
  return response.data;
}

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${token}`
    }
  };
};

export { login, register, getAuthHeader };

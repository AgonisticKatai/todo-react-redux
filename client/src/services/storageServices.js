async function saveToken(token) {
  return await localStorage.setItem("token", token);
}

async function getToken(token) {
  return await localStorage.getItem("token");
}

async function removeToken(token) {
  return await localStorage.removeItem("token");
}

export { saveToken, getToken, removeToken };

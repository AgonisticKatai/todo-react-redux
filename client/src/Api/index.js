import axios from "axios";
import { getAuthHeader } from "../services/authServices";

const baseURL = "http://localhost:3005";
const API = {
  tasks: {
    async getPendingTasks() {
      const url = `${baseURL}/tasks/pending`;
      const response = await axios.get(url, getAuthHeader());
      return response.data;
    },
    async addTask(newTask) {
      const url = `${baseURL}/task/add`;
      const response = await axios.put(url, newTask, getAuthHeader());
      return response.data;
    },
    async removeTask(taskId) {
      const url = `${baseURL}/task/remove/${taskId}`;
      const response = await axios.delete(url, getAuthHeader());
      return response.data;
    }
  }
};
export default API;

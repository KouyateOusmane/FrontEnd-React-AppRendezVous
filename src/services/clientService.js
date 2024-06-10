// src/services/clientService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/appClient';  // Assurez-vous que cette URL correspond à celle de votre backend

const getClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/clients/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the clients:", error);
    throw error;
  }
};

const clientService = {
  getClients,
};

export default clientService;

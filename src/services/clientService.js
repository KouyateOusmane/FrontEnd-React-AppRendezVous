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

const createClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL}/clients/create/`, clientData);
    return response.data;
  } catch (error) {
    console.error("There was an error creating the client:", error);
    throw error;
  }
};

const loginClient = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/clients/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("There was an error logging in:", error);
    throw error;
  }
};

const clientService = {
  getClients,
  createClient,
  loginClient,
};

export default clientService;

// src/components/ClientList.js
import React, { useState, useEffect } from 'react';
import clientService from '../services/clientService';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await clientService.getClients();
        setClients(data);
      } catch (error) {
        console.error("There was an error fetching the clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Client List</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;

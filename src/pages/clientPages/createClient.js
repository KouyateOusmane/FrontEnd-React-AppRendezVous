import React, { useState } from 'react';
import clientService from '../../services/clientService';

function CreateClient() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    courriel: '',
    motDePasse: '',
    telephone: '',
    adresse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newClient = await clientService.createClient(form);
      console.log('Client créé avec succès:', newClient);
      // Optionnel: Réinitialiser le formulaire après la soumission
      setForm({
        nom: '',
        prenom: '',
        courriel: '',
        motDePasse: '',
        telephone: '',
        adresse: '',
      });
    } catch (error) {
      console.error("There was an error creating the client:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Créer un compte client</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom :</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Prénom :</label>
          <input
            type="text"
            className="form-control"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Courriel :</label>
          <input
            type="email"
            className="form-control"
            name="courriel"
            value={form.courriel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            name="motDePasse"
            value={form.motDePasse}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Téléphone :</label>
          <input
            type="text"
            className="form-control"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Adresse :</label>
          <input
            type="text"
            className="form-control"
            name="adresse"
            value={form.adresse}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Créer</button>
      </form>
    </div>
  );
}

export default CreateClient;

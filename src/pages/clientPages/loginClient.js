import React, { useState } from 'react';
import clientService from '../../services/clientService';

function LoginClient() {
  const [form, setForm] = useState({
    courriel: '',
    motDePasse: '',
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
      const loggedInClient = await clientService.loginClient(form);
      console.log('Connexion réussie:', loggedInClient);
      // Optionnel: Réinitialiser le formulaire après la soumission
      setForm({
        courriel: '',
        motDePasse: '',
      });
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Connexion client</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary mt-3">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginClient;

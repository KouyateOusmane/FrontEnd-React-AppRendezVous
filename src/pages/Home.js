import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <header className="text-center my-5">
        <h1>Bienvenue sur l'application de rendez-vous</h1>
        <p>Trouvez et prenez rendez-vous avec les meilleurs prestataires de service.</p>
      </header>

      <nav className="text-center mb-5">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/providers">Voir les prestataires</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clientPages/createClient">Créer un compte client</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register-provider">Créer un compte prestataire</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clientPages/loginClient">Se connecter comme client</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Se connecter comme prestataire</Link>
          </li>
        </ul>
      </nav>

      <section className="text-center mb-5">
        <h2>Rechercher un prestataire</h2>
        <form className="d-flex justify-content-center mt-3">
          <input type="text" className="form-control w-50" placeholder="Cherchez par nom ou service" />
          <button type="submit" className="btn btn-primary ml-2">Rechercher</button>
        </form>
      </section>

      <section>
        <h2 className="text-center">Les meilleurs prestataires</h2>
        <div className="providers-list text-center mt-3">
          {/* Ajoutez ici une liste de prestataires populaires ou recommandés */}
        </div>
      </section>

      <footer className="text-center my-5">
        <p>&copy; 2024 Rendez-vous Inc.</p>
      </footer>
    </div>
  );
}

export default Home;

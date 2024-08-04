import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [name, setName] = useState("");
<<<<<<< HEAD
  const [username, setUsername] = useState("");
=======
  const [telephone, setTelephone] = useState("");
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
<<<<<<< HEAD
      username: username,
=======
      telephone: telephone,
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
      email: email,
      password: password,
    };

    try {
<<<<<<< HEAD
      const response = await axios.post("http://127.0.0.1:8000/api/utilisateurs", formData);
      setMessage("Inscription réussie !");
      setName("");
      setUsername("");
=======
      const response = await axios.post("http://127.0.0.1:8000/api/users", formData);
      setMessage("Inscription réussie !");
      setName("");
      setTelephone("");
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errors = error.response.data.errors;
        let errorMessage = "Erreur lors de l'inscription:\n";
        for (let field in errors) {
          errorMessage += `${errors[field][0]}\n`;
        }
        setMessage(errorMessage);
      } else {
        setMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
<<<<<<< HEAD
          <label htmlFor="telephone">Prenom</label>
=======
          <label htmlFor="telephone">Téléphone</label>
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
          <input
            type="text"
            className="form-control"
            id="telephone"
<<<<<<< HEAD
            value={username}
            onChange={(e) => setUsername(e.target.value)}
=======
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Inscription;

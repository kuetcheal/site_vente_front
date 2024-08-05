import React, { useState } from "react";
import axios from "axios";

const InsertArticle = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [imagearticle, setImageArticle] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("imagearticle", imagearticle);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Article ajouté avec succès !");
      setNom("");
      setDescription("");
      setPrix("");
      setImageArticle(null);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errors = error.response.data.errors;
        let errorMessage = "Erreur lors de l'ajout de l'article:\n";
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
      <h2>Ajouter un Article</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prix">Prix</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="prix"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagearticle">Image de l'article</label>
          <input
            type="file"
            className="form-control"
            id="imagearticle"
            onChange={(e) => setImageArticle(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter l'Article
        </button>
      </form>
    </div>
  );
};

export default InsertArticle;

import React, { useState, useEffect } from "react";
import "./Gallery.css";
import axios from "axios";

const Gallery = () => {

  const [articles, setArticles] = useState([]);
  useEffect(() =>{
     axios.get('http://127.0.0.1:8000/api/articles')
     .then(response =>{
      setArticles(response.data);
     })
     .catch(error=>{
      console.error('erreur de articles', error);
     })
  }, [])
  // const products = [
  //   {
  //     id: 1,
  //     name: "Baskette Jordan",
  //     price: "12.99€",
  //     description: "chaussure de qualité superieure",
  //     img: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: "14.99€",
  //     description: "chaussure de qualité superieure",
  //     img: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: "9.99€",
  //     description: "chaussure de qualité superieure",
  //     img: "https://via.placeholder.com/150",
  //   },

  // ];

  return (
    <div className="gallery">
    {articles.map((article) => (
      <div key={article.id} className="gallery-item">
       <img src={`http://127.0.0.1:8000/storage/${article.imagearticle}`} alt={article.nom} />
        <h3>{article.nom}</h3>
        <h3>{article.description}</h3>
        <p>{article.prix}</p>
      </div>
    ))}
  </div>
  );
};

export default Gallery;

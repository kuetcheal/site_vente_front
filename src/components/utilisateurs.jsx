import React, {useEffect, useState} from "react";
import axios from "axios";

const Utilisateurs = () =>{
    const [utilisateurs, setUtilisateurs]= useState([]);

    useEffect( () =>{
        axios.get('http://127.0.0.1:8000/api/utilisateurs')
        .then(response =>{
            setUtilisateurs(response.data);
    })
        .catch(error =>{
            console.error('il y a eu une erreur ', error);
        });
    }, []) 

    const supprimerUtilisateur = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/utilisateurs/${id}`)
          .then(response => {
            // Filtrer les utilisateurs pour enlever celui qui a été supprimé
            setUtilisateurs(utilisateurs.filter(utilisateur => utilisateur.id !== id));
          })
          .catch(error => {
            console.error('Il y a eu une erreur lors de la suppression!', error);
          });
      };

      return (
        <div>
          <h2>Liste des utilisateurs</h2>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {utilisateurs.map(utilisateur => (
                <tr key={utilisateur.id}>
                  <td>{utilisateur.name}</td>
                  <td>{utilisateur.email}</td>
                  <td>{utilisateur.username}</td>
                  <td>
                    <button onClick={() => supprimerUtilisateur(utilisateur.id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default Utilisateurs;
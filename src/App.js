import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription from "./components/inscription";
import Acceuil from "./components/Acceuil";
<<<<<<< HEAD
import Utilisateurs from "./components/utilisateurs";
=======
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inscription/>} />
          <Route path="/acceuil" element={<Acceuil/>} />
<<<<<<< HEAD
          <Route path="/utilisateurs" element={<Utilisateurs/>} />
=======
>>>>>>> 7a224cd2912c749bff534da659c78be16e45df1c
    {/* <Route path="/navbar" element={<Navbar/>} /> 
    <Route path="/forgetPassword" element={<ForgetPassword/>} /> 
    <Route path="/videos" element={<Videos/>} />
    <Route path="/videos1" element={<Videos1/>} />
    <Route path="/popup1" element={<Popup1/>} />
    <Route path="/fluxod" element={<Fluxod/>} />
    <Route path="/errorPassword" element={<ErrorPassword/>} />
    <Route path="/alertPassword" element={<AlertPassword/>} />
    <Route path="/Accueil" element={<Accueil/>} />
    <Route path="/sidebar" element={<Sidebar/>} />
    <Route path="/setting" element={<Setting/>} />
    <Route path="/dialog" element={<Dialog/>} />
    <Route path="/parametre" element={<Parametre/>} />
    <Route path="/supression" element={<Supression/>} />
    <Route path="/ajoutvideos" element={<Ajoutvideos/>} /> */}
         {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
  </Router> 
  );
}

export default App;

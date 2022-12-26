import React from 'react';
import {useNavigate } from "react-router-dom";

const Homepage = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Главная страница </h1>
        <p><button onClick={() => navigate("/Descriptionpage") }>Дальше</button></p>
        <p><button onClick={() => navigate("/Prof") }>Профиль</button></p>
      </>
    );
  };
  
  export default Homepage;
import React from 'react';
import {useNavigate } from "react-router-dom";

const Dbn = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Добавление бонусной карты</h1>
        <p><button onClick={() => navigate("/Bn") }>Назад</button></p>
      </>
    );
  };
  
  export default Dbn;
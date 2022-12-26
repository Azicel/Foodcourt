import React from 'react';
import {useNavigate } from "react-router-dom";

const Bn = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Бонусные карты</h1>
        <p><button onClick={() => navigate("/Dbn") }>Добавить</button></p>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Bn;
import React from 'react';
import {useNavigate } from "react-router-dom";

const Zak = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Заказы</h1>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Zak;
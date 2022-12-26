import React from 'react';
import {useNavigate } from "react-router-dom";

const Cart = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Карты</h1>
        <p><button onClick={() => navigate("/Dcart") }>Добавление карты</button></p>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Cart;
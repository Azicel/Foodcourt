import React from 'react';
import {useNavigate } from "react-router-dom";
import Shop from "./Shop";

const Basket = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Корзина </h1>
        <div><Shop /></div>
        <p><button onClick={() => navigate("/Ofz") }>Оформить заказ</button></p>
        <p>
          <button onClick={() => navigate("/Dishdescriptionpage")}>Назад</button>
        </p>
        
      </>
    );
  };
  
  export default Basket;
import React from 'react';
import {useNavigate } from "react-router-dom";

const Dishdescriptionpage = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Описание блюда </h1>
        <p><button onClick={() => navigate("/Basket") }>Добавить товар в корзину</button></p>
        <p>
          <button onClick={() => navigate("/Descriptionpage")}>Назад</button>
        </p>
      </>
    );
  };
  
  export default Dishdescriptionpage;
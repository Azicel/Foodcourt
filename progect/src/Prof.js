import React from 'react';
import {useNavigate } from "react-router-dom";

const Prof = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Профиль</h1>
        <p><button onClick={() => navigate("/Dan") }>Данные</button></p>
        <p><button onClick={() => navigate("/Zak") }>Заказы</button></p>
        <p><button onClick={() => navigate("/Cart") }>Карты</button></p>
        <p><button onClick={() => navigate("/Like") }>Любимые рестораны</button></p>
        <p><button onClick={() => navigate("/Bn") }>Бонусные карты</button></p>
        <p><button onClick={() => navigate("/Tx") }>Тех.поддержка</button></p>
        <p><button onClick={() => navigate("/Basket") }>Корзина</button></p>
        <p><button onClick={() => navigate("/Homepage") }>Назад</button></p>
      </>
    );
  };
  
  export default Prof;
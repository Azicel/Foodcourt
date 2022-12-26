import React from "react";
import { useNavigate } from "react-router-dom";

const Ofz = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Оформление заказа</h1>
        <p>
          <button onClick={() => navigate("/Bz")}>Вынос в зал</button>
        </p>
        <p>
          <button onClick={() => navigate("/Zs")}>Заберу сам</button>
        </p>
        <p>
          <button onClick={() => navigate("/Basket")}>Назад</button>
        </p>
        
      </>
    );
  };
  
  export default Ofz;
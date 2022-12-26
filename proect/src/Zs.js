import React from "react";
import { useNavigate } from "react-router-dom";

const Zs = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Заберу сам</h1>
        <p>
          <button onClick={() => navigate("/Bz")}>Вынос в зал</button>
        </p>
        <p>
          <button onClick={() => navigate("/Ofz")}>Назад</button>
        </p>
        <p>
          <button>Заказать</button>
        </p>
        
      </>
    );
  };
  
  export default Zs;
import React from "react";
import { useNavigate } from "react-router-dom";

const Bz = (props) => {
    const navigate = useNavigate();
    return (
      <>
        <h1>Вынос в зал</h1>
        <p>
          <button onClick={() => navigate("/Zs")}>Заберу сам</button>
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

  export default Bz;


import React from 'react';
import {useNavigate } from "react-router-dom";

const Descriptionpage = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Описание ресторана </h1>
        <p><button onClick={() => navigate("/Dishdescriptionpage") }>Перейти к описанию блюда</button></p>
        <p>
          <button onClick={() => navigate("/Homepage")}>Назад</button>
        </p>
      </>
    );
  };
  
  export default Descriptionpage;
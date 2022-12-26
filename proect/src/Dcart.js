import React from 'react';
import {useNavigate } from "react-router-dom";

const Dcart = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Добавление карты</h1>
        <p><button onClick={() => navigate("/Cart") }>Назад</button></p>
      </>
    );
  };
  
  export default Dcart;
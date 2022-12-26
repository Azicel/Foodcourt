import React from 'react';
import {useNavigate } from "react-router-dom";

const Dan = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Данные</h1>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Dan;
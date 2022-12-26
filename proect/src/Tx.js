import React from 'react';
import {useNavigate } from "react-router-dom";

const Tx = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Тех.поддержка</h1>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Tx;
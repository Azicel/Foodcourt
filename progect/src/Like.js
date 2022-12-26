import React from 'react';
import {useNavigate } from "react-router-dom";

const Like = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
        <h1>Любимые рестораны</h1>
        <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      </>
    );
  };
  
  export default Like;
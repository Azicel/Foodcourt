import React from "react";
import {useNavigate } from "react-router-dom";

const User = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>ВЫ хотите </h1>
      <p>
        <button onClick={() => navigate("/Form")}>Регистрация</button>
      </p>
      <p>
        <button onClick={() => navigate("/Form2")}>Авторизация</button>
      </p>
      
    </>
  );
};

export default User;
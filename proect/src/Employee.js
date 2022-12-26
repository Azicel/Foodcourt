import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Employee = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Кем вы являетесь? </h1>
      <p>
        <button onClick={() => navigate("/Form3")}>Регистрация</button>
      </p>
      <p>
        <button onClick={() => navigate("/Form4")}>Авторизация</button>
      </p>
      
    </>
  );
};

export default Employee;
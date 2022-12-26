import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Кем вы являетесь? </h1>
      <p>
        <button onClick={() => navigate("/contact")}>Я пользователь</button>
      </p>
      <p>
        <button onClick={() => navigate("/cont")}>Я работник</button>
      </p>
      <p>
        <button onClick={() => navigate("/Form4")}>Регистрация Работника</button>
      </p>

    </>
  );
};

export default Home;
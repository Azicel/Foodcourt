import React from "react";
import { useNavigate } from "react-router-dom";

const Cont = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Вы хотите2?</h1>
      <br />
      <p>
      <button onClick={() => navigate("/Form3")}>Войти</button>
      </p>
      <p>
      <button onClick={() => navigate(-1)}>Назад</button>
      </p>
    </>
  );
};

export default Cont;
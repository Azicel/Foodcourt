import React from "react";
import { Form, useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Вы хотите?</h1>
      <p>
      <button onClick={() => navigate("/Form")}>Регистрация</button>
      </p>
      <p>
      <button onClick={() => navigate("/Form2")}>Авторизация</button>
      </p>
      <p>
      <button onClick={() => navigate(-1)}>Назад</button>
      </p>
    </>
  );
};

export default Contact;
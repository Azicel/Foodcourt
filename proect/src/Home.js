import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Кем вы являетесь? </h1>
      <p>
        <button onClick={() => navigate("/User")}>Я пользователь</button>
      </p>
      <p>
        <button onClick={() => navigate("/Employee")}>Я работник</button>
      </p>
      
    </>
  );
};

export default Home;
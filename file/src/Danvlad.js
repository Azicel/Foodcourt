import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Danvlad.css";

const Danvlad = () => {
    const navigate = useNavigate();
  return (
    <div className="ahixhxggrbatf">
      <img className="rcctmdkvqumii" onClick={() => navigate("/Glavnastr")}/>
      <span className="zmdaypifvapfv">Ваши данные</span>
      <span className="wlgsfphkzojaq">Как вас зовут</span>
      <input className="rectangle-37" type="text" />
      <span className="e-mail">E-mail</span>
      <input className="rectangle-37-1" type="text" />
      <span className="vmbfposgbzrdi">Логин</span>
      <input className="rectangle-37-2" type="text" />
      <span className="wspudrwrrhupw">Пароль</span>
      <input className="rectangle-37-3" type="text" />
      <span className="pyduifnhyqtmf">Номер телефона</span>
      <input className="rectangle-37-4" type="text" />
      <button className="rectangle-48">
        <span className="qtglaktlhevbv"onClick={() => navigate("/Glavnastr")}>Принять</span>
      </button>
    </div>
  );
};
export default Danvlad;
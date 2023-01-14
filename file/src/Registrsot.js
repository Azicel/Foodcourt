import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Registrsot.css";
import ckekelyotnyob from "./assets/ckekelyotnyob.png";

const Registrsot = () => {
    const navigate = useNavigate();
  return (
    <div className="wuicatxxifumt">
      <img className="qxvinotghekvi" onClick={() => navigate("/Filials")} src={ckekelyotnyob} />
      <span className="mydidpyfllhfk">Регистрация сотрудника</span>
      <span className="igimsdtnuhxpr">Фамилия и имя</span>
      <input className="rectangle-37" type="text" />
      <span className="igciqoumecdud">Номер заведения</span>
      <input className="rectangle-37-1" type="text" />
      <button className="rectangle-48">
        <span className="eacgseeakoilm">Продолжить</span>
      </button>
    </div>
  );
};
export default Registrsot;
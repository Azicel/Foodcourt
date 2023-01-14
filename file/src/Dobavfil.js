import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Dobavfils.css";
import pcsdcneduwdqu from "./assets/pcsdcneduwdqu.png";

const Dobavfil = () => {
    const navigate = useNavigate();
  return (
    <div className="pjbutqyoppbpt">
      <img className="jvvfjbpchfpjh" onClick={() => navigate("/Filials")} src={pcsdcneduwdqu} />
      <span className="ybteekpszgdzg">Добавление филиала</span>
      <span className="bjrjwxbxsescd">Адрес</span>
      <input className="rectangle-37" type="text" />
      <button className="rectangle-48" onClick={() => navigate("/Filials")}>Добавить</button>
    </div>
  );
};
export default Dobavfil;
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Dostuporg.css";

const Dostuporg = () => {
    const navigate = useNavigate();
    return (
    <div className="qwnfduymznzzs">
      <span className="agxlfkcqzwmvd">Введите данные для открытия доступа</span>
      <span className="wozbwkaazgnmb">Как вас зовут</span>
      <input className="rectangle-37" type="text" />
      <span className="e-mail">E-mail</span>
      <input className="rectangle-37-1" type="text" />
      <span className="hlalkxrnpaxnu">Название организации</span>
      <input className="rectangle-37-2" type="text" />
      <span className="pelilkbasezwp">Логин</span>
      <input className="rectangle-37-3" type="text" />
      <span className="spmvkbvuyjoqq">Пароль</span>
      <input className="rectangle-37-4" type="text" />
      <button className="rectangle-48">
        <span className="kwigtqcritofl"onClick={() => navigate("/Glavnastr")}>Продолжить</span>
      </button>
    </div>
  );
};
export default Dostuporg;
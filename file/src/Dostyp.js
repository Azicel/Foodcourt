import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Dostyp.css";

const Dostyp = () => {
    const navigate = useNavigate();
  return (
    <div className="dalwfagavfhxi">
      <span className="fffsvzxuldbae">Введите данные для открытия доступа</span>
      <span className="andiuqrbgiztu">Как вас зовут</span>
      <input className="rectangle-37" type="text" />
      <span className="hoyjyltvycttg">Код организации</span>
      <input className="rectangle-37-1" type="text" />
      <span className="mearkcobgseuq">Номер заведения</span>
      <input className="rectangle-37-2" type="text" />
      <span className="fttixrdlimbtr">Код сотрудника</span>
      <input className="rectangle-37-3" type="text" />
      <button className="rectangle-48">
        <span className="qgyouokzuzard" onClick={() => navigate("/Glavnaia")}>Продолжить</span>
      </button>
    </div>
  );
};
export default Dostyp;
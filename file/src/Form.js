import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";


const Form = () => {
  const navigate = useNavigate();
  return (
    <div className="rbttiiihjfrol">
      <div className="rectangle-49" onClick={() => navigate("/Homepage")}>Пропустить</div>
      <span className="mmszvhyqwkqyr">Введите свои данные</span>
      <span className="eomfbmxdwtzzq">для входа или регистрации</span>
      <span className="hjdybesmyswgn">Как вас зовут</span>
      <input className="rectangle-37" type="text" />
      <span className="e-mail">E-mail</span>
      <input className="rectangle-37-1" type="text" />
      <span className="geeusynqzjpsw">Номер телефона</span>
      <input className="rectangle-37-2" type="text" />
      <span className="kgallvyezqzzp">
        На номер телефона будет выслан код подтверждения
      </span>
      <button className="rectangle-48">
        <span className="zovgvexuyhyxo" onClick={() => navigate("/Homepage")}>Продолжить</span>
      </button>
    </div>
  );
};
export default Form;
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./filials.css";
import xibhnungjxlmt from "./assets/xibhnungjxlmt.png";

const Filials = () => {
    const navigate = useNavigate();
  return (
    <div className="mavprjddfzbzg">
      <img className="twzfbakloxiow" onClick={() => navigate("/Glavnastr")} src={xibhnungjxlmt} />
      <span className="cibfbqituhofp">Филиалы</span>
      <span className="fhdxnbpmstukf">Номер заведения</span>
      <span className="abcomfhoepngl">Адрес:</span>
      <span className="zulqpuytkhvcd">Сотрудники: ФИ код: ФИ код: ...</span>
      <hr className="line-182" />
      <span className="tricorqfgsqvc">Номер заведения</span>
      <span className="wzixxyxzqjwlf">Адрес:</span>
      <span className="zwcmvwkfiodbl">Сотрудники: ФИ код: ФИ код: ...</span>
      <hr className="line-181" />
      <span className="vacozjqcxglry">Номер заведения</span>
      <span className="lelbqsheufcmj">Адрес:</span>
      <span className="oaotzssotyidt">Сотрудники: ФИ код: ФИ код: ...</span>
      <hr className="line-18" />
      <div className="flex-container">
        <button className="rectangle-48" onClick={() => navigate("/Dobavfil")}>Добавить филиал</button>
        <button className="rectangle-48-1" onClick={() => navigate("/Registrsot")}>Добавить сотрудника</button>
      </div>
    </div>
  );
};
export default Filials;
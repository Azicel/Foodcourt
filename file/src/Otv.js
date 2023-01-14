import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./otv.css";
import oakmgebijxrne from "./assets/oakmgebijxrne.png";
import group1131 from "./assets/group1131.svg";
import ellipse18 from "./assets/ellipse18.svg";
import group113 from "./assets/group113.svg";

const Otv = () => {
  const navigate = useNavigate();
  return (
    <div className="thwovkxikdwry">
      <img className="kegoewhaapjdi" onClick={() => navigate("/Ctr")} src={oakmgebijxrne} />
      <span className="rqoanahdpdtuh">Название ресторана</span>
      <span className="khibmrtuaibks">Отзывы</span>
      <div className="flex-container">
        <img className="ellipse-182" src={ellipse18} />
        <div className="flex-container-1">
          <span className="qyltxwchukbzx">Иван</span>
          <img className="group-1132" src={group1131} />
        </div>
        <span className="num-23102022-1523">23.10.2022 15:23</span>
      </div>
      <input className="rectangle-76" placeholder="Очень вкусно!" type="text" />
      <div className="flex-container-2">
        <img className="ellipse-181" src={ellipse18} />
        <div className="flex-container-3">
          <span>Александр</span>
          <img className="group-1131" src={group1131} />
        </div>
        <span className="num-23102022-1051">23.10.2022 10:51</span>
      </div>
      <input
        className="rectangle-76-1"
        placeholder="Буду заказывать ещё."
        type="text"
      />
      <div className="flex-container-4">
        <img className="ellipse-18" src={ellipse18} />
        <div className="flex-container-5">
          <span className="pmjpxrxhctxli">Ксения</span>
          <img className="group-113" src={group113} />
        </div>
        <span className="num-22102022-1838">22.10.2022 18:38</span>
      </div>
      <input
        className="rectangle-76-2"
        placeholder="Ужасное обслуживание!"
        type="text"
      />
      <button className="rectangle-30">Оставить отзыв</button>
    </div>
  );
};
export default Otv;
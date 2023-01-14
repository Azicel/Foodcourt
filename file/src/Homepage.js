import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import pngwing4 from "./assets/pngwing4.png";
import group1 from "./assets/group1.svg";
import icons8501 from "./assets/icons8501.png";
import rectangle13 from "./assets/rectangle13.svg";
import pngegg31 from "./assets/pngegg31.png";
import pngegg151 from "./assets/pngegg151.png";
import ellipse1 from "./assets/ellipse1.svg";
import pngegg51 from "./assets/pngegg51.png";
import rectangle17 from "./assets/rectangle17.svg";
import pngegg41 from "./assets/pngegg41.png";
import star1 from "./assets/star1.svg";
import rectangle4 from "./assets/rectangle4.svg";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="ucgvxqfkreija">
      <input className="rectangle-1" placeholder="Поиск" type="text" />
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="ellipse-1" src={ellipse1} />
          <img className="icons-8-50-1" src={icons8501} />
        </div>
        <div className="flex-container-2">
          <img className="ellipse-3" src={ellipse1} />
          <img className="pngwing-4" src={pngwing4} />
        </div>
      </div>
      <div className="flex-container-3">
        <span>Забрать самому</span>
        <span>Вынос в зал</span>
      </div>
      <div className="flex-container-4">
        <img className="rectangle-5" src={rectangle4} />
        <img className="rectangle-6" src={rectangle17} />
        <img className="rectangle-7" src={rectangle4} />
        <img className="rectangle-4" src={rectangle4} />
        <img className="rectangle-3" src={rectangle17} />
      </div>
      <div className="flex-container-5">
        <span className="puftbtvbhdjnl">Бургеры</span>
        <span>Суши</span>
        <span className="zpfmiwtbekrit">Пицца</span>
        <span>Десерты</span>
        <span>Напитки</span>
      </div>
      <div className="flex-container-6">
        <img className="pngegg-15-1" src={pngegg151} />
        <img className="rectangle-17" src={rectangle17} />
        <img className="rectangle-18" src={rectangle17} />
        <img className="rectangle-19" src={rectangle17} />
        <img className="rectangle-20" src={rectangle17} />
      </div>
      <div className="flex-container-7">
        <span className="ybumllaevqpjc">Мясо</span>
        <span className="plbxzwiconrya">Рыба</span>
        <span className="kqkgehjosinxk">Азиатская кухня</span>
        <span className="thxnutpeykfia">Домашняя еда</span>
        <span className="jhxkbdqaitfwp">Здоровое питание</span>
      </div>
      <span className="mcttacembkxzr">Акции</span>
      <div className="flex-container-8">
        <div className="rectangle-8">
          <span className="ebidxrzcgvnbv">Акции и скидки</span>
        </div>
        <div className="rectangle-9">
          <span className="mvsmflcvlshoy">Акции и скидки</span>
        </div>
        <div className="rectangle-10">
          <span className="mozzcotxwaoew">Акции и скидки</span>
        </div>
      </div>
      <div className="flex-container-9">
        <span className="bwbgpatmnffjg">Рестораны</span>
        <span className="cempgjyffuzkl">Фильтры</span>
        <img className="group-1" src={group1} />
      </div>
      <div className="flex-container-10">
        <div className="rectangle-14">
          <img className="rectangle-15" src={rectangle13} />
          <span className="awwyjqsqzuydo" onClick={() => navigate("/Ctr")}>Название</span>
          <div className="flex-container-11">
            <img className="star-1" src={star1} />
            <span>4,5</span>
          </div>
        </div>
        <div className="efhirkremhqeh">
          <img className="rectangle-13" src={rectangle13} />
          <span className="fggdyvgqrnyxs" onClick={() => navigate("/Ctr")}>Название</span>
          <div className="flex-container-12">
            <img className="star-2" src={star1} />
            <span>4,3</span>
          </div>
        </div>
      </div>
      <hr className="line-24" />
      <div className="rectangle-72">
        <div className="flex-container-13">
          <img className="pngegg-5-1" src={pngegg51} />
          <span>Главная</span>
        </div>
        <div className="flex-container-14">
          <span img className="pngegg-4-1" src={pngegg41}
           onClick={() => navigate("/Basket")}>Корзина</span>
        </div>
        <div className="flex-container-15">
        <span className="pngegg-3-1" src={pngegg31} 
           onClick={() => navigate("/Prof")}>Профиль</span> 
        </div>
      </div>
    </div>
  );
};
export default Homepage;
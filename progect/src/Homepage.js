import React from 'react';
import {useNavigate } from "react-router-dom";
import "./Homepagecss.css";
import ellipse1 from "./assets/ellipse1.svg";
import pngegg151 from "./assets/pngegg151.png";
import icons8501 from "./assets/icons8501.png";
import pngwing4 from "./assets/pngwing4.png";
import pngegg41 from "./assets/pngegg41.png";
import rectangle4 from "./assets/rectangle4.svg";
import pngegg31 from "./assets/pngegg31.png";
import group1 from "./assets/group1.svg";
import star1 from "./assets/star1.svg";
import rectangle17 from "./assets/rectangle17.svg";
import rectangle13 from "./assets/rectangle13.svg";
import pngegg51 from "./assets/pngegg51.png";
import rectangle9 from "./assets/rectangle9.svg";
import rectangle10 from "./assets/rectangle10.svg";
import vbqayoznkhfwt from "./assets/vbqayoznkhfwt.svg";
import pngegg62 from "./assets/pngegg62.png";
import pngegg71 from "./assets/pngegg71.png";
import pngegg81 from "./assets/pngegg81.png";
import pngegg91 from "./assets/pngegg91.png";
import pngegg101 from "./assets/pngegg101.png";
import pngegg111 from "./assets/pngegg111.png";
import pngegg121 from "./assets/pngegg121.png";
import pngegg131 from "./assets/pngegg131.png";
import pngegg141 from "./assets/pngegg141.png";
import Home from './Home';

const Homepage = () => {
    const navigate = useNavigate();
  
    return (
      <>
        <div className="element2">
          <div className="sbwipawsnoamu">
      <input className="rectangle-1" placeholder="Поиск" type="text" />
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="ellipse-1" src={ellipse1} alt="description of image"/>
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
        <span className="ddlgvljbanmjt">Бургеры</span>
        <span>Суши</span>
        <span className="larpjygylzslp">Пицца</span>
        <span>Десерты</span>
        <span>Напитки</span>
      </div>
      <div className="flex-container-6">
        <img className="pngegg-15-1" src={pngegg151} />
        {/*<img className="pngegg-6-2" src={pngegg62} />
        <img className="pngegg-7-1" src={pngegg71} />
        <img className="pngegg-8-1" src={pngegg81} />
        <img className="pngegg-9-1" src={pngegg91} />
        <img className="pngegg-10-1" src={pngegg101} />
        <img className="pngegg-11-1" src={pngegg111} />
        <img className="pngegg-12-1" src={pngegg121} />
        <img className="pngegg-13-1" src={pngegg131} />
        <img className="pngegg-14-1" src={pngegg141} />*/}
        
        <img className="rectangle-17" src={rectangle17} />
        <img className="rectangle-18" src={rectangle17} />
        <img className="rectangle-19" src={rectangle17} />
        <img className="rectangle-20" src={rectangle17} />
        {/*<img className="rectangle-9" src={rectangle9} />
        <img className="rectangle-10" src={rectangle10} />*/}
      </div>
      <div className="flex-container-7">
        <span className="hprgafknvryag">Мясо</span>
        <span className="txrminxtwjyzt">Рыба</span>
        <span className="uhhzvpterirwj">Азиатская кухня</span>
        <span className="ynjyalblcvfyd">Домашняя еда</span>
        <span className="kndtxiwuunkai">Здоровое питание</span>
      </div>
      <span className="xefsvqxlipnji">Акции</span>
      <div className="flex-container-8">
        <div className="rectangle-8">
          <span className="iiyknjzurujrq">Акции и скидки</span>
        </div>
        <div className="rectangle-9">
          <span className="tiqkjvajorpfk">Акции и скидки</span>
        </div>
        <div className="rectangle-10">
          <span className="lhgcxxcrabnlw">Акции и скидки</span>
        </div>
      </div>
      <div className="flex-container-9">
        <span className="ngyakeqtnogfz">Рестораны</span>
        <span className="uostqgnmoqwex">Фильтры</span>
        <img className="group-1" src={group1} />
      </div>
      <div className="flex-container-10">
        <div className="rectangle-14">
          <img className="rectangle-15" src={rectangle13} />
          <span className="iwyuefxfmscbo" onClick={() => navigate("/Dishdescriptionpage") }>Название</span>
          <div className="flex-container-11">
            <img className="star-1" src={star1} />
            <span>4,5</span>
          </div>
        </div>
        <div className="drdsrdcionibe">
          <img className="rectangle-13" src={rectangle13} />
          <span className="ucjgznxlddgbj" onClick={() => navigate("/Dishdescriptionpage") }>Название</span>
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
          <span onClick={() => navigate("/Homepage") }>Главная</span>
        </div>
        <div className="flex-container-14">
          <img className="pngegg-4-1" src={pngegg41} />
          <span onClick={() => navigate("/Basket") }>Корзина</span>
        </div>
        <div className="flex-container-15">
          <img className="pngegg-3-1" src={pngegg31} />
          <span onClick={() => navigate("/Prof") }>Профиль</span>
        </div>
      </div>
    </div>
    </div>
      </>

    );
  };
  
  export default Homepage;
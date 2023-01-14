import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Statistic.css";
import zcabfpkznxann from "./assets/zcabfpkznxann.png";
import star10 from "./assets/star10.svg";
import group55 from "./assets/group55.svg";
import line16 from "./assets/line16.svg";
import line14 from "./assets/line14.svg";

const Statistic = () => {
    const navigate = useNavigate();
  return (
    <div className="vugqmfusvezju">
      <img className="khyebkmmhcrug" onClick={() => navigate("/Glavnaia")} src={zcabfpkznxann} />
      <span className="sxxtbpoiaotoh">Статистика</span>
      <span className="clrkamgskfcru">Оценки пользователей</span>
      <div className="rectangle-55">
        <div className="flex-container">
          <span>0.0</span>
          <img className="group-55" src={group55} />
        </div>
        <div className="flex-container-1">
          <img className="star-9" src={star10} />
          <img className="star-10" src={star10} />
          <img className="star-11" src={star10} />
          <img className="star-12" src={star10} />
          <img className="star-13" src={star10} />
        </div>
        <div className="flex-container-2">
          <span>5</span>
          <span>4</span>
          <span>3</span>
          <span className="tudzhislrxtot">2</span>
          <span className="nugnawkqpilpg">1</span>
        </div>
        <div className="flex-container-3">
          <span>790</span>
          <span className="num-36">36</span>
          <span className="num-12">12</span>
          <span className="cvecdtyuytsku">4</span>
          <span className="num-27">27</span>
        </div>
      </div>
      <div className="flex-container-4">
        <button className="rectangle-25">День</button>
        <button className="rectangle-26">
          <span className="batpnbaubvixp">Неделя</span>
        </button>
        <button className="rectangle-26-1">
          <span className="mzunxjbzjrces">Месяц</span>
        </button>
      </div>
      <span className="xbduotkvgvnaq">Отзывы</span>
      <div className="rectangle-56">
        <img className="line-16" src={line16} />
        <img className="line-14" src={line14} />
        <span className="abbrvdxefsszw">Комментарий</span>
        <span className="kuvnraawqtkzq">Оценка</span>
        <span className="pnlirhxbzefoo">Номер заказа</span>
        <hr className="line-15" />
        <span className="pyukrogpkffhr">Нет данных</span>
        <span className="arjllljcjyzoe">3</span>
        <span className="num-03">Д-03</span>
      </div>
      <div className="flex-container-5">
        <span className="cobqjeiahrqrw" onClick={() => navigate("/Detzak")}>Просмотр деталей</span>
        <img className="yfvilmnlzgqdl" src={zcabfpkznxann} />
      </div>
      <div className="rectangle-56-1">
        <img className="line-161" src={line16} />
        <img className="line-141" src={line14} />
        <span className="czvlimogihsrf">Комментарий</span>
        <span className="mnxrppqknnkcr">Оценка</span>
        <span className="svjoymiubdvel">Номер заказа</span>
        <hr className="line-151" />
        <span className="uifhgxxrmyjhu">Очень вкусно!</span>
        <span className="dqvrywtsjwjnv">5</span>
        <span className="num-02">С-02</span>
      </div>
      <div className="flex-container-6">
        <span className="bsqofelruvtiv" onClick={() => navigate("/Detzak")}>Просмотр деталей</span>
        <img className="adfqxssfbgkbf" src={zcabfpkznxann} />
      </div>
      <div className="rectangle-56-2">
        <img className="line-162" src={line16} />
        <img className="line-142" src={line14} />
        <span className="cpmpdxeuuoioa">Комментарий</span>
        <span className="zwrfbadtmgcxs">Оценка</span>
        <span className="hsyckqxuntqyf">Номер заказа</span>
        <hr className="line-152" />
        <span className="sgmqodyzzhnsn">Нет данных</span>
        <span className="dvktdbajpbmmy">4</span>
        <span className="num-02-1">Д-02</span>
      </div>
      <div className="flex-container-7">
        <span className="ykmgdksxklwza" onClick={() => navigate("/Detzak")}>Просмотр деталей</span>
        <img className="wurwhpayllyoy" src={zcabfpkznxann} />
      </div>
    </div>
  );
};
export default Statistic;
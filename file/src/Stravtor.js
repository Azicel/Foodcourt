import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./stravtor.css";
import ellipse7 from "./assets/ellipse7.svg";
import ellipse9 from "./assets/ellipse9.svg";
import tiahlnqrwlxgl from "./assets/tiahlnqrwlxgl.png";
import ellipse18 from "./assets/ellipse18.svg";
const Stravtor = () => {
    const navigate = useNavigate();
    return (
        <div className="tgdrdlcrnyunq">
          <div className="flex-container">
            <div className="flex-container-1">
              <img className="pytwdyhwgulme" onClick={() => navigate("/Prof")} src={tiahlnqrwlxgl} />
              <span>Данные</span>
            </div>
            <img className="ellipse-18" src={ellipse18} />
          </div>
          <span className="gpfktzrjnthcr">Как вас зовут</span>
          <input className="rectangle-37" type="text" />
          <span className="dyuoijlsqrsvj">Дата рождения</span>
          <input className="rectangle-37-1" type="text" />
          <span className="ubwcvymrabbco">Пол</span>
          <input className="rectangle-37-2" type="text" />
          <span className="e-mail">E-mail</span>
          <input className="rectangle-37-3" type="text" />
          <button className="rectangle-75">
            <span className="hasgmzjxomsdp">Отправить код подтверждения</span>
          </button>
          <span className="uxbcmifhbbron">Номер телефона</span>
          <input className="rectangle-37-4" type="text" />
          <div className="flex-container-2">
            <span className="bgjjthjvqeoht">Способы оплаты</span>
            <img className="oxskluzwgvgym" src={tiahlnqrwlxgl} />
          </div>
          <span className="juqhgkfdyftsi">Реклама и акции</span>
          <div className="flex-container-3">
            <span className="tbhglkdwbxvza">Электронная почта</span>
            <img className="ellipse-9" src={ellipse9} />
          </div>
          <div className="flex-container-4">
            <span className="push">СМС и push-уведомления</span>
            <img className="ellipse-7" src={ellipse7} />
          </div>
          <button className="rectangle-48">
            <span className="xatirihxzogax">Принять</span>
          </button>
        </div>
      );
    };
    export default Stravtor;
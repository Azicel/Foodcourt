import React from "react";
import { useNavigate } from "react-router-dom";
import ellipse10 from "./assets/ellipse10.svg";
import qolsxmojbrnrv from "./assets/qolsxmojbrnrv.png";
import ellipse8 from "./assets/ellipse8.svg";
import rectangle47 from "./assets/rectangle47.svg";
import "./Ofzcss.css"

const Ofz = () => {
  const navigate = useNavigate();
  return (
    <div className="element6">
    <div className="ffztugfinhxdg">
      <div className="nizsgqaixmobj">
        <img className="ovguonktvvrqs" src={qolsxmojbrnrv} />
        <span className="kyldindzopdsa">Оформление заказа</span>
        <div className="flex-container">
          <button className="rectangle-26">
            <span className="uphodzazrtobz">Заберу сам</span>
          </button>
          <button className="rectangle-27" onClick={() => navigate("/Bz") }>Вынос в зал</button>
        </div>
        <span className="ayuxtpgptsxot">Контактная информация</span>
        <span className="ibzzmjyuaedyr">Как вас зовут</span>
        <input className="rectangle-37" type="text" />
        <span className="owwnuvxpmprvk">Номер телефона</span>
        <input className="rectangle-37-1" type="text" />
        <span className="e-mail">E-mail</span>
        <input className="rectangle-37-2" type="text" />
        <span className="dhnryiryxzpko">Откуда хотите забрать?</span>
        <div className="flex-container-1">
          <div className="rectangle-51">Яндекс Карты</div>
          <div className="rectangle-50">
            <span className="num-49">ул. Ленина, 49</span>
            <span className="num-12">1,2 км</span>
            <img className="vmxkmegngtanm" src={qolsxmojbrnrv} />
          </div>
        </div>
      </div>
      <div className="dzvjzswsweafp">
        <span className="tttkcatunfifx">Комментарий</span>
        <input className="rectangle-45" type="text" />
        <span className="ppkqynpkofdam">Когда хотите забрать заказ?</span>
        <div className="flex-container-2">
          <span>Дата</span>
          <span>Время</span>
        </div>
        <div className="flex-container-3">
          <select className="rectangle-45-1" />
          <select className="rectangle-46" />
        </div>
        <span className="sqkasndosgzay">Способ оплаты</span>
        <div className="flex-container-4">
          <img className="ellipse-9" src={ellipse10} />
          <span className="mkjpgzczghcfi">СБП (Система быстрых платежей)</span>
        </div>
        <div className="flex-container-5">
          <img className="ellipse-81" src={ellipse10} />
          <span className="baofthvcqadpj">Картой онлайн</span>
        </div>
        <div className="flex-container-6">
          <img className="ellipse-8" src={ellipse8} />
          <span className="tiofvhgcjygav">Наличными при получении</span>
        </div>
        <div className="flex-container-7">
          <img className="ellipse-10" src={ellipse10} />
          <span className="fvymsgnqnlwxn">Картой при получении</span>
        </div>
        <span className="owuqdeimcsvrk">Сдача с</span>
        <img className="rectangle-47" src={rectangle47} />
        <span className="mmofdpugiwpyx">Оплатить бонусами</span>
        <span className="dqmvstdlbekhs">Кол-во бонусов для списания</span>
        <div className="flex-container-8">
          <div className="rectangle-33">0 бонусов</div>
          <div className="rectangle-34">Использовать</div>
        </div>
        <button className="rectangle-36">
          <span className="num-260">260 руб</span>
          <span className="npqzoopcramss">Заказать</span>
        </button>
      </div>
    </div>
    </div>
  );
};
  
  export default Ofz;
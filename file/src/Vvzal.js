import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./vvzal.css";
import ellipse10 from "./assets/ellipse10.svg";
import sypatesmlddia from "./assets/sypatesmlddia.png";
import ellipse8 from "./assets/ellipse8.svg";

const Vvzal = () => {
  const navigate = useNavigate();
  return (
    <div className="oqvkgaiwnwelt">
      <div className="ygivfflifdqhn">
        <img className="veaunvattzdch" onClick={() => navigate("/Basket")} src={sypatesmlddia} />
        <span className="gczmcsanpicds">Оформление заказа</span>
        <div className="flex-container">
          <button className="rectangle-26">
            <span className="kowmptcqkldan" onClick={() => navigate("/Samv")}>Заберу сам</span>
          </button>
          <button className="rectangle-27">Вынос в зал</button>
        </div>
        <span className="dwyjpzadaomdn">Контактная информация</span>
        <span className="nvbukpvwwyocc">Как вас зовут</span>
        <input className="rectangle-37" type="text" />
        <span className="pbwrzjsndjuhv">Номер телефона</span>
        <input className="rectangle-37-1" type="text" />
        <span className="e-mail">E-mail</span>
        <input className="rectangle-37-2" type="text" />
        <span className="uuizeebjpazpo">Где вы находитесь?</span>
        <div className="flex-container-1">
          <div className="rectangle-51">Яндекс Карты</div>
          <div className="rectangle-50">
            <span className="num-49">ул. Ленина, 49</span>
            <span className="num-12">1,2 км</span>
            <img className="mxqyqosjuafhr" src={sypatesmlddia} />
          </div>
        </div>
      </div>
      <div className="jeyltwffcpear">
        <span className="ahcdhuhxpeufc">За каким столом вы находитесь?</span>
        <div className="rectangle-48">
          <div className="rectangle-52">
            <span className="ebuonepijgorn">Стол №</span>
          </div>
        </div>
        <span className="num-2300">
          Необходимо указать номер стола. Доступен до 23:00
        </span>
        <span className="aualxunqmekiw">Комментарий</span>
        <input className="rectangle-45" type="text" />
        <span className="apwftfigbzmmv">Способ оплаты</span>
        <div className="flex-container-2">
          <img className="ellipse-9" src={ellipse10} />
          <span className="lrflrtoqkjpkp">СБП (Система быстрых платежей)</span>
        </div>
        <div className="flex-container-3">
          <img className="ellipse-81" src={ellipse10} />
          <span className="xosshwgmesnoq">Картой онлайн</span>
        </div>
        <div className="flex-container-4">
          <img className="ellipse-8" src={ellipse8} />
          <span className="elmubljfsxxzz">Наличными при получении</span>
        </div>
        <div className="flex-container-5">
          <img className="ellipse-10" src={ellipse10} />
          <span className="bcdkeuarkyryp">Картой при получении</span>
        </div>
        <span className="vttxdejwiymce">Сдача с</span>
        <input className="rectangle-47" type="text" />
        <span className="qpytzjdurrjuw">Оплатить бонусами</span>
        <span className="cndfnsrvagddk">Кол-во бонусов для списания</span>
        <div className="flex-container-6">
          <div className="rectangle-33">0 бонусов</div>
          <div className="rectangle-34">Использовать</div>
        </div>
        <button className="rectangle-36">
          <span className="num-260">260 руб</span>
          <span className="rchuvnppihotl">Заказать</span>
        </button>
      </div>
    </div>
  );
};
export default Vvzal;
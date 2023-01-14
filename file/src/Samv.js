import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./samv.css";
import ellipse10 from "./assets/ellipse10.svg";
import rectangle47 from "./assets/rectangle47.svg";
import jugtuloehbgei from "./assets/jugtuloehbgei.png";
import ellipse8 from "./assets/ellipse8.svg";

const Samv = () => {
  const navigate = useNavigate();
  return (
    <div className="csvcjzmnhhspd">
      <div className="nlynquszvtscd">
        <img className="qbhaeqpbdiwva" onClick={() => navigate("/Basket")} src={jugtuloehbgei} />
        <span className="jvkmozzpqlgpd">Оформление заказа</span>
        <div className="flex-container">
          <button className="rectangle-26">
            <span className="muqieliecbvzy">Заберу сам</span>
          </button>
          <button className="rectangle-27" onClick={() => navigate("/Vvzal")}>Вынос в зал</button>
        </div>
        <span className="tkmrtuluwcwer">Контактная информация</span>
        <span className="qahtahflnqbbg">Как вас зовут</span>
        <input className="rectangle-37" type="text" />
        <span className="dpcwssjwamtmx">Номер телефона</span>
        <input className="rectangle-37-1" type="text" />
        <span className="e-mail">E-mail</span>
        <input className="rectangle-37-2" type="text" />
        <span className="dstbonulbevkx">Откуда хотите забрать?</span>
        <div className="flex-container-1">
          <div className="rectangle-51">Яндекс Карты</div>
          <div className="rectangle-50">
            <span className="num-49">ул. Ленина, 49</span>
            <span className="num-12">1,2 км</span>
            <img className="fifuuepvlghfu" src={jugtuloehbgei} />
          </div>
        </div>
      </div>
      <div className="mffjxbipidukq">
        <span className="lpnkmaextvydz">Комментарий</span>
        <input className="rectangle-45" type="text" />
        <span className="zmmmdeicpstif">Когда хотите забрать заказ?</span>
        <div className="flex-container-2">
          <span>Дата</span>
          <span>Время</span>
        </div>
        <div className="flex-container-3">
          <select className="rectangle-45-1" />
          <select className="rectangle-46" />
        </div>
        <span className="euhzevgglirft">Способ оплаты</span>
        <div className="flex-container-4">
          <img className="ellipse-9" src={ellipse10} />
          <span className="lykyshcgzrqhb">СБП (Система быстрых платежей)</span>
        </div>
        <div className="flex-container-5">
          <img className="ellipse-81" src={ellipse10} />
          <span className="iubavvzmeghih">Картой онлайн</span>
        </div>
        <div className="flex-container-6">
          <img className="ellipse-8" src={ellipse8} />
          <span className="znogmhfeiynwi">Наличными при получении</span>
        </div>
        <div className="flex-container-7">
          <img className="ellipse-10" src={ellipse10} />
          <span className="pzmcdpmmtxlsq">Картой при получении</span>
        </div>
        <span className="wlnkvunbclumy">Сдача с</span>
        <img className="rectangle-47" src={rectangle47} />
        <span className="rnmpdsxgtcqhi">Оплатить бонусами</span>
        <span className="stkbswhlagadn">Кол-во бонусов для списания</span>
        <div className="flex-container-8">
          <div className="rectangle-33">0 бонусов</div>
          <div className="rectangle-34">Использовать</div>
        </div>
        <button className="rectangle-36">
          <span className="num-260">260 руб</span>
          <span className="idmnditdjsdpx">Заказать</span>
        </button>
      </div>
    </div>
  );
};
export default Samv;
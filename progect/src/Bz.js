import React from "react";
import { useNavigate } from "react-router-dom";
import ellipse8 from "./assets/ellipse8.svg";
import ellipse10 from "./assets/ellipse10.svg";
import iipvfzjucrjew from "./assets/iipvfzjucrjew.png";
import "./Bzcss.css"

const Bz = (props) => {
  const navigate = useNavigate();
  return(
        <div className="element7">
        <div className="byvcmzrjqkeky">
        <div className="qvaadbanubbaa">
           <img className="glrnlfoozpgfr" src={iipvfzjucrjew} />
           <span className="lkqwdqfgzcawd">Оформление заказа</span>
            <div className="flex-container">
              <button className="rectangle-26">
                <span className="knxhuzjpxbhah" onClick={() => navigate("/Ofz") }>Заберу сам</span>
              </button>
              <button className="rectangle-27">Вынос в зал</button>
            </div>
            <span className="reabythwywzoa">Контактная информация</span>
            <span className="oxursvmwlxcqj">Как вас зовут</span>
            <input className="rectangle-37" type="text" />
            <span className="pjleyxichaldx">Номер телефона</span>
            <input className="rectangle-37-1" type="text" />
            <span className="e-mail">E-mail</span>
            <input className="rectangle-37-2" type="text" />
            <span className="avrqcsgxwgqkq">Где вы находитесь?</span>
            <div className="flex-container-1">
              <div className="rectangle-51">Яндекс Карты</div>
              <div className="rectangle-50">
                <span className="num-49">ул. Ленина, 49</span>
                <span className="num-12">1,2 км</span>
                <img className="vmjlifbvctnjb" src={iipvfzjucrjew} />
              </div>
            </div>
          </div>
          <div className="bwfvoqljkqmpv">
            <span className="rltcdcydlfnbu">За каким столом вы находитесь?</span>
            <div className="rectangle-48">
              <div className="rectangle-52">
                <span className="vmnfdbrncubmr">Стол №</span>
              </div>
            </div>
            <span className="num-2300">
              Необходимо указать номер стола. Доступен до 23:00
            </span>
            <span className="ahrtmiqrkmjgq">Комментарий</span>
            <input className="rectangle-45" type="text" />
            <span className="esuixaoijioem">Способ оплаты</span>
            <div className="flex-container-2">
              <img className="ellipse-9" src={ellipse10} />
              <span className="axnshapwfyahu">СБП (Система быстрых платежей)</span>
            </div>
            <div className="flex-container-3">
              <img className="ellipse-81" src={ellipse10} />
              <span className="qtzwlhrrzjxju">Картой онлайн</span>
            </div>
            <div className="flex-container-4">
              <img className="ellipse-8" src={ellipse8} />
              <span className="dnjijefwxqhlu">Наличными при получении</span>
            </div>
            <div className="flex-container-5">
              <img className="ellipse-10" src={ellipse10} />
              <span className="ojncybyspoivs">Картой при получении</span>
            </div>
            <span className="fidbnvcrzqwzn">Сдача с</span>
            <input className="rectangle-47" type="text" />
            <span className="lapuihdstdkck">Оплатить бонусами</span>
            <span className="prqlptzuvsokd">Кол-во бонусов для списания</span>
            <div className="flex-container-6">
              <div className="rectangle-33">0 бонусов</div>
              <div className="rectangle-34">Использовать</div>
            </div>
            <button className="rectangle-36">
              <span className="num-260">260 руб</span>
              <span className="kshehvnwnywrb">Заказать</span>
            </button>
          </div>
          </div>
          </div>
          
          
  );
};
export default Bz;


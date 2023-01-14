import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Glavnaia.css";
import zipaiowtitmwb from "./assets/zipaiowtitmwb.png";
import pngegg21 from "./assets/pngegg21.png";
import rectangle59 from "./assets/rectangle59.svg";
import pngegg61 from "./assets/pngegg61.png";
import eawcmpwljpikj from "./assets/eawcmpwljpikj.png";
import wbnvxxlbplttx from "./assets/wbnvxxlbplttx.png";
import gnqlusabaecsv from "./assets/gnqlusabaecsv.png";
import kirigjdnulfbf from "./assets/kirigjdnulfbf.png";
const Glavnaia = () => {
    const navigate = useNavigate();
  return (
    <div className="cdirzswmwuwrz">
      <img className="rectangle-59" src={rectangle59} />
      <span className="jjzfhuevimfbr">Имя сотрудника</span>
      <span className="idujjlkircwdn">Ресторан “Название ресторана”</span>
      <span className="qsbbxmoqfrymk">Адрес ресторана</span>
      <div className="flex-container">
        <img className="wpcrfnuenghva" onClick={() => navigate("/Strazak")} src={gnqlusabaecsv} />
        <span onClick={() => navigate("/Strazak")}>Текущие заказы</span>
        <img className="kdzyorkxpwkov" src={zipaiowtitmwb} />
      </div>
      <hr className="line-9" />
      <div className="flex-container-1">
        <img className="enukgocdpyesq" onClick={() => navigate("/Arxivzac")} src={eawcmpwljpikj} />
        <span className="tweyzdistpdxt" onClick={() => navigate("/Arxivzac")}>Архив заказов</span>
        <img className="dfcsyhsbvzlbi" src={zipaiowtitmwb} />
      </div>
      <hr className="line-92" />
      <div className="flex-container-2">
        <img className="pngegg-6-1" onClick={() => navigate("/Statistic")} src={pngegg61} />
        <span className="uoblmzschifip" onClick={() => navigate("/Statistic")}>Статистика</span>
        <img className="zpxtrenyykotq" src={zipaiowtitmwb} />
      </div>
      <hr className="line-91" />
      <div className="flex-container-3">
        <img className="kmbsmbrwafrdh" onClick={() => navigate("/Stoplist")} src={wbnvxxlbplttx} />
        <span className="jypgxypsvhxnq" onClick={() => navigate("/Stoplist")}>Стоп лист</span>
        <img className="nmfqyedbtlgfk" src={zipaiowtitmwb} />
      </div>
      <hr className="line-10" />
      <div className="flex-container-4">
        <img className="hogqwjwuqipid" onClick={() => navigate("/Regimrab")} src={kirigjdnulfbf} />
        <span className="xlnknoxmmrliv" onClick={() => navigate("/Regimrab")}>Режим работы</span>
        <img className="rvvlhzxwoqewx" src={zipaiowtitmwb} />
      </div>
      <hr className="line-101" />
      <div className="flex-container-5">
        <img className="pngegg-2-1" onClick={() => navigate("/Texpod")} src={pngegg21} />
        <span className="fxaphwdmzdjaj" onClick={() => navigate("/Texpod")}>Тех. поддержка</span>
        <img className="htsuuphqndrqg" src={zipaiowtitmwb} />
      </div>
      <hr className="line-102" />
    </div>
  );
};
export default Glavnaia;
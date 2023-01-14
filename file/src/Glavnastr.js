import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Glavnastr.css";
import zigkxedifcffr from "./assets/zigkxedifcffr.png";
import idssegcihhwxd from "./assets/idssegcihhwxd.png";
import pngegg2 from "./assets/pngegg2.png";
import pngegg4 from "./assets/pngegg4.png";
import rectangle59 from "./assets/rectangle59.svg";
import cwqqqfwdyswpg from "./assets/cwqqqfwdyswpg.png";

const Glavnastr = () => {
    const navigate = useNavigate();
  return (
    <div className="ycilthlqvgodx">
      <img className="rectangle-59" src={rectangle59} />
      <span className="awmparbjybtss">Ресторан “Название ресторана”</span>
      <div className="flex-container">
        <img className="ekcodkztoduiu" src={cwqqqfwdyswpg} />
        <span onClick={() => navigate("/Danvlad")}>Ваши данные</span>
        <img className="pfhcedsqphgtg" src={idssegcihhwxd} />
      </div>
      <hr className="line-9" />
      <div className="flex-container-1">
        <img className="astltbejgceer" src={cwqqqfwdyswpg} />
        <span onClick={() => navigate("/Dannorg")}>Данные организации</span>
        <img className="efktlkgwwzqkw" src={idssegcihhwxd} />
      </div>
      <hr className="line-91" />
      <div className="flex-container-2">
        <img className="pngegg-4" src={pngegg4} />
        <span className="ctikucfzlpnst" onClick={() => navigate("/Filials")}>Филиалы</span>
        <img className="lxhdffnplkqlv" src={idssegcihhwxd} />
      </div>
      <hr className="line-93" />
      <div className="flex-container-3">
        <img className="pngegg-2" src={pngegg2} />
        <span className="qsvkmtmkleriv" onClick={() => navigate("/")}>Сотрудники</span>
        <img className="drizeejtqusmh" src={idssegcihhwxd} />
      </div>
      <hr className="line-92" />
      <div className="flex-container-4">
        <img className="meopgnpecxezy" src={zigkxedifcffr} />
        <span className="agqcoigtfezyr" onClick={() => navigate("/Menu")}>Меню</span>
        <img className="zqgjhrzqejrve" src={idssegcihhwxd} />
      </div>
      <hr className="line-10" />
    </div>
  );
};
export default Glavnastr;
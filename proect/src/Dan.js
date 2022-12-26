import React from 'react';
import {useNavigate } from "react-router-dom";
{/*import "./Dancss.css"*/}

const Dan = (props) => {
    const navigate = useNavigate();
  
    return (
      <>
      {/*<div className="style">*/}
      <p><span>Данные</span></p>
      <p><span className="Name">Как вас зовут</span></p>
      <input className="Name" type="text" />
      <p><span className="Dr">Дата рождения</span></p>
      <input className="Dr" type="text" />
      <p><span className="Pol">Пол</span></p>
      <input className="Pol" type="text" />
      <p><span className="e-mail">E-mail</span></p>
      <input className="e-mail" type="text" />
      <p><button className="rectangle-75">
        <span className="eiywuccvlzkmv">Отправить код подтверждения</span>
      </button></p>
      <p><span className="Nomber">Номер телефона</span></p>
      <input className="Nomber" type="text" />
      <p><button className="button" onClick={() => navigate("/Prof") }>Принять</button></p>
      <p><button onClick={() => navigate("/Prof") }>Назад</button></p>
      {/* </div> какой-то текст для работы комментария */}
      </>
    );
  };
  
  export default Dan;
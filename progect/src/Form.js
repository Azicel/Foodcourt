import { useNavigate } from "react-router-dom";
import "./Formcss.css";


export default function Form() {

const navigate = useNavigate();

return (
	<div className="element">
	<div className="fhxscakmrtzvv">
	<span className="rectangle-49" onClick={() => navigate("/Homepage")}>Пропустить</span>
	<span className="xhagtovfkgvbu">Введите свои данные</span>
    <span className="urczzcdbuahwn">для входа или регистрации</span>
	<span className="sdlcfafckxorz">Как вас зовут</span>
	<input className="rectangle-37" type="text" />
	<span className="e-mail">E-mail</span>
	<input className="rectangle-37-1" type="text" />
	<span className="epkidmvqizcwn">Номер телефона</span>
	<input className="rectangle-37-2" type="text" />
	<span className="wibjngjlowwea">
    На номер телефона будет выслан код подтверждения
    </span>
	<button className="rectangle-48" onClick={() => navigate("/Homepage") }>
    <span className="zzmpxegjwcvuz">Продолжить</span>
    </button>	
	</div>
	</div>
	
);
}
import { timeout } from 'async';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Form() {

const navigate = useNavigate();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const [submitted, setSubmitted] = useState(false);
const [error] = useState(false);


const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};


const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};


const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

const handleReg = () => {
	if (name === '' || email === '' || password === '') {
		errorMessage();
		} 
	else 
	{
		fetch('http://localhost:8080/registration/user',{
			method: 'POST',
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"Login":name,
				"Full_Name":name,
				"Birthday":"2010-10-20",
				"Sex":"Male",
				"TelNumber":8957723412,
				"Email":email,
				"Password":password
			})
		})
		.then(res => {
			res.json()
			successMessage()})
		.catch(e => {
			errorMessage()});
		setSubmitted(true);
	}
}


const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>Пользователь {name} успешно зарегестрирован</h1>
	</div>
	);
};


const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Пожалуйста, заполните все поля</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Регистрация</h1>
	</div>


	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>

		<label className="label">Имя</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Пароль</label>
		<input onChange={handlePassword} className="input"
		value={password} type="string" />

<			button onClick={(_handleSubmit) =>{
										handleReg()
									navigate('/homepage')}} 
									className="btn" type="submit">   
          Зарегестрироваться
		</button>
	</form>
	</div>
);
}
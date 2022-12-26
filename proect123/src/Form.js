import { useState } from 'react';



export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [number, setNumber] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handleNumber = (e) => {
	setNumber(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || number === '') {
	setError(true);
	} else {
		fetch('http://localhost:3000/registration/user',{
			method: 'POST',
			body: JSON.stringify({
				"Login":name,
				"Full_Name":name,
				"Birthday":"2010-10-20",
				"Sex":"Male",
				"TelNumber":8957723412,
				"Email":email,
				"Password":number
			})
		}).then(res => res.json())
		.then(data => {
			setSubmitted(true)
			successMessage()})
		.catch(e => errorMessage);
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
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

// Showing error message if error is true
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

		<label className="label">Номер телефона</label>
		<input onChange={handleNumber} className="input"
		value={number} type="number" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Зарегестрироваться
		</button>
	</form>
	</div>
);
}
import { timeout } from 'async';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
export default function Form() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || password === '' ) {
      errorMessage();
    } else {
      fetch('http://localhost:8080/login/user',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "Login": name,
          "Password": password
        }
      )})
        .then(res => {
          setSubmitted(true)
          successMessage()
          res.json()})
        .catch(e => errorMessage);
      }
  };
 
  
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Пользователь {name} вход выполнил</h1>
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
        <h1>Пожалуйста заполните все поля</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>Авторизация</h1>
      </div>
 
      
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        <label className="label">Имя</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />

        <label className="label">Пароль</label>
		<input onChange={handlePassword} className="input"
		    value={password} type="password" />
 
            <button onClick={(_handleSubmit) => {
              handleSubmit()
              navigate("/Homepage") }} 
              className="btn" type="submit">   
          Войти
        </button>
      </form>
    </div>
  );
}
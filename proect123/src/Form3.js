import { useState } from 'react';
 
export default function Form() {
 
  
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [number, setNumber] = useState('');
  const [employee, setEmployee] = useState('');
 
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  
  const handleOrganization = (e) => {
    setOrganization(e.target.value);
    setSubmitted(false);
  };
 
  
  const handleNumber = (e) => {
    setNumber(e.target.value);
    setSubmitted(false);
  };

  const handleEmployee = (e) => {
    setEmployee(e.target.value);
    setSubmitted(false);
  };
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || organization === '' || number === '' ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
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
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Имя</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Код организации</label>
        <input onChange={handleOrganization} className="input"
          value={organization} type="organization" />
 
        <label className="label">Номер заведения</label>
        <input onChange={handleNumber} className="input"Z
          value={number} type="number" />

        <label className="label">Код сотрудника</label>
        <input onChange={handleEmployee} className="input"Z
          value={employee} type="employee" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
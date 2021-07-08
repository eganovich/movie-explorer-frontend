import React from 'react';

import './Register.css';

import Logo from '../Logo/Logo.js';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Redirect from '../Redirect/Redirect.js';
import Preloader from '../Preloader/Preloader.js';

function Register({ onSignUp }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [formValidity, setFormValidity] = React.useState(false);
  const [nameValidity, setNameValidity] = React.useState(true);
  const [emailValidity, setEmailValidity] = React.useState(true);
  const [passwordValidity, setPasswordValidity] = React.useState(true);

  function handleNameChange(value) {
    setName(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setIsLoading(true);

    onSignUp({ name, email, password })
      .finally(() => {
        if (isLoading) {
          setIsLoading(false);
        }
      });
  }
    
  return(
    <section className="register">
      <div className="register__container">
        {!isLoading && (<>
          <Logo userForm={true} />
          <Form
            place="register"
            formValidityState={formValidity}
            onFormValidityChange={setFormValidity}
            onSubmit={handleSubmit}
          >
            <Input
              inputName="name"
              inputLabel="Имя"
              inputPattern="^[a-zA-Zа-яА-ЯёЁ0-9\s_-]+$"
              inputMinLength={3}
              inputMaxLength={30}
              inputValidityState={nameValidity}
              onInputValidityChange={setNameValidity}
              onValueChange={handleNameChange}
            />
            <Input
              inputType="email"
              inputName="email"
              inputLabel="E-mail"
              inputValidityState={emailValidity}
              onInputValidityChange={setEmailValidity}
              onValueChange={handleEmailChange}
            />
            <Input
              inputType="password"
              inputName="password"
              inputLabel="Пароль"
              inputMinLength={8}
              inputValidityState={passwordValidity}
              onInputValidityChange={setPasswordValidity}
              onValueChange={handlePasswordChange}
            />
          </Form>
          <Redirect place="register" />
        </>)}
        {isLoading && (<Preloader />)}
      </div>
    </section>
  );
}

export default Register;
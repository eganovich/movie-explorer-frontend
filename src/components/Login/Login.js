import React from 'react';

import './Login.css';

import Logo from '../Logo/Logo.js';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Redirect from '../Redirect/Redirect.js';
import Preloader from '../Preloader/Preloader.js';

function Login({ onSignIn }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [formValidity, setFormValidity] = React.useState(false);
  const [emailValidity, setEmailValidity] = React.useState(true);
  const [passwordValidity, setPasswordValidity] = React.useState(true);

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setIsLoading(true);

    onSignIn({ email, password })
      .finally(() => {
        if (isLoading) {
          setIsLoading(false);
        }
      });
  }

  return(
    <section className="login">
      <div className="login__container">
        {!isLoading && (<>
          <Logo userForm={true} />
          <Form
            place="login"
            formValidityState={formValidity}
            onFormValidityChange={setFormValidity}
            onSubmit={handleSubmit}
          >
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
          <Redirect place="login" />
        </>)}
        {isLoading && (<Preloader />)}
      </div>
    </section>
  );
}

export default Login;
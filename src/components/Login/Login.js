import React from 'react';

import './Login.css';

import Logo from '../Logo/Logo.js';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Redirect from '../Redirect/Redirect.js';
import Preloader from '../Preloader/Preloader.js';

function Login({ onSignIn }) {
  const [isLoading, setIsLoading] = React.useState(false);

  return(
    <section className="login">
      <div className="login__container">
        {!isLoading && (<>
          <Logo userForm={true} />
          <Form
            place="login"
          >
            <Input
              inputType="email"
              inputName="email"
              inputLabel="E-mail"
              inputClassname="form__input input"
            />
            <Input
              inputType="password"
              inputName="password"
              inputLabel="Пароль"
              inputClassname="form__input input"
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
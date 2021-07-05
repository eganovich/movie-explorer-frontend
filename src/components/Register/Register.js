import React from 'react';

import './Register.css';

import Logo from '../Logo/Logo.js';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import Redirect from '../Redirect/Redirect.js';
import Preloader from '../Preloader/Preloader.js';

function Register({ onSignUp }) {
  const [isLoading, setIsLoading] = React.useState(false);
    
  return(
    <section className="register">
      <div className="register__container">
        {!isLoading && (<>
          <Logo userForm={true} />
          <Form
            place="register"
          >
            <Input
              inputName="name"
              inputLabel="Имя"
              inputClassname="form__input input"
            />
            <Input
              inputType="email"
              inputName="email"
              inputLabel="E-mail"
              inputClassname="input form__input"
            />
            <Input
              inputType="password"
              inputName="password"
              inputLabel="Пароль"
              inputClassname="input form__input"
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
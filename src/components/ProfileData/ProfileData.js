import React from 'react';

import './ProfileData.css';
//import '../Form/Form.css';

import Input from '../Input/Input.js';
import Preloader from '../Preloader/Preloader.js';

function ProfileData() {

  const [isLoading, setIsLoading] = React.useState(false);

  return(
    <>
      {!isLoading && (<form
        className="profile-data"
      >
        <h1 className="profile-data__title">{`Привет, Елена!`}</h1>
        <div className="profile-data__inputs">
          <div className="profile-data__input-wrapper">
            <Input
              place="profile"
              inputClassname="input input_profile"
              inputName="name"
              inputLabel="Имя"
              inputValue="Елена"

            />
          </div>
          <div className="profile-data__input-wrapper">
            <Input
              place="profile"
              inputClassname="input input_profile"
              inputType="email"
              inputName="email"
              inputLabel="E-mail"
              inputValue="email@email.ru"
            />
          </div>
        </div>
        <div className="profile__buttons">
            <button
              className="profile__button profile__button_type_edit"
              type="submit"
            >
              Редактировать
            </button>
            <button
              className="profile__button profile__button_type_signout"
              type="button"
            >
              Выйти из аккаунта
            </button>
          </div>
      </form>)}
      {isLoading && (<Preloader />)}
    </>
  );
}

export default ProfileData;
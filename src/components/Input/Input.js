import React from 'react';

import './Input.css';

function Input({
    place,
    inputType = 'text',
    inputName,
    inputLabel,
    inputValue,
    inputPlaceholder = '',
    inputDefaultValue,
    inputMinLength = 0,
    inputMaxLength = 140,
    inputValidityState,
    onValueChange,
    onInputValidityChange,
    inputPattern = null,
}) {
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleChange(evt) {
    if (evt.target.value === inputDefaultValue) {
      evt.target.setCustomValidity('Нужно изменить значение по умолчанию');
      onInputValidityChange(false);
      setErrorMessage('Нужно изменить значение по умолчанию');
    }

    if (evt.target.name === 'name' && evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity('В имени допускаются буквы, цифры, _, - и пробел');
      onInputValidityChange(false);
      setErrorMessage('В имени допускаются буквы, цифры, _, - и пробел');
    }

    if (evt.target.value !== inputDefaultValue && !evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity('');
      onInputValidityChange(evt.target.validity.valid);
      setErrorMessage(evt.target.validationMessage);
    }

    onValueChange(evt.target.value);
  }

  const inputBaseClassname = 'form__input input';
  let inputClassname;

  if (place === 'profile') {
    inputClassname = inputBaseClassname + ' input_profile';
  } else {
    inputClassname = inputBaseClassname;
  }

  if (!inputValidityState) {
    inputClassname += ' form__input_invalid input_invalid';
  }
 
  return(
    <>
      <p
        className={`form__label ${place === 'profile' ? 'form__label_profile' : ''}`}
      >
        {inputLabel}
      </p>
      <input
        className={inputClassname}
        type={inputType}
        required
        name={inputName}
        value={inputValue}
        placeholder={inputPlaceholder}
        pattern={inputPattern}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
        onChange={handleChange}               
      />
      {!inputValidityState && (<p className="form__error">{errorMessage}</p>)}
    </>
  );
}

export default Input;
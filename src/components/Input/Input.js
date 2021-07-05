import React from 'react';

import './Input.css';

function Input({
    place,
    inputType = 'text',
    inputName,
    inputLabel,
    inputValue,
    inputPlaceholder = '',
    inputClassname
}) {
 
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
               
      />
      
    </>
  );
}

export default Input;
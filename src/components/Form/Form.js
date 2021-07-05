import './Form.css';

function Form({
  place,
  children
}) {
  const title = place === 'login' ? 'Рады видеть!' : 'Добро пожаловать!';
  const submitText = place === 'login' ? 'Войти' : 'Зарегистрироваться';


  return(
    <form
      className="form"
      noValidate
    >
      <h1 className="form__title">{title}</h1>
      <fieldset className="form__fieldset">
        {children}
      </fieldset>
      <button
        className="form__submit"
        type="submit"
      >
        {submitText}
      </button>
    </form>
  );
}

export default Form;
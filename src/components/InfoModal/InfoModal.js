import './InfoModal.css';

function InfoModal({ state, onClose }) {
  function handleRefresh() {
    onClose();
    window.location.reload();
  }

  const modalBaseClassName = 'root__modal modal';
  let modalClassName;

  if (!state.open) {
    modalClassName = modalBaseClassName + ' modal_hidden';
  } else {
    modalClassName = modalBaseClassName;
  }

  if (!state.error) {
    modalClassName += ' modal_success';
  }

  return(
    <div className={modalClassName}>
      <button
        className={`modal__close ${!state.error ? 'modal__close_success' : ''}`}
        type="button"
        onClick={onClose}
      />
      <h1
        className={`modal__title ${!state.error ? 'modal__title_success' : ''}`}
      >
        {state.title}
      </h1>
      <p className="modal__text">{state.message}</p>
      {state.error && (<p className="modal__advice">
        Попробуйте <button
          className="modal__refresh"
          type="button"
          onClick={handleRefresh}
        >
          обновить
        </button> страницу.
      </p>)}
    </div>
  );
}

export default InfoModal;
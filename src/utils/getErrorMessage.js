function getErrorMessage(errorCode) {
    let errorMessage;
  
    switch (errorCode) {
      case 400:
        errorMessage = 'Ошибка 400: введены некорректные данные.';
        break;
      case 401:
        errorMessage = 'Ошибка 401: неправильные имя пользователя или пароль.';
        break;
      case 403:
        errorMessage = 'Ошибка 403: у вас нет доступа к этому ресурсу';
        break;
      case 404:
        errorMessage = 'Ошибка 404: запрашиваемый ресурс не найден';
        break;
      case 409:
        errorMessage = 'Ошибка 409: пользователь с такими данными уже существует.';
        break;
      default:
        errorMessage = `Произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Описание ошибки: ${errorCode}.`;
    }
  
    return errorMessage;
  }
  
  export default getErrorMessage;
class MoviesApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _handleOriginalResponse(res) {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
  
      return res.json();
    }
  
    getMovies() {
      return fetch(this._baseUrl)
        .then(res => this._handleOriginalResponse(res));
    }
  }
  
  
  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });
  
  export default moviesApi;
class MainApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _handleOriginalResponse(res) {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
  
      return res.json();
    }
  
    signUp(data) {
      return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },        
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      })
        .then(res => this._handleOriginalResponse(res));
    }
  
    signIn(data) {
      return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })
        .then(res => this._handleOriginalResponse(res));
    }
  

    getUserInfo(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
        .then(res => this._handleOriginalResponse(res));
    }
  
    patchUserInfo(data, token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      })
        .then(res => this._handleOriginalResponse(res));
    }
  
    getSavedMovies(token) {
      return fetch(`${this._baseUrl}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
        .then(res => this._handleOriginalResponse(res));
    }
  
    addMovie(data, token) {
      return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailer: data.trailer,
          thumbnail: data.thumbnail,
          movieId: data.movieId,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        })
      })
        .then(res => this._handleOriginalResponse(res));
    }
  
    deleteSavedMovie(id, token) {
      return fetch(`${this._baseUrl}/movies/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
        .then(res => this._handleOriginalResponse(res));
    }
  }
  
  const mainApi = new MainApi({
    baseUrl: 'https://api.eganovich-diploma.nomoredomains.monster',
  });
  
  export default mainApi;
  
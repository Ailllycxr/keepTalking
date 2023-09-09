import decode from 'jwt-decode';

class AuthService {
  //Get user data
  getProfile() {
    return decode(this.getToken());
  }

  // Checks if logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  // Checks if token expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
  
  //Gets token from local storage
  getToken() {
    return localStorage.getItem('id_token');
  }
  
  //Saves user's token to local storage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
  
  //Remoes user's token from local storage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
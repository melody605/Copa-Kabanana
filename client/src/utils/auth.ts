import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    // Check if the user is logged in by retrieving the token from localStorage
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const decodedToken = jwtDecode<JwtPayload>(token);  // Decode the token
    const expirationTime = decodedToken.exp || 0;  // Get expiration time (in seconds)
    const currentTime = Date.now() / 1000;  // Get the current time (in seconds)
    return expirationTime < currentTime;  // Return true if expired, false if not
  }

  getToken(): string {
    // TODO: return the token
    // Retrieve the JWT token from localStorage
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken()); 
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken(); return !!token && !this.isTokenExpired(token); 
  }

      // TODO: return a value that indicates if the token is expired
  
  isTokenExpired(token: string) {
    try { const decoded = jwtDecode<JwtPayload>(token); 
      if (decoded.exp) {
        return decoded.exp < Date.now() / 1000; \
      } 
      return false; 
    } catch (err) { 
      return false; } 
    }
  

  
// TODO: return the token
  getToken(): string {
    return localStorage.getItem('id_token') || ''; 
    
  }

    // TODO: set the token to localStorage
    // TODO: redirect to the home page

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); 
    }

    // TODO: remove the token from localStorage
    // TODO: redirect to the login page

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();

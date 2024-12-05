import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {

  // TODO: make a POST request to the login route
  try { 
    const response = await fetch('/auth/login', { 
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' }, 
      body: JSON.stringify(userInfo) 
    });
    
    // che3cking if the response is correct, if not throws an error 

    if (!response.ok) { throw new Error('Login request failed'); } 
    const data = await response.json(); 
    return data; 
  } catch (error) { 
    
    console.log('Error from user login: ', error);  
    return Promise.reject('Could not fetch user info');  
  }
}


export { login };



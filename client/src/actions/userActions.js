//const API_URL = 'http://localhost:3001/api'

export const login = (user) => {
  return {
    type: 'LOGIN',
    user

  }
};

export const signup = (user) => {
  return {
    type: 'SIGNUP',
    user

  }
};
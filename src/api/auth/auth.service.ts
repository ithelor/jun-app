import axios from 'axios'
const API_URL = 'http://localhost:5000/api/auth/'

export const register = (
  login: string,
  email: string,
  password: string,
  confPassword: string,
  name: string,
  lastName: string,
  patronymic: string
) => {
  return axios.post(API_URL + 'signup', {
    login,
    email,
    password,
    confPassword,
    name,
    lastName,
    patronymic
  })
}

export const login = (login: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      login,
      password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

export const logout = () => {
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) return JSON.parse(userStr)
  return null
}

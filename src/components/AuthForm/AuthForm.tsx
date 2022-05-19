import React from 'react'
import { NavLink } from 'react-router-dom'

import './AuthForm.module.scss'

import {login, register} from "../../api/auth/auth.service";

const AuthForm = () => {
    const [isNew, setIsNew] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [logins, setLogins] = React.useState('');

    const handleLogin = (formValue: { e: any, username: string; password: string }) => {
        const { e, username, password } = formValue;
        e.preventDefault();
        login(username, password).then(
            () => {
                console.log('succeed')
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    }
    const handleRegister = (formValue: { e: any, name: string; lastName: string; login: string; email: string, password: string }) => {
        const { e, name, lastName, login, email, password} = formValue;
        e.preventDefault();
        register(login, email, password, password, name, lastName, "empty").then(
            () => {
                console.log('succeed')
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    }
  return (
    <form>
      {isNew ? (
        <>
          <h3>Регистрация</h3>
          <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Имя" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Фамилия" />
            <input value={logins} onChange={(e) => setLogins(e.target.value)} type="text" placeholder="Login" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
            <button type="submit" onClick={(e) => handleRegister({e, name, lastName,login: logins, email, password})}>Зарегистрироваться</button>
          </div>
          <p>
            Уже зарегистрированы?
            <span onClick={() => setIsNew(false)}> войти</span>
          </p>
        </>
      ) : (
        <>
          <h3>Авторизация</h3>
          <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
            <button type="submit" onClick={(e) => handleLogin({e, username: email, password: password})}>Войти</button>
          </div>
          <p>
            Нет аккаунта?
            <span onClick={() => setIsNew(true)}> зарегистрироваться</span>
          </p>
        </>
      )}
    </form>
  )
}

export default AuthForm

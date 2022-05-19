import React from 'react'
import { NavLink } from 'react-router-dom'

import './AuthForm.module.scss'

const AuthForm = () => {
  const [isNew, setIsNew] = React.useState(true)

  return (
    <form>
      {isNew ? (
        <>
          <h3>Регистрация</h3>
          <div>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Введите пароль" />
            <button type="submit">Зарегистрироваться</button>
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Введите пароль" />
            <button type="submit">Войти</button>
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

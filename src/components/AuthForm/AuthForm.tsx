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
            Уже зарегистрированы?{' '}
            <NavLink to="/sign-in" onClick={() => setIsNew(false)}>
              войти
            </NavLink>
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
            Нет аккаунта?{' '}
            <NavLink to="/sign-up" onClick={() => setIsNew(true)}>
              зарегистрироваться
            </NavLink>
          </p>
        </>
      )}
    </form>
  )
}

export default AuthForm

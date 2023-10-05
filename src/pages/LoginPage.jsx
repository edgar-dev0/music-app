import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const LoginPage = () => {

  const { reset, handleSubmit, register } = useForm()
  const { loginUser } = useAuth()
  
  const submit = data => {
    console.log(data)
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <div className='login__container'>
      <figure>
        <img className="login__image" src="/images/img-login.jpg" alt="login image" />
      </figure>
      <article>
        <h2>Log in</h2>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className='login__form__input'>
            <label htmlFor="email">E-mail</label>
            <input {...register('email')} type="email" id="email"/>
          </div>
          <div className='login__form__input'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password"/>
          </div>
          <button>Submit</button>
        </form>
        <p>Don't you have an account? <Link to='/auth/register'>Go to register</Link></p>
      </article>
    </div>
  )
}

export default LoginPage

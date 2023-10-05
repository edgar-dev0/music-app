import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RegisterPage = () => {

 const { reset, handleSubmit, register } = useForm()
 const { registerUser } = useAuth()

  const submit = data => {
    console.log(data)
    registerUser(data)
    reset({
      name: '',
      email: '',
      password: ''
    })
  }


  return (
    <div className='login__container'>
      <figure>
        <img className="login__image" src="/images/img-login2.jpg" alt="login image" />
      </figure>
      <article>
        <h2>New account</h2>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className='login__form__input'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email"/>
          </div>
          <div className='login__form__input'>
            <label htmlFor="name">Name</label>
            <input {...register('name')} type="text" id="name"/>
          </div>
          <div className='login__form__input'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password"/>
          </div>
          <button>Submit</button>
        </form>
        <p>Are you register? <Link to='/auth/login'>Log in</Link></p>
      </article>
    </div>
  )
}

export default RegisterPage

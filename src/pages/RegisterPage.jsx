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
    <div>
      <img className="login__image" src="/images/img-login2.jpg" alt="login image" />
      <article>
        <h2>New account</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email"/>
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input {...register('name')} type="text" id="name"/>
          </div>
          <div>
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

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { Link } from 'react-router-dom';

function Login(){
  const {register,handleSubmit,watch,formState: { errors }} = useForm()
  const [error,setError] = useState('');
  function login(loginData : any){
    axios.post('http://localhost:4000/api/login',{
      username: loginData.username,
      password: loginData.password
    }).then(data => {
      localStorage.setItem('token',data.data.token);
      localStorage.setItem('username',loginData.username);
      console.log(localStorage.getItem('username'));
      window.location.href="/";
    }).catch(err => {
      setError('password not right');
    });
  }
  function reset(){
    setError('')
  }
  return(
    <form onClick={reset} onSubmit={handleSubmit(login)}>
      <Link className='padding' to='/'>Home</Link>    
      <br/>
      <label htmlFor="username">Username
        <input id="username" className="bigSize" type={'text'} {...register('username')}/>
      </label><br/ >
      <label htmlFor="password">Password
        <input id ="password" className="bigSize" type={'password'} {...register('password')}/>
      </label><br/ >
      <div className="formButton">
        <Button type={'submit'} variant="contained">Contained</Button>
      {error ? <span>{error}</span> : ''}
      </div>
      

    </form>


  )
}
export default Login
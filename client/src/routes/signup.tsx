import { useForm } from "react-hook-form"
import { useEffect } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

function Signup() {
  const {register,handleSubmit,watch,formState: { errors }} = useForm()
  const watchPassword = watch(["password","repeatPassword"]);
  // useEffect(()=>{
  //   console.log(handleSubmit)
  // },[handleSubmit])
  async function postInfo(bigData : any){
    await axios.post('http://localhost:4000/api/signup',{
      username: bigData.username,
      password: bigData.password,
      job1: bigData.job1,
      job2: bigData.job2,
    }).then(data => {
      localStorage.setItem('token',data.data.token);
      localStorage.setItem('username',bigData.username);
      window.location.href="/";
    });
  }
  return(
    <form onSubmit={handleSubmit(postInfo)}>
      <Link className='padding' to='/'>Home</Link>    
      <br/>
      <label htmlFor="username">Username
        <input id="username" className="bigSize" type={'text'} {...register('username',{required:true})}/>
      </label><br/ >
      <label htmlFor="job1">Job 1
        <input type="text" className="bigSize" {...register('job1')}/>
      </label><br/ >
      <label htmlFor="job2">Job 2
        <input type="text" className="bigSize" {...register('job2')}/>
      </label><br/>
      <label htmlFor="password">Password
        <input id ="password" className="bigSize" type={'password'} {...register('password',{required:true})}/>
      </label><br/ >
      <label htmlFor="repeatPassword">Repeat Password
        <input id ="repeatPassword" className="bigSize" type={'password'} {...register('repeatPassword')}/>
      </label>
     
      <div className="formButton">
        <Button type={'submit'} variant="contained">Contained</Button>
        {(watchPassword[0] !== watchPassword[1]) &&  <span>Password not match</span>}
      </div>
      

    </form>


  )
}

export default Signup;
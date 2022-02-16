import axios from "axios";
import { useEffect } from "react";

function AuthorizationTest() {
  useEffect( ()=>{
    get()
    
  },[])
  async function get(){
    await axios.get('http://localhost:4000/api/test',{headers:{'Authorization' : `${localStorage.getItem('token')}`}})
    .then(data => console.log(data));
  }
  return ( <h1>
    Hello
  </h1> );
}

export default AuthorizationTest;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Username() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [jobs,setJobs] = useState([]);
  let param = useParams();
  useEffect(()=>{
    get();
  },[])
  async function get(){
    await axios.get('http://localhost:4000/api/username',
    {headers:{'Authorization': `${localStorage.getItem('token')}`}})
    .then(data => {
    
      setJobs(data.data.jobs);
    }).catch(err=>console.log(`this is err ${err}`));
  }

  return (
    <>
      <span>{`this is  ${param.usernameId}`}</span> <br/>
      <span>He is 
        {jobs.length !== 0 ? jobs.map(job=>{
          return ` ${job}`;
        }) : 
         ' none'
        }
        </span> <br/>
        <Link className='padding' to='/'>Home</Link>
    </>

  );
}

export default Username;
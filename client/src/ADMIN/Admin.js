import React, { useState }  from 'react'
import { Link , useHistory } from 'react-router-dom'
import '../styles/Admin.css'
function Admin() {

  const history = useHistory();
  const [Aashraya_Id , setAashraya_Id] = useState("");
  const [ password , setPassword ] = useState("");


 const loginHandle = async(e) => {
  e.preventDefault();
  const res = await fetch("/signIn" ,{
    method:"POST" ,
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      Aashraya_Id , password
    })
  });
  const data = await res.json();
  if(data.status === 422 || !data)
  {
    window.alert("Invalid Credentials");
    console.log("Invalid Credentials");
}
    if(data.error){
      window.alert("Invalid Credentials")
    }
  else
  {
    console.log("login successful");
     history.push("/admin/admin_handle/slideshow");
     window.location.reload()
  }
  }



  return (
    <div style={{backgroundColor:"black",width:"100%",height:"100vh",position:"absolute",top:"0%"}}>
      
      <div className='form-box'>
      <form className='form-container'>
     <h1>Sign In </h1>
         <input onChange={(e)=>{setAashraya_Id(e.target.value)}}
          value={Aashraya_Id} type="text" placeholder='Aashraya Id'/>

         <input onChange={(e)=>{setPassword(e.target.value)}}
          value={password} type="password" placeholder='Password' />
         
         <button onClick={loginHandle} className='btn btn-primary'>Sign In</button>
         <Link to="/" className='link'><p>Forgot Password?</p></Link>
      </form>
      </div>
    </div>
  )
}

export default Admin


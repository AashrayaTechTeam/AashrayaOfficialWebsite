import React , {useState } from 'react'

function AddAdmin() {

  const [ role , setRole ] = useState("");
  const [ Name , setName ] = useState("");
  const [ Aashraya_Id , setAashraya_Id ] = useState("");
  const [ profilePic , setProfilePic ] = useState("");
  const [ mobileNumber , setMobileNumber ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");
  const [ confirmPass , setConfirmPass ] = useState("");

  
  const addAdminHandle = async(e)=>{
    e.preventDefault();
    try{
      
      const res = await fetch('/signup' ,{
      method:"POST" ,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        role, Name , Aashraya_Id , 
        profilePic , mobileNumber , 
        email ,password , confirmPass
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
      console.log("Admin registered");
      window.alert("Admin registered")
    }
    
  }
  catch(err){
      console.log(err);
  }
  }

  return (
    <div className='container-box'>
    <h1 className='heading'>Add Member</h1>
    <div className='box-container'>
    <form className='form-container'>
    <select  onChange={(e)=>{setRole(e.target.value)}} value={role} required style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}}>
          <option class="dropdown-item" hidden >Role</option>
          <option class="dropdown-item" value="admin" >admin</option>
          <option class="dropdown-item" value="superAdmin" >superAdmin</option>
    </select>
    <input value={Name} onChange={(e)=>{setName(e.target.value)}} 
    type="text" placeholder='Name' />
    <input value={Aashraya_Id} onChange={(e)=>{setAashraya_Id(e.target.value)}}
    type="text" placeholder="Aashraya Id"/>
    <input value={profilePic} onChange={(e)=>{setProfilePic(e.target.value)}}
    type="text" placeholder='Email' />
    <input value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}
    type="text" placeholder='Mobile Number' />
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
    type="text" placeholder='Profile Pic url' />
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
    type="password" placeholder='Password' />
    <input value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}
    type="password" placeholder='Confirm password' />
    <button onClick={addAdminHandle} className='btn btn-dark' >Submit</button>
    </form>
    </div>
  </div>
  )
}

export default AddAdmin


// role
// :
// admin
// String
// Name
// :
// Himangshu Baishya
// String
// Aashraya_Id
// :
// AS2019AS2000
// String
// profilePic
// :
// abc
// String
// mobileNumber
// :
// 8638281845
// String
// email
// :
// baishyahimangshu499@gmail.com
// String
// password
// :
// 12345
// String
// confirmPass
// :
// 12345

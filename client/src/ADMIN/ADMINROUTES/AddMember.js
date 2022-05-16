import React,{useState,useEffect} from 'react'
import "../../styles/AdminRoutes.css"
function AddMember() {

  const [Designation,setDesignation] =useState("");
  const [Name,setName] =useState("");
  const [profilePic,setProfilePic] =useState("");
  const [AadharCardPhoto,setAadharCardPhoto] =useState("");
  const [State,setState] =useState("");
  const [District,setDistrict] =useState("");
  const [Location,setLocation] =useState("");
  const [Address,setAddress] =useState("");
  const [Pin,setPin] =useState("");
  const [mobileNumber,setMobileNumber] =useState("");
  const [email,setEmail] =useState("");

    //add new Member
    const submitHandle = async(e) =>{
      e.preventDefault();
      try{
        const res = await fetch('/addTeam' ,{
        method:"POST" ,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          Designation, Name, 
          profilePic, AadharCardPhoto,State,District,
          Location,
          Address,
          Pin,
          mobileNumber,
          email
        })
      });
      const data = await res.json();
      if(data.status === 422 || !data)
        window.alert("Invalid field type")
      if(data.error)
          window.alert("Invalid field type")
      else
        {
          window.alert("Successfully added") 
          window.location.reload();
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
      <select value={Designation} onChange={(e)=>{setDesignation(e.target.value)}} 
      required style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}}>
            <option class="dropdown-item" hidden >Designation</option>
            <option class="dropdown-item" >State Representative</option>
            <option class="dropdown-item" >Tech Team Member</option>
            <option class="dropdown-item" >Media Team</option>
            <option class="dropdown-item" >PR Team</option>
            <option class="dropdown-item" >Management Team</option>
            <option class="dropdown-item" >Fundraise Team</option>
      </select>
      <select value={State} onChange={(e)=>{setState(e.target.value)}} 
      required style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}}>
            <option class="dropdown-item" hidden >State</option>
            <option value="Andhra Pradesh" class="dropdown-item" >Andhra Pradesh</option>
            <option value ="Assam" class="dropdown-item" >Assam</option>
            <option value="Madhya Pradesh" class="dropdown-item" >Madhya Pradesh</option>
            <option value="Karnataka" class="dropdown-item" >Karnataka</option>
      </select>
      <input value={Name} onChange={(e)=>{setName(e.target.value)}}
      type="text" placeholder='Name' />
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
      type="text" placeholder='Email' />
      <input value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}
      type="text" placeholder='Mobile Number' />
      <input value={profilePic} onChange={(e)=>{setProfilePic(e.target.value)}}
      type="text" placeholder='Profile Pic url' />
      <input value={AadharCardPhoto} onChange={(e)=>{setAadharCardPhoto(e.target.value)}}
      type="text" placeholder='Aadhar Card Photo url' />
      <input value={District} onChange={(e)=>{setDistrict(e.target.value)}}
      type="text" placeholder='District' />
      <input value={Location} onChange={(e)=>{setLocation(e.target.value)}}
      type="text" placeholder='Location' />
      <input value={Address} onChange={(e)=>{setAddress(e.target.value)}}
      type="text" placeholder='Address' />
      <input value={Pin} onChange={(e)=>{setPin(e.target.value)}}
      type="text" placeholder='Pin' />
      <button onClick={submitHandle} className='btn btn-dark'>Submit</button>
      </form>
      </div>
    </div>   
  )
}

export default AddMember

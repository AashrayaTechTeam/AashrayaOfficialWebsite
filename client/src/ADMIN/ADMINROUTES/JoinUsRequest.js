import React,{useState,useEffect} from 'react'
import LoadingPage from '../../LoadingPage'

function JoinUsRequest() {
  const [joinUs,setJoinUs] = useState("");
  const [loading,setLoading] = useState(true);

  //GET ALL JOIN US FORMS
  useEffect( async()=>{
    const res = await fetch("/getJoinUs" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setJoinUs(data);
    setLoading(false)
  },[])


//DELETE THE JOIN US FORM
const deleteJoinForm = async(id)=>{
  try{
        const res = await fetch('/deleteJoinUs' ,{
        method:"POST" ,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({ id })
      });
      await res.json();
      window.alert("Successfully deleted") 
      window.location.reload();
    }
    catch(err){
        console.log(err);
    }
    }


  if(loading)
    return<><LoadingPage/></>

  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Join us requests</h2>
    <div className='banner-list'>
      {
        joinUs.getJoin.map((join)=>{
          return(
            <div>
        <span style={{display:"flex",flexDirection:"column"}}>
          <span>Name : {join.Name}</span>
          <span>State : {join.State}</span>
          <span>Mobile number : {join.mobileNumber}</span>
          <span>Address : {join.Address}</span>
          <span>City : {join.City}</span>
          <span>District : {join.District}</span>
          <span>Pin code : {join.Pin}</span>
        </span>
        <button onClick={()=>{deleteJoinForm(join._id)}} className='btn btn-danger m-1 '>Delete</button>
      </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default JoinUsRequest
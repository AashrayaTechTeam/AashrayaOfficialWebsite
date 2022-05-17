import React, { useState,useEffect } from 'react'
import LoadingPage from '../../LoadingPage';

function Career() {

  const [Job,setJob] = useState("");
  const [formLink ,setFormLink] = useState("");
  const [heading ,setHeading] = useState("");
  const [jobs,setJobs] = useState("");
  const [loading,setLoading] = useState(true);


    useEffect( async()=>{
        const res = await fetch("/getCareer" , {
          method:"GET" ,
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          } , 
          credentials:"include"
        });
        const data = await res.json();
        setJobs(data);
        setLoading(false)
      },[])
       

  const submitHandle = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch('/career' ,{
      method:"POST" ,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        Job,formLink,heading
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data)
      window.alert("Invalid field type")
    if(data.error)
        window.alert("Invalid field type")
    else
      {window.alert("Successfully added") 
    window.location.reload();
    }
  }
  catch(err){
      console.log(err);
  }
  }


  //delete handle
  const deleteSlide = async(id)=>{
    try{
          const res = await fetch('/deleteJob' ,{
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
  return <><LoadingPage/></>

  return (
    <div id="form-slide" className='box-container'>
      <h2 style={{textAlign:"center",margin:"10px"}}>Post Job Profile</h2>
      <div className='banner-list'>
      { jobs.getJob.map(jb=>{
        return( <div>
        <span>{jb.heading}</span>
        <button  onClick={()=>{deleteSlide(jb._id)}}  className='btn btn-danger m-1'>Delete</button>
      </div>)
      })
      }
    </div>
    <form className='form-container'>
    <input value={heading} onChange={(e)=>{setHeading(e.target.value)}} 
    type="text" placeholder='Heading' />
    <input value={formLink} onChange={(e)=>{setFormLink(e.target.value)}} 
    type="text" placeholder='Link of google form' />
    <textarea value={Job} onChange={(e)=>{setJob(e.target.value)}}
    style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px",height:"500px"}} type="text" placeholder='Write post here about the event' />
    <button onClick={submitHandle} className='btn btn-dark'>Submit</button>
    </form>

    </div>
  )
}

export default Career
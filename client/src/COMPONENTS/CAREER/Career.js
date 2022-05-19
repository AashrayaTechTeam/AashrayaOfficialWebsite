import React,{useState,useEffect} from 'react'
import LoadingPage from '../../LoadingPage';

function Career() {
    
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


        if(loading)
        return <><LoadingPage/></>
  return (
    <div style={{position:"absolute",top:"0",background:"linear-gradient(to right, #141e30, #243b55)",width:"100%",minHeight:"100vh"}}>
        <h2 style={{textAlign:"center",color:"white",marginTop:"120px",fontSize:"40px",letterSpacing:"2px",fontFamily:"Bebas Neue, cursive"}}>Apply for Job Profile</h2>
        <div className='container-box' >
        <div className='banner-list' style={{color:"black",display:"flex",flexWrap:"wrap"}} >
    {
        jobs.getJob.map(jb=>{
            return(
                <div style={{margin:"10px",width:"30%",color:"white"}}>
                    <div style={{margin:"20px",lineHeight:"20px"}}>
                      <h4 style={{color:"pink",marginBottom:"20px"}}>{jb.heading}</h4>
                        <span dangerouslySetInnerHTML={{__html:jb.Job}}></span>
                    </div>
                    <a href={jb.formLink} ><button className='btn btn-danger' style={{margin:"10px 20px"}}>Apply now</button></a>
                </div>
            )
        })
    }

      </div>
      </div>
    </div>
  )
}

export default Career
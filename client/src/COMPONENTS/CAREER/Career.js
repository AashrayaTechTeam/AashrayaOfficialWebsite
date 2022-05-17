import React,{useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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
    <div style={{position:"absolute",top:"0",background:"linear-gradient(to right, #373b44, #4286f4)",width:"100%",minHeight:"100vh"}}>
        <h2 style={{textAlign:"center",color:"white",marginTop:"120px"}}>Apply for Job Profile</h2>
        <div className='container-box' >
        <div className='banner-list' style={{color:"black"}} >
    {
        jobs.getJob.map(jb=>{
            return(
                <div style={{margin:"10px",background:"linear-gradient(to right, #1c92d2, #f2fcfe)"}}>
                    <div style={{margin:"20px"}}>
                      <span>{jb.heading}</span>
                        <span><ReactMarkdown  children={jb.Job} remarkPlugins={[remarkGfm]} /></span>
                    </div>
                    <a href={jb.formLink} ><button className='btn btn-dark m-1'>Apply now</button></a>
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
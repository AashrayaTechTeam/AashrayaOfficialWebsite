import React,{useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

        console.log(jobs)

        if(loading)
        return <>Loading...</>
  return (
    <div style={{position:"absolute",top:"0",backgroundColor:"black",width:"100%",minHeight:"100vh"}}>
        <h2 style={{textAlign:"center",color:"white",marginTop:"120px"}}>Apply for Job Profile</h2>
        <div className='container-box' >
        <div className='banner-list'>
    {
        jobs.getJob.map(jb=>{
            return(
                <div style={{margin:"10px",backgroundColor:"white"}}>
                    <div style={{margin:"20px"}}>
                      <span>{jb.heading}</span>
                        <span><ReactMarkdown  children={jb.Job} remarkPlugins={[remarkGfm]} /></span>
                    </div>
                    <a href={jb.formLink} ><button className='btn btn-primary m-1'>Apply now</button></a>
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
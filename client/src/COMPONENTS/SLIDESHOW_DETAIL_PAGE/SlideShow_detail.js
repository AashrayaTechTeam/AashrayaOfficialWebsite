import React,{useState,useEffect} from'react'
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function SlideShow_detail() {

    const { id } = useParams();
    const [ eventDetail , setEventDetail] = useState({});
        const [loading , setLoading] = useState(true);
        
        useEffect(async ()=>{
            const res = await fetch('/eventDetail' , {
            method:"GET" ,
            headers:{
              "Content-Type":"application/json",
              "id":id
            }
          });
        const res2 = await res.json();
        setEventDetail(res2);
        setLoading(false);  

        },[id]);


      if(loading) return <>loading..</>


  return (
    <div style={{position:"absolute",top:"0"}}>

        <div style={{position:"relative",backgroundColor:"black"}}>
            <img style={{opacity:"0.4",width:"100%",height:"400px"}}
            src={eventDetail.event.imageUrl} placeholder="image" />
        </div>

        <div style={{position:"absolute",top:"0",margin:"160px auto",width:"100%"}}>
            <h1 style={{textAlign:"center",color:"white",margin:"20px auto",letterSpacing:"2px",width:"80%"}}>{eventDetail.event.heading}</h1>
            <p style={{textAlign:"center",color:"white",margin:"auto",letterSpacing:"2px",width:"60%"}}>{eventDetail.event.smallPara}</p>
        </div>

        <div style={{position:"relative",color:"black",margin:"40px auto",width:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <ReactMarkdown children={eventDetail.event.post} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default SlideShow_detail
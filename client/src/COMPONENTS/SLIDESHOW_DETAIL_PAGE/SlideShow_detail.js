import React,{useState,useEffect} from'react'
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../HOME__PAGE/SLIDESHOW/slideShow.css'
import LoadingPage from '../../LoadingPage'
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


      if(loading) return <><LoadingPage/></>


  return (
    <div className='post-container'>

        <div className='post-cover-img' >
            <img 
            src={eventDetail.event.imageUrl} placeholder="image" />
        </div>

        <div className='post-heading'>
            <h1>{eventDetail.event.heading}</h1>
            {/* <p style={{textAlign:"center",color:"white",margin:"auto",letterSpacing:"2px",width:"60%"}}>{eventDetail.event.smallPara}</p> */}
        </div>

        <div className='post-content'>
        <ReactMarkdown  children={eventDetail.event.post} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default SlideShow_detail
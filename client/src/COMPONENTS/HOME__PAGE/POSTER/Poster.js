import React,{useState,useEffect} from 'react'
import LoadingPage from  '../../../LoadingPage'
function Poster() {

    const [posters,setPosters] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect( async()=>{
        const res = await fetch("/getPoster" , {
          method:"GET" ,
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          } , 
          credentials:"include"
        });
        const data = await res.json();
        setPosters(data);
        setLoading(false)
      },[])

      if(loading) return <><LoadingPage/></>
      
  return (
    <div className='post-container' >

        <div className='post-cover-img'>
            <img 
            src={posters.poster.slice(0,1).shift().imageUrl} placeholder="image" />
        </div>

        <div className='post-heading'>
            <h1>{posters.poster.slice(0.1).shift().heading}</h1>
        </div>

        <div  className='post-content'>
          <p dangerouslySetInnerHTML={{__html:posters.poster.slice(0,1).shift().post}}></p>
        </div>
    </div>
  )
}

export default Poster
import React,{useState,useEffect} from 'react'
import LoadingPage from  '../../../LoadingPage'
function Poster() {

    const [posters,setPosters] = useState("");
    const [loading,setLoading] = useState(true);
    const [count,setCount] = useState(0);

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
        let cnt = 0
        data.poster.map(poster=>{
            if(poster)
            cnt++;
        })
        setCount(cnt);
        setLoading(false)
      },[])

      if(loading) return <><LoadingPage/></>
      
  return (
    <div className='post-container' >

        <div className='post-cover-img' >
            <img 
            src={posters.poster[count-1].imageUrl} placeholder="image" />
        </div>

        <div className='post-heading' >
            <h1>{posters.poster[count-1].heading}</h1>
        </div>

        <div  className='post-content' >
          <p dangerouslySetInnerHTML={{__html:posters.poster[count-1].post}}></p>
        </div>
    </div>
  )
}

export default Poster
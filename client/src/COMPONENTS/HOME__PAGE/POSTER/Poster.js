import React,{useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

      if(loading) return <>loading..</>
  return (
    <div style={{position:"absolute",top:"0"}}>

        <div style={{position:"relative",backgroundColor:"black"}}>
            <img style={{opacity:"0.4",width:"100%",height:"400px"}}
            src={posters.poster[count-1].imageUrl} placeholder="image" />
        </div>

        <div style={{position:"absolute",top:"0",margin:"160px auto",width:"100%"}}>
            <h1 style={{textAlign:"center",color:"white",margin:"20px auto",letterSpacing:"2px",width:"80%"}}>{posters.poster[count-1].heading}</h1>
            <p style={{textAlign:"center",color:"white",margin:"auto",letterSpacing:"2px",width:"60%"}}>{posters.poster[count-1].smallPara}</p>
        </div>

        <div style={{position:"relative",color:"black",margin:"40px auto",width:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <ReactMarkdown children={posters.poster[count-1].post} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default Poster
import React, {useState,useEffect} from 'react'
import Footer from '../FOOTER/Footer'
import About_us from './ABOUT US/About_us'
import Carousel from './PAST WORK/Carousel'
import SlideShow from './SLIDESHOW/SlideShow'
import Social_media from './SOCIAL_MEDIA/Social_media'
import Aashraya_stats from '../HOME__PAGE/AASHRAYA STATS/Aashraya_stats'
import Testimonial from './REVIEWS/Testimonial'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoadingPage from '../../LoadingPage'
import chat from '../../ASSETS/chat-icon.png'
function Home() {
    useEffect(() => {
        Aos.init({ duration: 500});
    }, []) ;

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


    if(loading)
      return <><LoadingPage/></>

      // <span style={{margin:"auto",fontWeight:"bolder"}}>
      // <a style={{textDecoration:"none",color:"white"}} href="https://api.whatsapp.com/send?phone=6264803084">Chat</a>
      // </span>


    return (
        <>
        <div style={{width:"50px",height:"50px",background:"linear-gradient(to top, #fc00ff, #00dbde)",margin:"15px",zIndex:"5",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",position:"fixed",right:"0%",bottom:"0%",color:"black"}}>
         <a href="https://api.whatsapp.com/send?phone=6264803084"><img style={{width:"30px",height:"30px"}} src={chat} placeholder="Chat"/></a>
         </div>
        <div style={{position:"relative", overflowX:"hidden"}}>
            <SlideShow/>


            <div className='poster-container'>
            <h1  data-Aos="fade-down">{posters.poster[count-1].heading}</h1>
            <div className='poster-body'>
                <div className='poster-img' >
                  <img  src={posters.poster[count-1].imageUrl} data-Aos="zoom-in"/>
                </div>
                <div className='poster-smallPara'>
                    <p data-Aos="fade-left">{posters.poster[count-1].smallPara}</p>
                    <Link to="/poster" ><h4 data-Aos="fade-up">See More</h4></Link>
                </div>
            </div>
            

            </div>
            <About_us/>
            <Testimonial/>
            <Carousel/>
            <div style={{ backgroundImage: "linear-gradient(rgba(6, 175, 241, 0.795), white)"}}>
            <Social_media/>
            <Aashraya_stats/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home

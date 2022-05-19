import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingPage from '../../LoadingPage';
import '../../styles/Project.css'
function Project() {

    const [slides ,setSlides] = useState({});
    const [loading , setLoading ] =useState(true);

  useEffect( async()=>{
    const res = await fetch("/getSlideshow" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setSlides(data);
    setLoading(false)
  },[])


if(loading)
return <><LoadingPage/></>



  return (
    <div className='box-project'>
    <div className='nav-bg'></div>
        {slides.slide.slice(0).reverse().map((element) => {

        return (
            <div className="container-project">	
            <div className="product-details">
                <h1>{element.heading}</h1>
                <span>Date : </span>
                <p>{element.smallPara}</p>
                <Link to={element._id}><button>See more</button></Link>
            </div>	
            <div class="product-image">
                <img src={element.imageUrl} alt=""/>
            </div>
        </div>
        )
        })}
</div>

  )
}

export default Project
import React, { useState ,useEffect} from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import "./slideShow.css";
import { Link } from "react-router-dom";
import LoadingPage from "../../../LoadingPage";

function SlideShow() {

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
    <section>
      <div style={{backgroundColor:"black",height:"100vh",width:"100%",position:"absolute"}}></div>
      <Carousel interval={2500} indicatorLabels={false} controls={false}>
        {slides.slide.map((element, i) => {
          return (
            <Carousel.Item style={{ height: "100vh" }}>
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${element.imageUrl})`,
                  opacity: "0.6",
                }}
              />
              <div className="bg-background">
                <div className="bg-textdiv">
                  <div className="bg-text">
                    <h1>{element.heading}</h1>
                    <p>{element.smallPara}</p>
                    <div className="joinUsDiv">
                    <Link to={element._id}><div className="joinUs">
                        <Link to={element._id}>See more</Link>
                      </div></Link>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default SlideShow;

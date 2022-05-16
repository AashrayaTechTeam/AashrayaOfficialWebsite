import React, {useEffect} from 'react'
import logo from '../../../ASSETS/logo.jpg'
import './About_us.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About_us() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []) ;

    return (
		<div id="aboutUs"> 
            <div className="heading">
                <h1 data-Aos="fade-right">What Aashraya Does ?</h1>
			</div>
        
	    <div className="box">
            <div className="img" data-Aos="zoom-in" >
                <img src={logo} alt="Aashraya"/>
			</div> 
            <div className="content" data-Aos="fade-left">
                <p>
                    Aashraya is an independent student(s)
                    Organization which aims it's efforts for
                    the holistic welfare of all living beings.
                    Aashraya is an independent student(s)Organization which aims it's efforts 
                    for the holistic welfare of all living beings.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    soluta sit perspiciatis culpa quis nulla vel dicta maxime dolore 
                    optio minima officiis obcaecati aut, eius laborum corporis ducimus 
                    officia nisi voluptas voluptatibus blanditiis ea! Lorem ipsum dolor 
                    sit amet, consectetur adipisicing elit. Veniam, atque.
                </p>
            </div>
		</div>
		</div>
    )
}

export default About_us

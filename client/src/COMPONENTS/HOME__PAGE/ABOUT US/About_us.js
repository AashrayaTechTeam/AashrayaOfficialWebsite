import React, {useEffect} from 'react'
import logo from '../../../ASSETS/logo.jpg'
import './About_us.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About_us() {
    useEffect(() => {
        Aos.init({ duration: 500 });
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
                Team Aashraya is a non-profit and independently led student(s) organisation working for the
holistic welfare of all living beings and is founded by <strong>Priyanshu Khemariya</strong>, President of the Team.
We started as <strong>Maa Narmada Sena (MNS)</strong> in June 2019 to spread awareness about the conservation of the environment through plantation and cleanliness drives and later became <strong>Team Aashraya at NITK</strong> in October 2019.
Our goals Shiksha, Paryavaran, Chikitsa, Vastra, and Shakti are all part of the holistic approach. This holistic approach and means for its practical implementation has been guided by <strong>IAS Srushti Jayant Deshmukh</strong>.
                </p>
            </div>
		</div>
		</div>
    )
}

export default About_us

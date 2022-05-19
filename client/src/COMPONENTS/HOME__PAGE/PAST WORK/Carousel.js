import React from 'react'
import '../../../styles/Past work/Carousel.css'
import img from '../../../ASSETS/images/library.jpg'
import { Link } from 'react-router-dom'
function Carousel() {

  return (
    <div>
    <section id="testim" className="testim">
    <div className="wrap">
    <img src={img} alt="project image" />
      <div id="testim-content" className="content-project">
          <h1>Book Donation Drive</h1>
          <p>As a part of our Spread Knowledge Campaign, we organized an All-India Book Donation Drive under 
            the guidance of IAS Srushti Jayant Deshmukh and IAS Dr. Nagarjun B Gowda. 
            The campaign was conducted in more than 25 states across the country with over 
            4000 volunteers and donors joining us for a noble cause. With immense support, 
            we collected around 1 lakh+ books.</p>
            <Link style={{textDecoration:"none", color: "black"}} to="/BookDonationDrive"><button >Explore</button></Link>
        </div>
    </div>
  </section>
</div>
  )
}

export default Carousel
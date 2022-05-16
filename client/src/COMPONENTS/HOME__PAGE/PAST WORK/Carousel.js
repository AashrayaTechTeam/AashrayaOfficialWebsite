import React from 'react'
import '../../../styles/Past work/Carousel.css'
import img from '../../../ASSETS/images/library.jpg'
import { Link } from 'react-router-dom'
function Carousel() {

  return (
    <div>
    <section id="testim" class="testim">
    <div class="wrap">
    <img src={img} alt="project image" />
      <div id="testim-content" class="content-project">
          <h2>Book Donation Drive</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <button ><Link style={{textDecoration:"none", color: "black"}} to="/BookDonationDrive">Explore</Link></button>
        </div>
    </div>
  </section>
</div>
  )
}

export default Carousel
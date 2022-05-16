import React, {useEffect} from 'react'
import '../../../styles/Testimonial.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimonial() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []) ;

  return (
    <div>
  <div class="slider">
  <h1 style={{color:"black"}} data-Aos="fade-down">Our Mentors</h1>
  <input type="radio" name="testimonial" id="t-1" />
  <input type="radio" name="testimonial" id="t-2" />
  <input type="radio" name="testimonial" id="t-3" checked />
  <input type="radio" name="testimonial" id="t-4" />
  <input type="radio" name="testimonial" id="t-5" />
  <div class="testimonials mb-8" data-Aos="zoom-in">
    <label class="item" for="t-1">
      <div class="mycard">
        <p class="cardtitle">Himangshu</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.
          Poner en práctica los conocimientos adquiridos.
          Poner en práctica los conocimientos adquiridos.
          Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-2">
      <div class="mycard">
        <p class="cardtitle">Rishabh Sharma</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-3">
      <div class="mycard">
        <p class="cardtitle">Prateek Panth</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-4">
      <div class="mycard">
        <p class="cardtitle">Priyanshu</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
    <label class="item" for="t-5">
      <div class="mycard">
        <p class="cardtitle">Prathamesh</p>
        <div>
          <img src="https://i.pravatar.cc/200" alt="nivel5" class="cardimg" />
        </div>
        <div>
          <p class="carddescription">Poner en práctica los conocimientos adquiridos.</p>
        </div>
      </div>
    </label>
  </div>
  <div class="dots">
    <label for="t-1"></label>
    <label for="t-2"></label>
    <label for="t-3"></label>
    <label for="t-4"></label>
    <label for="t-5"></label>
  </div>
</div>
    </div>
  )
}

export default Testimonial

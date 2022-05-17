
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
import img from '../../ASSETS/logo.jpg'
function Footer() {

    const [Email,setEmail] = useState("");

    const submitHandle = async(e) =>{
        e.preventDefault();
        try{
            const res = await fetch('/subscribe' ,{
            method:"POST" ,
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              Email
            })
          });
          const data = await res.json();
          if(data.status === 422 || !data)
            window.alert("Invalid field type")
          if(data.error)
              window.alert("Invalid field type")
          else
            {window.alert("Successfully added") 
          window.location.reload();
          }
    }
    catch(err){
        console.log(err)
    }
}


    return (
        <div style={{width:"100%" , height:"auto" ,padding:"20px 0px",position:"relative", background:"#144C6B" , color:"white" , textAlign:"center"}}>
            <footer className='footer-box'>
                <section className='logo-footer'>
                    <img  src={img}/>
                </section>
                <section className='quick-link'>
                    <Link to="/donate"><span>Donate</span></Link>
                    <Link to="/blogs"><span>Blogs</span></Link>
                    <Link to="/projects"><span>Project</span></Link>
                    <Link to="/team"><span>Team</span></Link>
                    <Link to="/library"><span>Library</span></Link>
                </section>
                <section className='quick-link'>
                    <Link to="/"><span>Disclaimer</span></Link>
                    <Link to="/"><span>Privacy Policy</span></Link>
                    <Link to="/"><span>Terms and Condition</span></Link>
                </section>
                <section className='quick-link'>
                    <Link to="/career"><span>Career</span></Link>
                    <Link to="/join_us"><span>Join as Volunteers</span></Link>
                </section>

                <section className='contact-form'>
                    <form>
                        <h3>Subscribe Now</h3>
                        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
                        <button onClick={submitHandle}>Send</button>
                    </form>
                </section>
                
            </footer>
            <div className='footer-bottom'>
               <p>Thanks for your contribution for the wellbeing of the human race.
               <br/> Copyright © 2022, All Rights Reserved | Build with ❤️ from <Link to="/admin">Team Aashraya</Link></p>
            </div>
        </div>
    )
}

export default Footer

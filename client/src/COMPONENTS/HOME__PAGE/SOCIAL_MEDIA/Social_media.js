import React, { useEffect } from "react";
import instagram from "../../../ASSETS/social/insta.png";
import facebook from "../../../ASSETS/social/facebook.png";
import linkedin from "../../../ASSETS/social/linkedin.png";
import youtube from "../../../ASSETS/social/youtube.png";
import "../../../styles/Home.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Social_media() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="media-handels"
      style={{ width: "100%", height: "300px", textAlign: "center" }}
    >
      <h1 style={{ padding: "120px", color: "black" }} data-Aos="fade-down">
        Social Media Handles
      </h1>
      <div className="social-icon" data-Aos="zoom-in">
        <a href="https://www.instagram.com/aashraya_07/">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/TeamAashraya">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.linkedin.com/company/team-aashraya/mycompany/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.youtube.com/channel/UCs1KMJrFdEwJWO2l_gYqVQg">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
    </div>
  );
}

export default Social_media;

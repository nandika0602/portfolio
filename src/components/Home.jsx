import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ["Front-End Developer", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);
  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="home-info">
            <div className="left">
              <h3>Hello, I'm</h3>
              <h1>Nandika</h1>
              <h4>
                And I'm <span ref={el} className="multiple"></span>
              </h4>
              <p>Working as a Frontend Developer...</p>
              <div className="social">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-brands fa-instagram"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="fa-brands fa-x-twitter"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="fa-brands fa-facebook-f"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa-brands fa-linkedin-in"
                  />
                </a>
              </div>
              <div className="btn">
                <button>Download CV</button>
              </div>
            </div>
            <div className="right">
              <div className="profile">
                <img src="images/profile.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

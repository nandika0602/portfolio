import {
  faFacebook,
  faGithub,
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
      strings: ["Front-End Developer"],
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
                {/* <a href="#">
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
                </a> */}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nandika-devarajan-7a709822b/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa-brands fa-linkedin-in"
                  />
                </a>
                <a target="_blank" href="https://github.com/nandika0602">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="fa-brands fa-linkedin-in"
                  />
                </a>
              </div>
              <div className="btn">
                {/* <button> */}
                <a
                  href="/Nandika_Devarajan_ReactJS_Resume.pdf"
                  download
                  className="btn"
                >
                  Download CV
                </a>
                {/* </button> */}
              </div>
            </div>
            <div className="right">
              <div className="profile">
                <img src="/profile1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

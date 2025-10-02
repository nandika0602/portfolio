import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    return localStorage.getItem("darkModeEnabled") === "true";
  });
  const [activeSection, setActiveSection] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // if (isActive) {
      //   setIsActive(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((sec) => {
        const offsetTop = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          current = sec.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    if (darkModeEnabled) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkModeEnabled", "false");
    }
  }, [darkModeEnabled]);

  const handleChange = (e) => {
    setDarkModeEnabled(e.target.checked);
  };

  return (
    <>
      <header className={isScrolled ? "header scrolled" : "header"}>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="#">
                <span>Nandika</span> Devarajan{" "}
              </a>
            </div>
            <div className="list-darkmode-menu">
              <ul className={isActive ? "active" : ""}>
                <li>
                  <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className={activeSection === "services" ? "active" : ""}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className={activeSection === "portfolio" ? "active" : ""}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <label className="mode">
                <input
                  id="darkModeButton"
                  type="checkbox"
                  checked={darkModeEnabled}
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faSun} className="fa-sun" />
                <FontAwesomeIcon icon={faMoon} className="fa-moon" />
              </label>
              <button
                className={`hamburger ${isActive ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

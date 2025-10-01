import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    return localStorage.getItem("darkModeEnabled") === "true";
  });
  const [isActive, setIsActive] = useState(false);

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
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="#">
                <span>Nandika</span> Devarajan
              </a>
            </div>
            <div className="list-darkmode-menu">
              <ul className={isActive ? "active" : ""}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>{" "}
                <li>
                  <a href="#services">Services</a>
                </li>{" "}
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>{" "}
                <li>
                  <a href="#contact">Contact</a>
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

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-info">{/* <p>Copyright &copy; </p> */}</div>
            <div className="iconTop">
              <a href="#home">
                <FontAwesomeIcon icon={faArrowUp} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

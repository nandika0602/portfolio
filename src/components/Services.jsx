import {
  faChartColumn,
  faCode,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <h2>
            Our <span>Services</span>
          </h2>
          <div className="services-box">
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                reiciendis at laborum mollitia non fuga modi alias numquam,
                dolores illum maxime quo consequatur quibusdam vitae vel quae
                minima consequuntur dicta!
              </p>
              <div className="services-btn">
                <button>Read More</button>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faPenFancy} />
              </div>
              <h3>Graphic Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                reiciendis at laborum mollitia non fuga modi alias numquam,
                dolores illum maxime quo consequatur quibusdam vitae vel quae
                minima consequuntur dicta!
              </p>
              <div className="services-btn">
                <button>Read More</button>
              </div>
            </div>{" "}
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faChartColumn} />
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                reiciendis at laborum mollitia non fuga modi alias numquam,
                dolores illum maxime quo consequatur quibusdam vitae vel quae
                minima consequuntur dicta!
              </p>
              <div className="services-btn">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;

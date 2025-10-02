import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2>
            Latest <span>Project</span>
          </h2>
          <div className="portfolio-wrapper">
            <div className="portfolio-box">
              <img src="images/port1.png" alt="" srcset="" />
              <div className="portfolio-info">
                <h4>Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam quasi rerum at amet consequatur sapiente odio placeat
                  expedita delectus velit! Quae voluptatibus, perferendis
                  incidunt dolores quisquam itaque culpa excepturi vitae.
                </p>
                <a href="#">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="portfolio-box">
              <img src="images/port2.png" alt="" srcset="" />
              <div className="portfolio-info">
                <h4>Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam quasi rerum at amet consequatur sapiente odio placeat
                  expedita delectus velit! Quae voluptatibus, perferendis
                  incidunt dolores quisquam itaque culpa excepturi vitae.
                </p>
                <a href="#">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>{" "}
            <div className="portfolio-box">
              <img src="images/port3.png" alt="" srcset="" />
              <div className="portfolio-info">
                <h4>Web Design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam quasi rerum at amet consequatur sapiente odio placeat
                  expedita delectus velit! Quae voluptatibus, perferendis
                  incidunt dolores quisquam itaque culpa excepturi vitae.
                </p>
                <a href="#">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

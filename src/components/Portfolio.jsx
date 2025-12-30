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
                <h4>Recipe Store</h4>
                <p>
                  A responsive React application for browsing and exploring
                  recipes, focusing on clean UI and reusable components.
                </p>
                <p>Tech focus: React, reusable components, responsive design</p>
                <p>
                  Purpose: Practice real-world frontend application structure
                  and UI logic
                </p>
                <a
                  href="https://github.com/nandika0602/Recipe_Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>
            <div className="portfolio-box">
              <img src="images/port2.png" alt="" srcset="" />
              <div className="portfolio-info">
                <h4>User Management Store</h4>
                <p>
                  A CRUD-based system to manage users with add, edit, delete,
                  and view functionality using React state management.
                </p>
                <p>Tech focus: React, state management, forms & validation</p>
                <p>
                  Purpose: Learn core CRUD operations and application data flow
                </p>
                <a
                  href="https://github.com/nandika0602/UserManagement_STORE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              </div>
            </div>{" "}
            <div className="portfolio-box">
              <img src="images/port3.png" alt="" srcset="" />
              <div className="portfolio-info">
                <h4>B2B and B2C Website</h4>
                <p>
                  A modern, responsive website demonstrating real-world B2B and
                  B2C layouts with scalable React components.
                </p>
                <p>
                  Tech focus: React, component reusability, modern UI patterns
                </p>
                <p>Purpose: Simulate enterprise-level website development</p>
                <a
                  href="https://github.com/nandika0602/youtube-clone-ReactJS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

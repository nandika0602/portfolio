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
            My <span>Experience</span>
          </h2>
          <div className="services-box">
            <div className="box">
              <div className="icon">
                {/* <FontAwesomeIcon icon={faCode} /> */}
              </div>
              <h3>Quinbay</h3>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p>
                  {" "}
                  • Contributed to the development of travel-based B2B and B2C
                  platforms (Flight & Hotel booking modules).
                </p>
                <p>
                  • Integrated REST APIs for fetching dynamic data and enhanced
                  state management with Redux.
                </p>
                <p>
                  • Supported CI/CD deployment pipelines through Jenkins and GCP
                  environments.
                </p>
                <p>
                  • Participated in Agile sprint meetings for feature delivery
                  and testing.
                </p>
                <p>
                  Tech Stack: ReactJS, Redux, JavaScript (ES6), HTML5, CSS3,
                  Bootstrap, Jenkins, GCP
                </p>
              </div>
              {/* <div className="services-btn">
                <button>Read More</button>
              </div> */}
            </div>
            <div className="box">
              {/* <div className="icon">
                <FontAwesomeIcon icon={faPenFancy} />
              </div> */}
              <h3>Relyon Softech</h3>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p>
                  • Designed and developed responsive UI screens for tax filing
                  and notice management systems, improving accessibility and
                  performance.
                </p>
                <p>
                  • Created 20+ optimized UI components ensuring UI consistency
                  and reducing rendering time.
                </p>
                <p>
                  • Implemented real-time pagination, sorting, and filtering,
                  decreasing notice response time by 20%.
                </p>
                <p>
                  • Integrated RESTful APIs with Axios and Redux Toolkit Query,
                  reducing redundant API calls by 30%.
                </p>
                <p>
                  {" "}
                  • Implemented JWT-based authentication and auto-logout for
                  secure session management.
                </p>
                <p>
                  Tech Stack: ReactJS, Redux Toolkit Query, Redux, JavaScript
                  (ES6), HTML5, CSS3, React Router, Axios
                </p>
              </div>
              {/* <div className="services-btn">
                <button>Read More</button>
              </div> */}
            </div>{" "}
            <div className="box">
              {/* <div className="icon">
                <FontAwesomeIcon icon={faChartColumn} />
              </div> */}
              <h3>TripGain</h3>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                {" "}
                <p>
                  • Developing and optimizing scalable travel-based B2B and B2C
                  web and mobile platforms for International and Domestic
                  clients using ReactJS and Redux.
                </p>
                <p>
                  • Built and maintained 10+ reusable UI components, ensuring
                  design consistency and efficient performance.
                </p>
                <p>
                  • Enhanced application speed through code-splitting, lazy
                  loading, and optimized state management.
                </p>
                <p>
                  • Collaborated with design and backend teams for seamless
                  UI-API integration and improved user workflows.
                </p>
                <p>
                  • Contributed to feature development, bug fixes, and
                  performance improvements across production environments.
                </p>
                <p>
                  • Collaborated in an Agile environment for sprint planning,
                  testing, and release cycles.
                </p>
                <p>
                  Tech Stack: ReactJS, Redux, JavaScript (ES6), HTML5, CSS3,
                  Tailwind CSS, Material UI, Axios
                </p>
              </div>
              {/* <div className="services-btn">
                <button>Read More</button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;

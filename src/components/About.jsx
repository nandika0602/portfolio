const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left">
              <div className="about-img">
                <img src="/profile2.jpeg" alt="" srcset="" />
              </div>
            </div>
            <div className="about-right">
              <div className="about-info">
                <h2>
                  About
                  <span>Me</span>
                </h2>
                <h3>Frontend Developer</h3>
                <p>
                  I’m a passionate Frontend Developer with over 3 years of
                  experience building scalable and high-performance web
                  applications using ReactJS, JavaScript (ES6), HTML5, CSS3, and
                  modern UI frameworks like Redux, Tailwind CSS, and
                  Material-UI.
                </p>
                <p>
                  I enjoy crafting clean, responsive interfaces that provide
                  exceptional user experiences. My focus is on creating
                  efficient, maintainable code with strong attention to design
                  detail, performance, and usability.
                </p>
                <p>
                  I’ve worked across travel and finance domains, developing B2B
                  and B2C platforms, and collaborating closely with
                  cross-functional teams to deliver products from concept to
                  production.
                </p>
                <p>
                  {" "}
                  🔹 Tech Stack: ReactJS, Redux, Redux Toolkit, Tailwind CSS,
                  Bootstrap, JavaScript (ES6), HTML5, CSS3, Git, REST API
                  integration
                </p>
                <p>
                  {" "}
                  🔹 Strengths: Problem-solving, debugging, performance
                  optimization, teamwork, and continuous learning
                </p>
                {/* <button>Read More</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left">
              <div className="about-img">
                <img src="images/profile.png" alt="" srcset="" />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium labore eius sequi explicabo beatae excepturi ex,
                  nostrum tempore maxime, facere facilis quia aperiam nesciunt
                  aspernatur sapiente velit, provident recusandae quae?
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

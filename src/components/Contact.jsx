const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <form>
            <div className="input-box">
              <input type="text" placeholder="Full Name" name="" id="" />
              <input type="email" placeholder="Email Address" name="" id="" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Mobile Number" name="" id="" />
              <input type="text" placeholder="Email Subject" name="" id="" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

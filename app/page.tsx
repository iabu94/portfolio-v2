"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, count] = useTypewriter({
    words: ["Full Stack Developer", "Blogger", "YouTuber"],
    loop: true,
    deleteSpeed: 20,
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id") || "";

        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });

      setSticky(window.scrollY > 100);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initial = {
    opacity: 0,
  };

  const fromTopInitial = {
    ...initial,
    y: "-80px",
  };

  const fromBottomInitial = {
    ...initial,
    y: "80px",
  };

  const fromLeftInitial = {
    ...initial,
    x: "-80px",
  };

  const fromRightInitial = {
    ...initial,
    x: "80px",
  };

  const inViewAnimation = {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2,
      animationDelay: 0.2,
    },
  };

  return (
    <>
      {/* Header Section */}
      <header className={"header" + (sticky ? " sticky" : "")}>
        <a href="#" className="logo">
          Portfolio
        </a>
        <i
          className={"bx " + (isOpen ? "bx-x" : "bx-menu")}
          id="menu-icon"
          onClick={handleClick}
        ></i>

        <nav className={"navbar " + (isOpen ? "active" : "")}>
          <a href="#home" className={activeLink == "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeLink == "about" ? "active" : ""}>
            About
          </a>
          <a
            href="#services"
            className={activeLink == "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={activeLink == "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={activeLink == "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <motion.div
          className="home-content"
          initial={fromTopInitial}
          whileInView={inViewAnimation}
        >
          <h3>Hello, It&apos;s Me</h3>
          <motion.h1 initial={fromLeftInitial} whileInView={inViewAnimation}>
            Abdullah Mansoor
          </motion.h1>
          <h3>
            <div className="">
              And I&apos;m a <span>{text}</span>
              <Cursor cursorColor="#0ef" />
            </div>
          </h3>
          <motion.p initial={fromRightInitial} whileInView={inViewAnimation}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aliquam, modi aspernatur placeat architecto amet laudantium id.
          </motion.p>
          <div className="social-media">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href="#" className="btn">
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={fromBottomInitial}
          whileInView={inViewAnimation}
          className="home-img"
        >
          <img src="/pp.jpeg" alt="" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <motion.div
          initial={fromLeftInitial}
          whileInView={inViewAnimation}
          className="about-img"
        >
          <img src="pp.jpeg" alt="" />
        </motion.div>
        <motion.div
          initial={fromRightInitial}
          whileInView={inViewAnimation}
          className="about-content"
        >
          <motion.h2
            initial={fromTopInitial}
            whileInView={inViewAnimation}
            className="heading"
          >
            About <span>Me</span>
          </motion.h2>
          <h3>Full Stack Developer!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            officia asperiores labore officiis suscipit ex at non impedit
            nostrum animi illum mollitia itaque reprehenderit laudantium
            molestiae eum porro molestias repudiandae, amet ea eos alias
            corporis laborum nobis. Tempore deserunt repellendus quos nihil
            voluptas aut est suscipit.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <motion.h2
          initial={fromTopInitial}
          whileInView={inViewAnimation}
          className="heading"
        >
          Our <span>Services</span>
        </motion.h2>

        <motion.div
          initial={fromBottomInitial}
          whileInView={inViewAnimation}
          className="services-container"
        >
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              dignissimos vitae magni aut commodi non laborum nisi alias iusto
              voluptatibus.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              dignissimos vitae magni aut commodi non laborum nisi alias iusto
              voluptatibus.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              dignissimos vitae magni aut commodi non laborum nisi alias iusto
              voluptatibus.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <motion.h2
          initial={fromTopInitial}
          whileInView={inViewAnimation}
          className="heading"
        >
          Latest <span>Project</span>
        </motion.h2>

        <div className="portfolio-container">
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="1.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="2.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="3.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="4.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="5.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={fromBottomInitial}
            whileInView={inViewAnimation}
            className="portfolio-box"
          >
            <img src="1.jpeg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ratione.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <motion.h2
          initial={fromTopInitial}
          whileInView={inViewAnimation}
          className="heading"
        >
          Contact <span>Me!</span>
        </motion.h2>

        <motion.form
          initial={fromBottomInitial}
          whileInView={inViewAnimation}
          action="#"
          autoComplete="off"
        >
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Messaage" className="btn" />
        </motion.form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <p>
            Copyright &copy; 2023 by Abdullah Mansoor | All Rights Reserved.
          </p>
        </div>

        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

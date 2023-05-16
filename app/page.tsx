"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id") || "";

        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
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
        <div className="home-content">
          <h3>Hello, It&apos;s Me</h3>
          <h1>Abdullah Mansoor</h1>
          <h3>
            And I&apos;m a <span>Full Stack Developer</span>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aliquam, modi aspernatur placeat architecto amet laudantium id.
          </p>
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
        </div>

        <div className="home-img">
          <img src="/pp.jpeg" alt="" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-img">
          <img src="pp.jpeg" alt="" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
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
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>

        <div className="services-container">
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
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
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
          </div>
          <div className="portfolio-box">
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
          </div>
          <div className="portfolio-box">
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
          </div>
          <div className="portfolio-box">
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
          </div>
          <div className="portfolio-box">
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
          </div>
          <div className="portfolio-box">
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#" autoComplete="off">
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
        </form>
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

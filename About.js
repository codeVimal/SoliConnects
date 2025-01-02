import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">Soli Connects</span>!
        </p>
      </div>
      <div className="about-content">
        <section className="section">
          <h2>Who We Are</h2>
          <p>
            Soli Connects is more than just a company; we’re a vision-driven
            organization committed to delivering innovative solutions. Whether you're looking to
            collaborate, create, or grow, we aim to bridge gaps and bring people
            closer to opportunities that matter.
          </p>
        </section>
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster connections that inspire positive change,
            promote collaboration, and enable success in every endeavor. We
            believe in leveraging cutting-edge technology and human-centered
            design to make every connection purposeful and impactful.
          </p>
        </section>
        <section className="section">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Innovative Solutions:</strong> Tailored technologies for
              modern challenges.
            </li>
            <li>
              <strong>Community Building:</strong> Empowering individuals and
              teams to grow together.
            </li>
            <li>
              <strong>Strategic Partnerships:</strong> Connecting businesses
              with valuable opportunities.
            </li>
          </ul>
        </section>
        <section className="section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Passion for Excellence:</strong> We treat your project as if it were our own.
            </li>
            <li>
              <strong>Client-Centric Approach:</strong> Your satisfaction drives us.
            </li>
            <li>
              <strong>Expert Team:</strong> Skilled professionals with a knack for innovation.
            </li>
            <li>
              <strong>Timely Delivery:</strong> We respect your time and deadlines.
            </li>
          </ul>
          <p>
            Let us help you establish a strong online presence. Get in touch
            today to start your journey toward digital success!
          </p>
        </section>
        <div className="cta">
          <p>Join us on our journey to create meaningful connections!</p>
        </div>
      </div>
    </div>
  );
};

export default About;

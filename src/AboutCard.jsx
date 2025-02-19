// import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prem Pandey </span>
            from <span className="purple"> Dhanbad, India.</span>
            <br />
            I am currently employed as a react developer at kreativan.
            <br />
            I have completed Integrated B.tech in computer science engg.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Strive to build things that make a difference{" "}
          </p>
          <footer className="blockquote-footer">Prem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

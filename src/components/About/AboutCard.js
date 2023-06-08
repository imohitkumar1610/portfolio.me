import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohit Kumar </span>
             from <span className="purple"> Uttar Pradesh, India.</span>
            <br /> I am a Third year student pursuing a Bachelor of Technology degree focusses in Electronics and communication engineering (B.Tech - ECE)
            from National Institute Of Technology, Durgapur.
            <br />
            Additionally, I am the Senior member of IEEE SB NIT Durgapur, Darpan NIT Durgapur and the training and placement coordinator at Training and placement cell NIT Durgapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Hockey and Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking Food 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Writing stories.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/record.webp";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/werher.webp";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/hangman.jpeg";
import bitsOfCode from "../../Assets/Projects/object.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commers"
              description="E-commers Website you can buy any product . i createad admin pannle were admin can see list of user  total buying product , and product at to kart , log in , sign up ,  dash bord for admin ,search system, categoris."
              link="https://github.com/ashish9921/E_commers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Object Detectuon"
              description="i created object detection using res net and mobile net pre-build modules and using python open cv using our web cam we can realtime detect object."
              link="https://github.com/ashish9921/mini--project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather"
              description="in that project i use simple html , javascript and css.this website take input from rest api present in server and show us ifo about website with perticular city"
              link="https://github.com/ashish9921/Weather_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}Used the 
              isBlog={false}
              title="Record System"
              description="in that project i created windose based software using python tkinter and connected that with database in this project any one can register info log in , and see all in chart it is use full for shop kipers for costomer servises."
              link="https://github.com/ashish9921/Svpm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hang Man Game"
              description="this is game which i created using python pygame module in that game we have to guess perticular words if we do wrong that our caracter gonnhang himself."
              link="https://github.com/ashish9921/Hang_Man_man"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Detection"
              description="this is project created log ago called face detection using face detection inbuild modul in deep lerning and using open cv we can actually detect face of person if we allready have its info face "              link="https://github.com/ashish9921/face_detection_webcam"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col >
            <div className="about__img">  
              <img src={aboutImg} alt="" className="w-100"/>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Préparez-vous au métiers de demain  </h2>
              <br/>
              <br/>
              <p> 
                relevez les défis du marchés de l'emploi en combinant un parcours 
                professionel et un parcours académique
              </p>
          <br/>
          <br/>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={20} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">Parcours professionel</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={80} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">parcours académique</p>
                  </div>
                </div>

                
                  </div>
                </div>
              
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;

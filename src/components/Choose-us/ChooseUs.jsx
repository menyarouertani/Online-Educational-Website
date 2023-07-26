import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Qui sommes nous </h2>
              <p>
              TED University (ispTED) spécialisée dans l'IT propose des Licences et Masters dans les domaines les plus demandés sur le marché
               tels que le coding, le big data, l’administration réseau et système, la cybersécurité, la virtualisation et le cloud computing.
                Nos étudiants auront une chance unique en Tunisie: En plus du diplôme, ils pourront obtenir les certifications des éditeurs
                 et constructeurs leaders à l'échelle internationale. Ils pourront également effectuer leurs stages chez les entreprises partenaires 
                 de renommée pour garantir une carrière réussie. Notre mission est de réduire le gap entre les demandes du marché en terme de compétences 
                 (hard et soft) et la formation académique proposée et ce à travers la pratique, la certification et l’immersion dans le monde de l'entreprise.


              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;

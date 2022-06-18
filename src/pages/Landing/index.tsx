import React from "react";
import { useNavigate } from "react-router-dom";
import { GiPresent } from "react-icons/gi";

import { Button, Image } from "antd";

import "./styles.css";

const Landing: React.FC = () => {
  const history = useNavigate();

  return (
    <div className="page-landing">
      <div className="page-landing-filer-background">
        <div className="pre-info">
          <h3>Casamento</h3>
        </div>
        <div className="border-divider" />
        <div className="main-info">
          <h1>Larissa & Matheus</h1>
        </div>
        <div className="date-wedding">
          <h4>15 · 11 · 2022</h4>
        </div>
        <div className="border-divider" />
        <div className="message">
          <p>
            Desejamos que a presença de vocês não se limite somente ao nosso
            casamento, mas que possamos desfrutar de momentos maravilhosos,
            durante toda nossa história
          </p>
        </div>
        <div className="link-cha">
          <Button
            icon={<GiPresent />}
            style={{ padding: 4 }}
            onClick={() => history("/chalist")}
          >
            Lista de presentes do Chá
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

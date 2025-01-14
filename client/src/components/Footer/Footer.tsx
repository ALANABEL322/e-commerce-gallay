import React from "react";
import { Link } from "react-router-dom";
import { GiRocketThruster } from "react-icons/gi";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
        <Link
          className="navbar-footer"
          aria-current="page"
          to="/"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          <GiRocketThruster className="footer-icon" />
          Gallay
        </Link>

        <p className="footer-texto text-center">
          Industria Gallay
          <br />
          vos lo pedis nosotros lo hacemos
        </p>
        <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <Link
            to=""
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i className="bi bi-youtube"></i>
          </Link>
          <Link
            to="mailto:alanabelpereyra322@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i className="bi bi-envelope-at-fill"></i>
          </Link>
          <Link
            to=""
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
        <div className="derechos-de-autor">
          Creado por Jon Nahuel Pereyra y Alan Abel pereyra (2023) &#169;
        </div>
      </footer>
    </div>
  );
};

export default Footer;

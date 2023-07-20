import React from "react";
import { Link } from "react-router-dom";
import { GiRocketThruster } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

const NavBar1: React.FC = () => {
  return (
    <div>
      <div className="container-fluid navbar-container">
        <IconContext.Provider value={{ color: "#fff" }}>
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-logo" aria-current="page" to="/">
              <GiRocketThruster className="navbar-icon" />
              Gallay
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-links-container">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-links navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/home"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/products"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Productos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/help"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Ayuda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Iniciar Sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default NavBar1;

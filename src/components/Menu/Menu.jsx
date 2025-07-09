// src/components/Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/authServices";

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#a7111c" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Seja bem-vindo!
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {" "}
            {/* Alterado me-auto para mx-auto */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/dashboard">
                Novos Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sobre">
                Usuários Pendentes e Recusados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Chamados
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

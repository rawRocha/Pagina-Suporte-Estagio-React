import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

import "./FormLogin.css";

const FormLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErro("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token); // ou use cookies
      setErro("");
      alert("Login bem-sucedido!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setErro("Credenciais inválidas");
    }
  };

  return (
    <div className="form-login">
      <div className="top-form">
        <h2 className="mb-3">Login</h2>
        <a href="#" className="mb-2">
          Esqueceu a sua senha?
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        {erro && <div className="alert alert-danger">{erro}</div>}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-white border-end-0">
            <img
              src="src/assets/person_24dp_A7111C_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Ícone"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
          <input
            type="email"
            className="form-control border-start-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu-email@email.com"
            required
          />
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text bg-white border-end-0">
            <img
              src="src\assets\lock_24dp_A7111C_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Ícone"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
          <input
            type="password"
            className="form-control border-start-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="sua senha"
            required
          />
        </div>
        <div className="form-foot mb-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              name="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Lembre de mim
            </label>
          </div>
          <div>
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default FormLogin;

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

import "./FormCadastro.css";

const FormCadastro = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userRole, setUserRole] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (!userRole) {
      setErro("Selecione qual será seu tipo de usuário!");
      return;
    }

    if (password !== passwordConfirm) {
      setErro("As senhas digitadas não são iguais. Por favor, verifique.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users", {
        name,
        email,
        password,
        userRole,
      });

      const token = response.data.token;
      localStorage.setItem("token", token); // ou use cookies
      setErro("");
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (err) {
      console.log(err);
      setErro("Erro ao cadastrar novo usuário!");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="form-login">
      <div className="top-form">
        <h2 className="mb-3">Cadastro</h2>
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
            type="text"
            className="form-control border-start-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="seu nome"
            required
          />
        </div>
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
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="repita a senha"
            required
          />
        </div>

        <div className="mb-3">
          <select
            id="roles"
            className="form-select"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="">Selecione qual será seu tipo de usuário</option>
            <option value="STAFF">Técnico</option>
            <option value="CLIENT">Cliente</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCancel}
        >
          cancelar
        </button>
      </form>
    </div>
  );
};

export default FormCadastro;

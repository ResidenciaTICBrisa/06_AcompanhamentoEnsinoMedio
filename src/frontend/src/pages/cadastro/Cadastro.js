import React from "react";

import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Cadastro.css";

function Cadastro() {
  return (
    <>
      <Header />
      <div className="dark-background button-container">
        <Link to="aluno">
          <button className="styled-button">Cadastro de Aluno</button>
        </Link>

        <Link to="instituicao">
          <button className="styled-button">Cadastro de Instituição</button>
        </Link>

        <Link to="unidade">
          <button className="styled-button">Cadastro de Unidade</button>
        </Link>

        <Link to="disciplina">
          <button className="styled-button">Cadastro de Disciplina</button>
        </Link>

        <Link to="turma">
          <button className="styled-button">Cadastro de Turma</button>
        </Link>

        <Link to="professor">
          <button className="styled-button">Cadastro de Professor</button>
        </Link>

        <Link to="avaliacao">
          <button className="styled-button">Cadastro de Avaliação</button>
        </Link>
      </div>
    </>
  );
}

export default Cadastro;

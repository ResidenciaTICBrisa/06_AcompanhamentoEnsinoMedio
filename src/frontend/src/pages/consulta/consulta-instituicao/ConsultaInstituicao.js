import React, { useEffect } from "react";

import "./ConsultaInstituicao.css";
import InstituicaoService from "../../../services/InstituicaoService";
import Header from "../../../components/header/Header";

const ConsultaInstituicao = () => {

  const [dados, setDados] = React.useState([]);

  useEffect(() => {
    InstituicaoService.getInstituicoes().then((res) => {
      setDados(res);
    });
  }, []);


  return (
    <>
      <Header />
      <div className="dark-background">
      <div>
          <h1>Consulta de Instituições</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>Nome</th>
              <th>CPF do Diretor</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((pessoa, index) => (
              <tr key={index}>
                <td>{pessoa.cnpj}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cpfDirecao}</td>
                <td>{pessoa.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ConsultaInstituicao;

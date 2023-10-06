import React from 'react';

import { Link } from 'react-router-dom';
import './Consulta.css';

function Consulta() {
    return (
        <div className="dark-background button-container">
            <Link to="/consulta/aluno">
                <button className="styled-button">
                    Consulta de Aluno
                </button>
            </Link>

            <Link to="/consulta/instituicao">
                <button className="styled-button">
                    Consulta de Instituição
                </button>
            </Link>
        </div>
    );
}

export default Consulta;
import React from "react";

import Logo from "../../assets/LOGO_ESCOLA-S-1024x497.png";
import { FiDatabase, FiUserPlus } from "react-icons/fi";
import { Container } from "./style";

const BarraSuperior: React.FC = () => {
    return(
        <>
            <Container>
                <img src={Logo} alt="Logo Escola S" />
                <text className="opc">|</text>

                <text className="opc"><a href="/chamada">Chamada </a></text>
            
                <div className="separa_botao">
                    <a href="/listaAlunos">
                        <button className="botao">
                            <FiDatabase size={30}/>
                            <p className="cadastra">Alunos</p>
                        </button>
                    </a>
                </div>

                <div className="separa_botao">
                    <a href="/cadastrar">
                        <button className="botao">
                            <FiUserPlus size={30} />
                            <p className="cadastra">Cadastrar</p>
                        </button>
                    </a>
                </div>
            </Container>
        </>
    );
}

export default BarraSuperior;
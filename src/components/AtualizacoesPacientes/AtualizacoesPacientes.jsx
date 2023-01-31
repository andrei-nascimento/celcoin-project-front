import React from "react";
import './AtualizacoesPacientes.css';
import tdahIcon from '../../assets/imgs/tdah.png';
import autismoIcon from '../../assets/imgs/autismo.png';

function AtualizacoesPacientes() {
    return (
        <div className="container-atualiza-pac">
            
                <div className="atualiza-pac-principal">
                    <p className="atualiza-pac-title">Atualizações de pacientes</p>
                </div>

            <div className="atualiza-pac-cards">

                <div className="atualiza-pac-card">
                    <div className="atualiza-pac-image-box">
                        <img className="atualiza-pac-icon" src={tdahIcon} alt="tdah icon" />
                    </div>
                    <div className="atualiza-pac-dados">
                        <p className="atualiza-pac-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">TDAH CAB ADHD</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/12/2023</p>
                    </div>
                </div>

                <div className="atualiza-pac-card">
                    <div className="atualiza-pac-image-box">
                        <img className="atualiza-pac-icon" src={autismoIcon} alt="" />
                    </div>
                    <div className="atualiza-pac-dados">
                        <p className="atualiza-pac-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">Autismo</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/09/2023</p>
                    </div>
                </div>

                <div className="atualiza-pac-card">
                    <div className="atualiza-pac-image-box">
                        <img className="atualiza-pac-icon" src={tdahIcon} alt="" />
                    </div>
                    <div className="atualiza-pac-dados">
                        <p className="atualiza-pac-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">TDAH CAB ADHD</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/10/2023</p>
                    </div>
                </div>

                <div className="atualiza-pac-card">
                    <div className="atualiza-pac-image-box">
                        <img className="atualiza-pac-icon" src={autismoIcon} alt="" />
                    </div>
                    <div className="atualiza-pac-dados">
                        <p className="atualiza-pac-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">Autismo</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/09/2023</p>
                    </div>
                </div>

                <div className="atualiza-pac-card">
                    <div className="atualiza-pac-image-box">
                        <img className="atualiza-pac-icon" src={autismoIcon} alt="" />
                    </div>
                    <div className="atualiza-pac-dados">
                        <p className="atualiza-pac-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">Autismo</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/09/2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtualizacoesPacientes
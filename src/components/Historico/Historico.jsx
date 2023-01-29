import React from "react";
import './Historico.css';
import tdahIcon from '../../assets/imgs/tdah.png';
import autismoIcon from '../../assets/imgs/autismo.png';
import autismoBigIcon from '../../assets/imgs/autismo-big.png';

function Historico() {
    return (
        <div className="container-historico">
            
                <div className="historico-principal">
                    <p className="historico-title">Histórico de atendimentos</p>
                    <button className="btn-ver-todos">VER TODOS</button>
                    <p className="mais-realizado-first">Teste mais realizado</p>
                </div>

            <div className="historico-cards">

                <div className="historico-card">
                    <div className="historico-image-box">
                        <img className="historico-icon" src={tdahIcon} alt="tdah icon" />
                    </div>
                    <div className="historico-dados">
                        <p className="paciente-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">TDAH CAB ADHD</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/12/2023</p>
                    </div>
                </div>

                <div className="historico-card">
                    <div className="historico-image-box">
                        <img className="historico-icon" src={autismoIcon} alt="" />
                    </div>
                    <div className="historico-dados">
                        <p className="paciente-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">Autismo</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/09/2023</p>
                    </div>
                </div>

                <div className="historico-card">
                    <div className="historico-image-box">
                        <img className="historico-icon" src={tdahIcon} alt="" />
                    </div>
                    <div className="historico-dados">
                        <p className="paciente-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">TDAH CAB ADHD</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/10/2023</p>
                    </div>
                </div>

                <div className="historico-card">
                    <div className="historico-image-box">
                        <img className="historico-icon" src={autismoIcon} alt="" />
                    </div>
                    <div className="historico-dados">
                        <p className="paciente-name-hist">Renata Augusto Ferreira</p>
                        <p className="text-style1">TESTE REALIZADO</p>
                        <p className="text-style2">Autismo</p>
                        <p className="text-style1">REALIZADO EM:</p>
                        <p className="text-style2">20/09/2023</p>
                    </div>
                </div>

                <div className="historico-card-last">
                    <div className="bg-card-last">
                        <div className="historico-image-box-last">
                            <img className="historico-icon-last" src={autismoBigIcon} alt="" />

                            <div className="mais-realizado-texts">
                                <p className="mais-realizado-title">Autismo</p>
                                <p className="mais-realizado-subtitle">LICENÇAS DISPONÍVEIS</p>
                                <div className="mais-realizado-quant">
                                    <p className="mais-realizado-title">13</p>
                                    <button className="btn-comprar-mais">COMPRAR MAIS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Historico
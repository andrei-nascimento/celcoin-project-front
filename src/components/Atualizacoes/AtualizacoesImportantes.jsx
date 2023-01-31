import React from "react";
import './AtualizacoesImportantes.css';
import paciente1 from '../../assets/imgs/paciente-renata.png';
import paciente2 from '../../assets/imgs/paciente-carlos.png';
import paciente3 from '../../assets/imgs/paciente-suelton.png';

function AtualizacoesImportantes() {
    return (
        <div className="container-atualizacoes-imp">

            <div className="atualizacoes-imp-top">
                <p className="atualizacoes-imp-title">
                    Atualizações importantes
                </p>
            </div>

            <div className="atualizacoes-imp-cards">

                <div className="atualizacoes-imp-card">
                    <img className="paciente-photo" src={paciente1} alt="foto paciente" />

                    <div className="paciente-description-imp">
                        <p className="paciente-style">PACIENTE</p>
                        <p className="paciente-name-imp">Renata Augusto Ferreira</p>

                        <div className="paciente-status-text">
                            <p className="paciente-status1-green">COMPLETOU O TESTE:</p>
                            <p className="paciente-status2-green">TDAH CAB ADHD</p>
                        </div>

                        <p className="paciente-style">REALIZADO EM: 20/10/2023</p>
                    </div>
                </div>

                <div className="atualizacoes-imp-card">
                    <img className="paciente-photo" src={paciente2} alt="foto paciente" />

                    <div className="paciente-description-imp">
                        <p className="paciente-style">PACIENTE</p>
                        <p className="paciente-name-imp">Carlos Nobrega Baccio</p>

                        <div className="paciente-status-text">
                            <p className="paciente-status1-red">CANCELOU O TESTE:</p>
                            <p className="paciente-status2-red">TDAH CAB ADHD</p>
                        </div>

                        <p className="paciente-style">REALIZADO EM: 20/10/2023</p>
                    </div>
                </div>

                <div className="atualizacoes-imp-card-suelton">
                    <img className="paciente-photo" src={paciente3} alt="foto paciente" />

                    <div className="paciente-description-imp">
                        <p className="paciente-style">PACIENTE</p>
                        <p className="paciente-name-imp">Suelton A. Mellis</p>

                        <div className="paciente-status-text">
                            <p className="paciente-status1-red">CANCELOU O TESTE:</p>
                            <p className="paciente-status2-red">TDAH CAB ADHD</p>
                        </div>

                        <p className="paciente-style">REALIZADO EM: 20/10/2023</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AtualizacoesImportantes
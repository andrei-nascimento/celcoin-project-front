import React from "react";
import './InfosGerais.css';
import personIcon from '../../assets/imgs/person-icon.png';
import testeIcon from '../../assets/imgs/teste-icon.png';
import testeOkIcon from '../../assets/imgs/teste-ok-icon.png';
import testeCancelIcon from '../../assets/imgs/teste-cancel-icon.png';

function InfosGerais() {
    return (
        <div className="container-infos-gerais">

            <p className="infos-title">Informações Gerais</p>

            <div className="infos-cards">
            
                <div className="infos-card">
                    <div className="infos-basic">
                        <img className="card-icon" src={personIcon} alt="person icon" />
                        <div className="porcentagem-box-green">
                            <p className="porcentagem-text">+30%</p>
                        </div>
                    </div>
                    <p className="principal-number">26</p>
                    <p className="principal-text">Pacientes ativos</p>
                </div>

                <div className="infos-card">
                    <div className="infos-basic">
                        <img className="card-icon" src={testeIcon} alt="teste icon" />
                        <div className="porcentagem-box-red">
                            <p className="porcentagem-text">-10%</p>
                        </div>
                    </div>
                    <p className="principal-number">306</p>
                    <p className="principal-text">Testes realizados</p>
                </div>

                <div className="infos-card">
                    <div className="infos-basic">
                        <img className="card-icon" src={testeOkIcon} alt="person icon" />
                        <div className="porcentagem-box-green">
                            <p className="porcentagem-text">+30%</p>
                        </div>
                    </div>
                    <p className="principal-number">139</p>
                    <p className="principal-text">Testes concluídos</p>
                </div>

                <div className="infos-card">
                    <div className="infos-basic">
                        <img className="card-icon" src={testeCancelIcon} alt="person icon" />
                        <div className="porcentagem-box-red">
                            <p className="porcentagem-text">-3%</p>
                        </div>
                    </div>
                    <p className="principal-number">11</p>
                    <p className="principal-text">Testes cancelados</p>
                    </div>
                </div>

        </div>
    )
}

export default InfosGerais
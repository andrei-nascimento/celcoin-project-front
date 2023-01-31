import React from "react";
import './TodosPacientes.css';
import lupa from '../../assets/imgs/lupa.png';
import editIcon from '../../assets/imgs/edit.png';
import paciente1 from '../../assets/imgs/paciente-renata.png';
import paciente4 from '../../assets/imgs/paciente-leandro.png';
import paciente5 from '../../assets/imgs/paciente-kumori.png';

function TodosPacientes() {
    return (
        <div className="todos-pacientes-container">
            
            <p className="todos-pacientes-title">Todos os pacientes</p>

            <div className="busca-pacientes">

                <div className="busca-lista-pacientes">
                    <p className="busca-pacientes-title">Lista de Pacientes(36)</p>
                    <div className="busca-box">
                        <img className="lupa-icon" src={lupa} alt="lupa icon" />
                        <input className="busca-input" type="text" placeholder="Buscar Paciente..." />
                    </div>
                </div>

                <div className="busca-pacientes-cards">

                    <div className="busca-pacientes-card">

                        <div className="busca-pacientes-dados">
                            <img className="paciente-photo-list" src={paciente1} alt="foto paciente" />
                            <div className="busca-pacientes-dados-text">
                                <p className="paciente-name">Renata Augusto Ferreira</p>
                                <p className="paciente-diagnostico">DIAGNÓSTICO</p>
                                <p className="paciente-singularidade">TDAH CAB ADHD, Autismo</p>
                            </div>
                        </div>
                        
                        <div className="testes-realizados">
                            <p className="testes-realizados-number">3</p>
                            <p className="testes-realizados-text">Testes realizados</p>
                        </div>
                        <div className="testes-cancelados">
                            <p className="testes-cancelados-number">1</p>
                            <p className="testes-cancelados-text">Testes cancelados</p>
                        </div>
                        <div className="testes-pendentes">
                            <p className="testes-pendentes-number">1</p>
                            <p className="testes-pendentes-text">Testes pendentes</p>
                        </div>
                        <div className="edit-icon-box">
                            <img className="edit-icon" src={editIcon} alt="icone editar" />
                        </div>
                        <div className="btns-busca-paciente">
                            <button className="btn-enviar-novo-teste">ENVIAR NOVO TESTE</button>
                            <button className="btn-alterar-cadastro">ALTERAR CADASTRO</button>
                        </div>
                    </div>
                    
                    <div className="busca-pacientes-card">

                        <div className="busca-pacientes-dados">
                            <img className="paciente-photo-list" src={paciente4} alt="foto paciente" />
                            <div className="busca-pacientes-dados-text">
                                <p className="paciente-name">Leandro Motta Braga</p>
                                <p className="paciente-diagnostico">DIAGNÓSTICO</p>
                                <p className="paciente-singularidade">TDAH CAB ADHD, Autismo</p>
                            </div>
                        </div>
                        
                        <div className="testes-realizados">
                            <p className="testes-realizados-number">6</p>
                            <p className="testes-realizados-text">Testes realizados</p>
                        </div>
                        <div className="testes-cancelados">
                            <p className="testes-cancelados-number">0</p>
                            <p className="testes-cancelados-text">Testes cancelados</p>
                        </div>
                        <div className="testes-pendentes">
                            <p className="testes-pendentes-number">50</p>
                            <p className="testes-pendentes-text">Testes pendentes</p>
                        </div>
                        <div className="edit-icon-box">
                            <img className="edit-icon" src={editIcon} alt="icone editar" />
                        </div>
                        <div className="btns-busca-paciente">
                            <button className="btn-enviar-novo-teste">ENVIAR NOVO TESTE</button>
                            <button className="btn-alterar-cadastro">ALTERAR CADASTRO</button>
                        </div>
                    </div>

                    <div className="busca-pacientes-card">

                        <div className="busca-pacientes-dados">
                            <img className="paciente-photo-list" src={paciente5} alt="foto paciente" />
                            <div className="busca-pacientes-dados-text">
                                <p className="paciente-name">Kuromi Naori Kagasawa</p>
                                <p className="paciente-diagnostico">DIAGNÓSTICO</p>
                                <p className="paciente-singularidade">TDAH CAB ADHD, Autismo</p>
                            </div>
                        </div>
                        
                        <div className="testes-realizados">
                            <p className="testes-realizados-number">22</p>
                            <p className="testes-realizados-text">Testes realizados</p>
                        </div>
                        <div className="testes-cancelados">
                            <p className="testes-cancelados-number">0</p>
                            <p className="testes-cancelados-text">Testes cancelados</p>
                        </div>
                        <div className="testes-pendentes">
                            <p className="testes-pendentes-number">2</p>
                            <p className="testes-pendentes-text">Testes pendentes</p>
                        </div>
                        <div className="edit-icon-box">
                            <img className="edit-icon" src={editIcon} alt="icone editar" />
                        </div>
                        <div className="btns-busca-paciente">
                            <button className="btn-enviar-novo-teste">ENVIAR NOVO TESTE</button>
                            <button className="btn-alterar-cadastro">ALTERAR CADASTRO</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodosPacientes
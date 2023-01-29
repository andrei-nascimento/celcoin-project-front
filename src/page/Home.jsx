import React from "react";
import AtualizacoesImportantes from "../components/Atualizacoes/AtualizacoesImportantes";
import Historico from "../components/Historico/Historico";
import InfosGerais from "../components/InfosGerais/InfosGerais";
import Navbar from "../components/Navbar/Navbar";
import './Home.css'

function Home() {
    return (
        <div className="container-home">

            <div className="navbar">
                <Navbar />
            </div>

            <div className="infos-gerais">
                <InfosGerais />
            </div>

            <div className="historico">
                <Historico />
            </div>

            <div className="atualizacoes">
                <AtualizacoesImportantes />
            </div>

        </div>
    )
}

export default Home
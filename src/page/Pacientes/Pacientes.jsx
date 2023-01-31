import React from "react";
import AtualizacoesPacientes from "../../components/AtualizacoesPacientes/AtualizacoesPacientes";
import Navbar from "../../components/Navbar/Navbar";
import TodosPacientes from "../../components/TodosPacientes/TodosPacientes";
import './Pacientes.css'

function Pacientes() {
    return (
        <div className="container-pacientes">

            <Navbar />
            <AtualizacoesPacientes />
            <TodosPacientes />

        </div>
    )
}

export default Pacientes
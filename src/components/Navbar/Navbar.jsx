import React from "react";
import './Navbar.css';
import lupa from '../../assets/imgs/lupa.png';
import settings from '../../assets/imgs/settings.png';
import notification from '../../assets/imgs/bell.png';
import perfilPhoto from '../../assets/imgs/perfil-photo.png';
import appsIcon from '../../assets/imgs/apps-icon.png';
import sairIcon from '../../assets/imgs/sair.png';

function Navbar() {
    return (
        <div className="container-navbar">

            <div className="busca">
                <img className="lupa-icon" src={lupa} alt="lupa icon" />
                <input className="busca-input" type="text" placeholder="Busca..." />
            </div>

            <div className="navbar-icons">
                <img className="settings-icon" src={settings} alt="settings icon" />
                <img className="notification-icon" src={notification} alt="notification icon" />
            </div>

            <div className="perfil">
                <button className="btn-perfil">
                    <p className="perfil-text1">Olá,</p><p className="perfil-text2">Felipe</p>
                    <img className="perfil-photo" src={perfilPhoto} alt="perfil photo" />
                </button>
                <div className="dropdown-menu">
                    <a href="#">Minha conta</a>
                    <a className="borders-menu" href="#">Configurações</a>
                    <div className="logout-box">
                        <img className="logout-icon" src={sairIcon} alt="icone logout" />
                        <a className="logout-text" href="#">Sair</a>
                    </div>
                </div>
            </div>

            <div className="apps">
                <img className="apps-icon" src={appsIcon} alt="apps icon" />
            </div>

        </div>
    )
}

export default Navbar
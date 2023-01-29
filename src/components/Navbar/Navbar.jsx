import React from "react";
import './Navbar.css'
import lupa from '../../assets/imgs/lupa.png'
import settings from '../../assets/imgs/settings.png'
import notification from '../../assets/imgs/bell.png'
import perfilPhoto from '../../assets/imgs/perfil-photo.png' 
import appsIcon from '../../assets/imgs/apps-icon.png'

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
                <p className="perfil-text1">Olá,</p><p className="perfil-text2">Felipe</p>
                <img className="perfil-photo" src={perfilPhoto} alt="perfil photo" />
            </div>

            <div className="apps">
                <img className="apps-icon" src={appsIcon} alt="apps icon" />
            </div>

        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import './Menu.css'
import logo from '../../assets/imgs/jam_aperture.png'
import house from '../../assets/imgs/house.png'
import box from '../../assets/imgs/box-icon.png'
// import darkBox from '../../assets/imgs/dark-box.png'
import { Link } from 'react-router-dom'

function Menu () {
    const [isActive, setIsActive] = useState(true);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    return (
        <div className='container-menu'>
            <div className='logotipo'>
                <img className='logo-icon' src={logo} alt="logo icon" />
                <p className='logo-text1'>IDENT</p>
                <p className='logo-text2'>LOGO</p>
            </div>

            <div className='line'></div>

            <Link to='/' className='link'>
                <div className='dashboard'>
                    <div className='dashboard-button'>
                        <img className='home-icon' src={house} alt="home icon" />
                        <p className='home-text'>Dashboard</p>
                    </div>
                </div>
            </Link>
            
            <Link to='/pacientes' className='link'>
                <div className='pacientes'>
                    <div className='pacientes-button'>
                        <img className='pacientes-icon' src={box} alt="box icon" />
                        <p className='pacientes-text'>Pacientes</p>
                    </div>
                </div>
            </Link>

            <div className='testes'>
                <img className='box-icon' src={box} alt="box icon" />
                <p className='menu-text'>Testes</p>
            </div>

            <div className='config'>
                <img className='box-icon' src={box} alt="box icon" />
                <p className='menu-text'>Configurações</p>
            </div>
        </div>
    )
}

export default Menu
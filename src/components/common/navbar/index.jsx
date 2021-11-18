import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss'

import Logo from '../../../assets/Juguetirocky.jpeg'
import Carrito from '../../../assets/carrito.png'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center p-2 mb-2">
                    <div className="col ms-3">
                        <b>¡Bienvenido Manuel!</b>
                    </div>
                    <div className="col d-flex">
                        <img alt="Logo JuguetiRocky" className="mx-auto" src={Logo} height="80px" width="150px"/>
                    </div>
                    <div className="col text-end">
                        <img alt="Carrito Compra" src={Carrito}/>
                        1 articulo
                    </div>
                </div>
            </div>
            <div className="container-fluid border border-danger ">
                <nav className="navbar navbar-expand-lg navbar-dark mx-auto" id="inferior-navbar">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-3 " id="navbarNavDarkDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown ">
                                    <Link to="/" className="nav-link">INICIO</Link>
                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        CATEGORIAS
                                    </a>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item active" href="#">Preescolar</a></li>
                                        <li><a className="dropdown-item" href="#">Niñas</a></li>
                                        <li><a className="dropdown-item" href="#">Niños</a></li>
                                        <li><a className="dropdown-item" href="#">Mixtos</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">

                                    {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTOS
                                    </a> */}

                                    <Link to="/productos" className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTOS
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><Link to="/productos" className="dropdown-item">Bicicletas y triciclos</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Juegos de mesa</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Carros y pistas</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Didacticos</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Rompecabezas</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Montables</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Juguetes electronicos</Link></li>
                                        <li><Link to="/productos" className="dropdown-item">Cocinas</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        MARCAS
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Mattel</a></li>
                                        <li><a className="dropdown-item" href="#">Hasbro</a></li>
                                        <li><a className="dropdown-item" href="#">Lego</a></li>
                                        <li><a className="dropdown-item" href="#">PlayMovil</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
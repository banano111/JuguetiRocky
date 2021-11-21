import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.scss'

import Logo from '../../../assets/Juguetirocky.jpeg'
import Carrito from '../../../assets/carrito.png'
import UserContext from '../../../context/UserContext';

const Header = () => {

    const { user, login, logout, isUserAuth } = useContext(UserContext)

    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center p-2 mb-2">
                    {
                        isUserAuth
                            ? <div className="col ms-3">
                                <b>¡Bienvenido {user.name}!</b>
                                <button className="btn btn-danger ms-3" onClick={logout}>Logout</button>
                            </div>
                            : <div className="col ms-3">
                                <Link to="/login" className="btn color-jugueti me-4">Iniciar Sesión</Link>
                                <Link to="/login/register" className="btn color-jugueti">Registrarse</Link>
                            </div>
                    }
                    <div className="col d-flex">
                        <img alt="Logo JuguetiRocky" className="mx-auto" src={Logo} height="80px" width="150px" />
                    </div>
                    <div className="col text-end">
                        <img type="button" className="btn btn-primary bg-transparent border-white" data-bs-toggle="modal"
                            data-bs-target="#carrito" alt="Carrito Compra" src={Carrito} />
                    
                        <div className="modal fade" id="carrito" tabIndex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Carrito de compras</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <ul className="list-group mb-3">
                                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                                <div>
                                                    <h6 className="my-0">
                                                        <p>Jijiji jajaja</p>
                                                    </h6>
                                                    <small className="text-muted">
                                                        <p>Breve descripción</p>
                                                    </small>
                                                </div>
                                                <span className="text-muted">
                                                    <p>$ 120</p>
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                                <div>
                                                    <h6 className="my-0">
                                                        <p>Torre Stark</p>
                                                    </h6>
                                                    <small className="text-muted">
                                                        <p>Breve descripción</p>
                                                    </small>
                                                </div>
                                                <span className="text-muted">
                                                    <p>$ 8000</p>
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                                <div>
                                                    <h6 className="my-0">
                                                        <p>Iron Man Original</p>
                                                    </h6>
                                                    <small className="text-muted">
                                                        <p>Breve descripción</p>
                                                    </small>
                                                </div>
                                                <span className="text-muted">
                                                    <p>$ 550</p>
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>
                                                    <p>Total: </p>
                                                </span>
                                                <strong>
                                                    <p>$ 8720</p>
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer mx-auto w-50">
                                        <button type="button" className="btn btn-primary border-white bg-jry"
                                            >Cancelar</button>
                                        <button type="button" className="btn btn-primary border-white bg-jry"
                                            >Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        1 articulo
                    </div>
                </div>
            </div>
            <div className="container-fluid border border-danger">
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
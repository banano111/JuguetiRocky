import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.scss'

import Logo from '../../../assets/Juguetirocky.jpeg'
import Carrito from '../../../assets/carrito.png'
import UserContext from '../../../context/UserContext';
import ShopContext from '../../../context/ShopContext';

const Header = () => {

    const { user, login, logout, isUserAuth } = useContext(UserContext)

    const { shoppingProd, productContext, deleteProduct } = useContext(ShopContext)

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

                        <ModalShop />

                        {shoppingProd > 0
                            ? <p>{shoppingProd} Productos</p>
                            : <p></p>
                        }
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

const ModalShop = () => {

    const { shoppingProd, productContext, totalShopping, deleteProduct } = useContext(ShopContext)

    console.log(productContext)

    return (
        <>
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
                            {
                                shoppingProd > 0
                                    ?
                                        <ul className="list-group mb-3">
                                            {
                                                productContext.map((productCart) => (
                                                    <ShopProduct
                                                        productCart={productCart}
                                                    />
                                                ))
                                            }
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span><p>Total: </p></span>
                                                <strong><p>${totalShopping}</p></strong>
                                            </li>
                                        </ul>
                                    : <p className="text-center mt-2">Lo sentimos no hay productos en tu carrito</p>

                            }
                        </div>
                        <div className="modal-footer mx-auto w-50">
                            <button type="button" className="btn btn-primary border-white bg-jry" onClick={() => deleteProduct()}>
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-primary border-white bg-jry"
                            >Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ShopProduct = ({ productCart }) => (
    <>
        <li className="list-group-item d-flex justify-content-between lh-sm" key={productCart.id_producto}>
            <div className="row">
                <div className="col-10 text-start">
                    <h6>
                        {productCart.Nombre}
                    </h6>
                    <small className="text-muted">
                        {productCart.Descripcion}
                    </small>
                </div>
                <div className="col"></div>

            </div>
            <span className="text-muted">
                <p>${productCart.CostoProducto}</p>
            </span>
        </li>
    </>
)

export default Header;
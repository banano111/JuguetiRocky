import React from "react";

import Logo from '../../../assets/Juguetirocky.jpeg';
import FondoDinos from '../../../assets/fondoDinos.png';
import Barbie from '../../../assets/Barbie.png';

import "./index.scss";


const StartPage = () => {
    return (
        <>
            {/* <!--INICIO SLIDES--> */}
            <div className="container-fluid" id="slide1">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={FondoDinos} className="d-block w-100" alt="..." />
                            <div className ="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={Barbie} className="d-block w-100" alt="..." />
                            <div className ="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={FondoDinos} className="d-block w-100" alt="..." />
                            <div className ="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!--FINAL SLIDES--> */}
            
            {/* <!--INICIO CARDS--> */}
            <div className="container-fluid row row-cols-1 row-cols-md-4 g-4 mx-auto" Id="ContenedorIni">
                <div className="col mt-5">
                    <div className="card border border-danger style-18rem">
                        <img src={Logo} className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Iron man</h5>
                        </div>
                        <div className ="card-body">
                        <a>$599</a>
                        </div>
                        <div className ="card-body">
                        <a href="#" className ="card-link link-deco">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="card border border-danger style-18rem">
                        <img src={Logo} className="card-img-top" alt="..." />
                        <div className ="card-body">
                        <h5 className ="card-title">Iron man</h5>
                        </div>
                        <div className ="card-body">
                        <a>$599</a>
                        </div>
                        <div className ="card-body">
                        <a href="#" className ="card-link link-deco">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="card border border-danger style-18rem">
                        <img src={Logo} className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Iron man</h5>
                        </div>
                        <div className ="card-body">
                        <a>$599</a>
                        </div>
                        <div className ="card-body">
                        <a href="#" className ="card-link link-deco">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="card border border-danger style-18rem">
                        <img src={Logo} className="card-img-top" alt="..."/>
                        <div className ="card-body">
                            <h5 className ="card-title">Iron man</h5>
                        </div>
                        <div className ="card-body">
                            <a>$599</a>
                        </div>
                        <div className ="card-body">
                            <a href="#" className ="card-link link-deco">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--FIN CARDS--> */}
            {/* <!--INICIO COLECCIONES--> */}
            <div className="container mb-2" >
                <h1 className="mb-2">COLECCIONES</h1>
                <div className="row">
                    <div className="col-6">
                        <img href="#" src={Logo} className="rounded mx-auto coleccion-600" width="600px" height="300px" alt="..."/>
                    </div>
                    <div className="col-3">
                        <img href="#" src={Logo} className="rounded mx-auto coleccion-300" alt="..."/>
                        <img href="#" src={Logo} className ="rounded mx-auto coleccion-300" alt="..."/>
                    </div>
                    <div className ="col-3">
                        <img href="#" src={Logo} className ="rounded mx-auto coleccion-300" alt="..."/>
                        <img href="#" src={Logo} className ="rounded mx-auto coleccion-300" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!--FIN COLECCIONES--> */}
        </>
    );
};

export default StartPage;
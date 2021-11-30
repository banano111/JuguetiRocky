import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';

import FondoDinos from '../../../assets/fondoDinos.png';
import Barbie from '../../../assets/Barbie.png';
import Promo2x1 from '../../../assets/Promo2x1.png';
import Promo1 from '../../../assets/promo1.png';
import Promo2 from '../../../assets/promo2.png';

import "./index.scss";

import { most_wanted } from "../../../services/products";
import ShopContext from "../../../context/ShopContext";


const StartPage = () => {

    const [hasError, setHasError] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [mostWantedProducts, setMostWantedProducts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const mwproducts = await most_wanted();
            console.log(mwproducts)
            if (!mwproducts.hasError) {
                setMostWantedProducts(mwproducts)
                setIsReady(true)
                setHasError(false)
            }
            else {
                setMostWantedProducts({
                    "hasError": true,
                    "error": mwproducts.error
                })
                setHasError(true)
                setIsReady(false)
            }
        }
        fetchData()
    }, []);

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
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={Barbie} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={FondoDinos} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
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

            <div className="container">
                <h1 className="mt-5 mb-2">Más Buscados</h1>
            </div>

            {
                isReady
                    ?   <MostWantedCards
                            productsmw={mostWantedProducts}
                        />
                    :   hasError
                            ? <ErrorComponent/>
                            : <LoadingComponent/>
            }

            {/* <!--FIN CARDS--> */}
            {/* <!--INICIO COLECCIONES--> */}
            <div className="container mb-2" >
                <h1 className="mb-2">Promociones</h1>
                <div className="row mt-4 justify-content-between">
                    <div className="col-6 ms-5 me-4">
                        <img src={Promo2x1} className="rounded coleccion-600" alt="..." />
                    </div>
                    <div className="col ms-5">
                        <img src={Promo1} className="rounded mx-auto d-block coleccion-300 mb-2" alt="..." />
                        <img src={Promo2} className="rounded mx-auto d-block coleccion-300" alt="..." />
                    </div>
                </div>
            </div>
            {/* <!--FIN COLECCIONES--> */}
        </>
    );
};

const LoadingComponent = () => (
    <>
        <p>Cargando ...</p>
        <img src="https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt=""/>
    </>
);

const ErrorComponent = () => (
    <>
        <p>Ups! Algo falló al traer las películas</p>
    </>
);

const MostWantedCards = (props) => (
    <>
        <div className="container-fluid row row-cols-1 row-cols-md-4 g-4 mx-auto" id="ContenedorIni">
            {
                props.productsmw.map((mostwantedprod) => (
                    <IndividualMostWantedCards
                        mostwantedprod={mostwantedprod}
                        key={mostwantedprod.id_producto}
                    />
                ))
            }
        </div>
    </>

)

const IndividualMostWantedCards = ({ mostwantedprod }) => {

    const { productContext, newProductContext, deleteProduct  } = useContext(ShopContext)

    return(
        <>
            <div className="col mt-4" key={mostwantedprod.id_producto}>
                <div className="card border border-danger style-18rem">
                    <Link to={`/productos/${mostwantedprod.id_producto}`}>
                        <img src={mostwantedprod.Imagen} className="p-4 card-img-top product-img" alt="..." />
                    </Link>
                    <div className="card-body mt-2">
                        <h5 className="card-title">{mostwantedprod.Nombre}</h5>
                        <p className="fw-bold mt-4">${mostwantedprod.CostoProducto}</p>
                        <button className="btn color-jugueti mb-3 p-1" onClick={() => newProductContext(mostwantedprod, mostwantedprod.CostoProducto)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default StartPage;
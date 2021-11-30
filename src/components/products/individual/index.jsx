import React, { useState, useEffect, useContext } from "react";

import { useParams } from 'react-router-dom';

import Logo from '../../../assets/Juguetirocky.jpeg';
import ShopContext from "../../../context/ShopContext";
import { ind_product } from "../../../services/products";

const IndividualProduct = () => {

    const params = useParams()

    const [hasError, setHasError] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [indProduct, setIndProduct] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const productIndividual = await ind_product(params.product_id);
            console.log(productIndividual)
            if (!productIndividual.hasError) {
                setIndProduct(productIndividual)
                setIsReady(true)
                setHasError(false)
            }
            else {
                setIndProduct({
                    "hasError": true,
                    "error": productIndividual.error
                })
                setHasError(true)
                setIsReady(false)
            }
        }
        fetchData()
    }, []);

    return (
        <>
            {
                isReady
                    ? <ProductCard
                        indProduct={indProduct}
                    />
                    : null
            }
        </>
    );
};

const ProductCard = ({indProduct}) => {

    const { productContext, newProductContext, deleteProduct  } = useContext(ShopContext)
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 text-uppercase"><p>PRODUCTOS > {indProduct.Marca} > {indProduct.Categoria}</p></div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h1>{indProduct.Nombre}</h1>
                        <i className="bi bi-star-fill text-warning"><i class="bi bi-star-fill text-warning"></i></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill"></i><span> (224)</span>
                        <p className="mt-4 text-break fs-5">{indProduct.Descripcion}</p>
                        <p className="mt-4"><b>PRECIO</b></p>
                        <h3 id="ColorLogo">${indProduct.CostoProducto}</h3>
                        <button className="btn color-jugueti mt-2" onClick={() => newProductContext(indProduct, indProduct.CostoProducto)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </button>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src={indProduct.Imagen}/>
                    </div>
                </div>
            </div>
        </>
    )


}


export default IndividualProduct;
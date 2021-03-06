import React, { useEffect, useState, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Logo from '../../../assets/Juguetirocky.jpeg';
import ShopContext from "../../../context/ShopContext";
import { getProducts } from "../../../services";
import "./index.scss";

const Categories = () => {

    const [hasError, setHasError] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [totalProducts, setTotalProducts] = useState(null)
    let [searchParams, setSearchParams] = useSearchParams();

    var marca = searchParams.get("marca")
    var categoria = searchParams.get("categoria")
    var query = null

    if (marca !== null) {
        query = {
            "tipo": "marca",
            "valor": marca
        }
    }

    else if (categoria !== null) {
        query = {
            "tipo": "categoria",
            "valor": categoria
        }
    }

    else {
        query = null
    }

    useEffect(() => {
        const fetchData = async () => {
            const allProducts = await getProducts()
            console.log(allProducts)
            if (!allProducts.hasError) {
                setTotalProducts(allProducts)
                setIsReady(true)
                setHasError(false)
            }
            else {
                setTotalProducts({
                    "hasError": true,
                    "error": allProducts.error
                })
                setHasError(true)
                setIsReady(false)
            }
        }
        fetchData()
    }, []);

    return (
        <>
            {/* <!--INICIO CARDS--> */}
            <div className="container-fluid row row-cols-1 row-cols-md-4 g-4 mt-4 mx-auto" id="contenedor">
                {
                    isReady
                        ? <RenderAllProducts
                            products={totalProducts}
                            key={totalProducts.id_producto}
                            query={query}
                        />
                        : null
                }
            </div>
        </>
    );
};


const RenderAllProducts = (props) => (
    <>
        {         
            props.query == null
                ?   props.products.map((product) => (
                        <ProductCard
                            product={product}
                            key={product.id_producto}
                        />
                    ))
                :   props.query.tipo == "categoria"
                        ?   props.products.filter(prod => prod.Categoria == props.query.valor).map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id_producto}
                                />
                            ))
                        :   props.products.filter(prod => prod.Marca == props.query.valor).map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product.id_producto}
                                />
                            ))
            }
    </>
)



const ProductCard = ({ product }) => {

    const { productContext, newProductContext, deleteProduct } = useContext(ShopContext)

    return (
        <>
            <div className="col" id="margenCol">
                <div className="card border border-danger style-18rem" id="cardSize">
                    <Link to={`/productos/${product.id_producto}`}>
                        <img src={product.Imagen} className="p-4 card-img-top product-img" alt="..." />
                    </Link>
                    <div className="card-body mt-2">
                        <h5 className="card-title text-center">{product.Nombre}</h5>
                        <p className="fw-bold mt-4 text-center">${product.CostoProducto}</p>
                    </div>
                    <div className="mx-auto mb-3 p-1">
                        <button className="btn color-jugueti" onClick={() => newProductContext(product, product.CostoProducto)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;
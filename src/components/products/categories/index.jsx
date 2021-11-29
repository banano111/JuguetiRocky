import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../assets/Juguetirocky.jpeg';
import ShopContext from "../../../context/ShopContext";
import { getProducts } from "../../../services";
import "./index.scss";

const Categories = () => {

    const [hasError, setHasError] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [totalProducts, setTotalProducts] = useState(null)

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
                        ?   <RenderAllProducts
                                products={totalProducts}
                            />
                        :   null
                }
            </div>
            <div className="listlocator listlocatorbottom clear" >
                <div id="emlistpager" className="pager">
                    <div className="clear text-center mt-5" >
                        <a href="#" className="page active" id="numerosPag" >1</a>
                        <a href="#" className="page" id="numerosPag">2</a>
                        <a href="#" className="page" id="numerosPag">3</a>
                        <a href="#" className="page" id="numerosPag">4</a>
                        <a href="#" className="page" id="numerosPag">5</a>
                        <span id="numerosPag">...</span>
                        <a href="#" className="page" id="numerosPag">20</a>
                    </div>
                </div>
            </div>
        </>
    );
};


const RenderAllProducts = (props) => (
    <>
        {
            props.products.map((product) => (
                <ProductCard
                    product={product}
                />
            ))
        }
    </>
)



const ProductCard = ({product}) => {
    
    const { productContext, newProductContext, deleteProduct  } = useContext(ShopContext)

    return(
        <>
            <div className="col " id="margenCol">
                <div className="card border border-danger" id="cardSize">
                    <Link to={`/productos/${product.id_producto}`}>
                        <img src={product.Imagen} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{product.Nombre}</h5>
                    </div>
                    <div className="card-body">
                        <a>${product.CostoProducto}</a>
                    </div>
                    <div className="card-body mx-auto">
                        <button className="btn color-jugueti" onClick={() => newProductContext(product, product.CostoProducto)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;
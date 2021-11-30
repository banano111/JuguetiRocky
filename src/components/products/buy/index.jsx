import React, { useState, useContext } from "react";
import ShopContext from "../../../context/ShopContext";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./index.scss";
import { create_sale, get_user_sales } from "../../../services";
import UserContext from "../../../context/UserContext";

const BuyPage = () => {

    const { shoppingProd, productContext, totalShopping, deleteProduct } = useContext(ShopContext)
    
    return (
        <>  
            {
                shoppingProd > 0
                    ?   <PantallaCarrito 
                            totalShopping={totalShopping}
                            productContext={productContext}
                            deleteProduct={deleteProduct}
                        />
                    : <p>No hay Productos para comprar</p>
            }
        </>
    );
};

const PantallaCarrito = (props) => {

    let navigate = useNavigate()

    const { user, isUserAuth } = useContext(UserContext)

    const generateSale = async (total) => {
        
        if(!user){
            toast.error("Debes Iniciar Sesión Antes de Comprar")
            setTimeout(() => { navigate("/login"); }, 500);
        }

        else{

            var data = {
                "user_id": user.user_id,
                "total_sale": total,
                "ship_status": "En Progreso"
            }
            
            try {
    
                console.log("Intentando la venta de " + data.user_id + " con total de " + data.total_sale)
    
                const result = await create_sale(data)
    
                if(!result.hasError){
    
                    if(result.sale_created){
                        console.log(result)
                        toast.success("Venta Generada Exitosamente, En breve Recibirá la guia de envio por correo")
                        props.deleteProduct()
                        setTimeout(() => { navigate("/user"); }, 500);
                    }
    
                    else{
                        console.log(result)
                        toast.error("No se ha podido generar la venta, intente de nuevo")
                    }
                }
                
            } catch (error) {
                toast.error("Error en el Servidor")
            }   
        }
        
        
    }

    return(

        <>
            <div className="container mx-auto mt-5 w-50">
                <ul className="list-group mb-3">
                    <RenderProds
                        productContext={props.productContext}
                    />
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <h5>Total: </h5>
                        </span>
                        <strong>
                            <p>${props.totalShopping}</p>
                        </strong>
                    </li>
                    <div className="col-12 d-flex mt-5">
                        <button type="submit" className="mx-auto btn w-25 text-white color-jg" onClick={() => props.deleteProduct()}>
                            Limpiar
                        </button>
                        <button type="submit" className="mx-auto btn w-25 text-white color-jg" onClick={() => generateSale(props.totalShopping)}>
                            Comprar
                        </button>
                    </div>
                </ul>
            </div>
        </>
    )
}

const RenderProds = ({productContext}) => (
    <>
        {
            productContext.map((product) => (
                <IndividualBuy
                    product={product}
                    key={product.id_producto}
                />
            ))
        }

    </>
)

const IndividualBuy = ({product}) => {

    return (
        <>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className="row">
                    <div className="col-2 mx-auto p-2 ms-2 me-4">
                        <Link to={`/productos/${product.id_producto}`}>
                            <img src={product.Imagen} className="img-fluid"/>
                        </Link>
                    </div>
                    <div className="col">
                        <h6 className="my-0">
                            <p>{product.Nombre}</p>
                        </h6>
                        <small className="text-muted">
                            <p>{product.Descripcion}</p>
                        </small>
                    </div>
                </div>
                <div className="col ms-5 d-flex align-items-center">
                    <span className="text-muted">
                        <p>${product.CostoProducto}</p>
                    </span>
                </div>
            </li>
        </>
    )

}


export default BuyPage;
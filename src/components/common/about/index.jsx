import React from "react";
import './index.scss'
import ImagenJugueteria from '../../../assets/jugueteria.png'

const AboutUs = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center p-5">¿Quienes somos?</h1>
            </div>
            <div className="container">
                <div className="row p-3">
                    <div className="col-6">
                        <p className="text-center">
                            Somos una empresa juguetera <strong>100% mexicana</strong> con ganas hacer
                            sonreír a chicos y
                            grandes, fundada en el 2021
                        </p>
                        <hr/>
                        <p className ="text-center">
                            Nuestras ventas son 100% online.Nuestro concepto de tienda se enfoca en la
                            calidad, variedad
                            y atención personalizada a los clientes, ellos son lo más importante para nosotros, por eso
                            trabajamos día a día
                            para que nuestros clientes se sientan cómodos, comprensivos, solidarios y acogedores en todas
                            nuestras
                            sucursales.
                        </p>
                        <hr/>
                        <h5 className ="text-center">MISION</h5>
                        <p className ="text-center">Hacer sonreír a niños y padres, brindar servicios de alta calidad para satisfacer
                        a todos nuestros clientes, y convertirnos en una empresa leal, eficiente y responsable.</p>
                        <hr/>
                        <h5 className ="text-center">VISION</h5>
                        <p className ="text-center">Continuar aumentando la participación en el mercado del juguete y convertirnos en
                        una empresa líder, apoyándose en el talento y desarrollo de los colaboradores para darle mayor valor
                        económico a la empresa.</p>
                    </div>
                    <div className ="col-6">
                        <img className ="ms-5 img-fluid mx-auto" src={ImagenJugueteria} width="80%" height="50%"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
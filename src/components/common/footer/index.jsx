import React from "react";

import './index.scss'

import Logo from '../../../assets/Juguetirocky.png'

const Footer = () => {
    return (
        <>
            {/* <!--INICIO FOOTER--> */}
            <footer className="pt-4 my-md-5 pt-md-5 border-top" id="FooterSize" >
                <div className="row">
                    <div className="col-12 col-md">
                        <h5>JuguetiRocky</h5>
                        <img className="mb-2" src={Logo} alt="" width="100px" height="50px"/>
                        <small className ="d-block mb-3 text-muted">© 2021–2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Sobre nosotros</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">¿Quienes somos?</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Servicio al cliente</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Garantías</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Preventas</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Legales</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Politícas de privacidad</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* <!--FIN FOOTER--> */}
        </>
    );
};

export default Footer;

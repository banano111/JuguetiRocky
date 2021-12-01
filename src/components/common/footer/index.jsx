import React from "react";
import { Link } from 'react-router-dom';

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
                            <li className="mb-1"><Link to="/juguetirocky" className="link-secondary text-decoration-none">¿Quienes somos?</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Servicio al cliente</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1 link-secondary">Garantías: +52 1 5520889010</li>
                            <li className="mb-1 link-secondary">Preventas: preventas@jrocky.mx</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Legales</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                {/* <a className="link-secondary text-decoration-none" href="https://www.gob.mx/se/acciones-y-programas/del-aviso-de-privacidad-integral-de-la-secretaria-de-economia?state=published">
                                    Politícas de privacidad
                                </a> */}
                                <Link to="/avisoPrivacidad" className="link-secondary text-decoration-none">
                                    Aviso de Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* <!--FIN FOOTER--> */}
        </>
    );
};

export default Footer;

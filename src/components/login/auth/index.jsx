import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import UserContext from '../../../context/UserContext';
import { login_auth } from '../../../services';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {

    const { user, login, logout } = useContext(UserContext)

    let navigate = useNavigate()

    const [userLoginData, setUserLoginData] = useState({
        "user": {
            'email': '',
            'password': ''
        }
    })

    const handleInputChange = (event) => {
        setUserLoginData({
            ...userLoginData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Enviando Datos de: " + userLoginData.email)

        try {
            const result = await login_auth(userLoginData)

            if (!result.hasError) {

                if (result.is_auth) {
                    console.log(result)
                    login(result)
                    toast.success("¡Bienvenido " + result.name + " " + result.last_name + "!")
                    setTimeout(() => { navigate("/"); }, 500);
                    
                }

                else {
                    console.log(result)
                    toast.error("Error al Iniciar Sesion, Verifica tus Datos")
                }

            }

            else {
                toast.error("Error al intentar Iniciar Sesion")
                console.log(result)
            }

        } catch (error) {
            toast.error("Error En El Servidor de Inicio de Sesion")
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card w-50 mx-auto mb-5">
                    <div className="card-header">
                        Inicio de Sesión
                    </div>
                    <div className="card-body m-2">
                        <form className="row row-cols-2 g-4 justify-content-around" onSubmit={handleSubmit}>
                            <div className="col-5">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleInputChange}/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="inputPassword4" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="inputPassword4" name="password" onChange={handleInputChange}/>
                            </div>
                            <div className="col-12 d-grid mt-5">
                                <button type="submit" className="mx-auto btn w-50 text-white login-button">Iniciar Sesión</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthForm;
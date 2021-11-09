import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { login_auth } from '../../../services';
import './index.scss';

const AuthForm = () => {

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
            
            if(!result.hasError){
                
                if(result.is_auth){
                    console.log(result)
                    toast.success("¡Bienvenido " + result.name + " " + result.last_name + "!")
                }

                else{
                    console.log(result)
                    toast.error("Error al Iniciar Sesion, Verifica tus Datos")
                }
            
            }
        
            else{
                toast.error("Error al intentar Iniciar Sesion")
                console.log(result)
            }
    
        } catch (error) {
            toast.error("Error En El Servidor de Inicio de Sesion")
        }
    }

    return (
        <>
            <div class="container">
                <form class="row g-2 row-form" onSubmit={handleSubmit}>
                    <div class="row g-2">
                        <div class="col-md-5 p-1 ancho-25">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" name="email" onChange={handleInputChange} />
                        </div>
                        <div class="col-md-5 p-1 ancho-25">
                            <label for="inputPassword4" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="inputPassword4" name="password" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div class="col-12 p-1 login-button">
                        <button type="submit" class="btn btn-primary login-button">
                            Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AuthForm;
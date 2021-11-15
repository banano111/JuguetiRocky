import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { register_user } from '../../../services';
import './index.scss';

const RegisterForm = () => {

    const [newUserData, setnewUserData] = useState({
        "new_user": {            
            'name': '',
            'last_name': '',
            'email': '',
            'password': ''
        }
    })

    const handleInputChange = (event) => {
        setnewUserData({
            ...newUserData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Creacion de Datos de: " + newUserData.name + " " + newUserData.last_name)

        try {

            const result = await register_user(newUserData)

            if(!result.hasError){

                if(result.user_created){
                    console.log(result)
                    toast.success("Usuario Creado Exitosamente")
                }

                else{
                    console.log(result)
                    toast.error("No se ha podido crear el usuario")
                }
            }
            
        } catch (error) {
            toast.error("Error en el Servidor")
        }
    }

    return (
        <>
            <div class="container">
                <form class="row g-2 row-form" onSubmit={handleSubmit}>
                    <div class="row g-2">
                        <div class="col-md-5 p-1 ancho-25">
                            <label for="first_name" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="first_name" aria-label="first_name" name="name" onChange={handleInputChange} />
                        </div>
                        <div class="col-md-5 p-1 ancho-25">
                            <label for="last_name" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="last_name" aria-label="Last name" name="last_name" onChange={handleInputChange} />
                        </div>
                    </div>
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

export default RegisterForm;
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
        console.log(newUserData)

        try {

            const result = await register_user(newUserData)

            if (!result.hasError) {

                if (result.user_created) {
                    console.log(result)
                    toast.success("Usuario Creado Exitosamente")
                }

                else {
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
            <div className="container mt-5">
                <div className="card w-50 mx-auto">
                    <div className="card-header">
                        Crear Nuevo Usuario
                    </div>
                    <div className="card-body m-2">
                        <form className="row row-cols-2 g-4 justify-content-around" onSubmit={handleSubmit}>
                            <div className="col-5">
                                <label for="inputEmail4" className="form-label">Nombre</label>
                                <input type="text" name="name" className="form-control" id="inputEmail4" onChange={handleInputChange} required/>
                            </div>
                            <div className="col-5">
                                <label for="inputPassword4" className="form-label">Apellido</label>
                                <input type="text" name="last_name" className="form-control" id="inputPassword4" onChange={handleInputChange} required/>
                            </div>
                            <div className="col-5">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="inputEmail4" onChange={handleInputChange} required/>
                            </div>
                            <div className="col-5">
                                <label for="inputPassword4" className="form-label">Contraseña</label>
                                <input type="password" name="password" className="form-control" id="inputPassword4"onChange={handleInputChange} required/>
                            </div>
                            <div className="col-12 d-grid mt-5">
                                <button type="submit" className="mx-auto btn w-50 text-white login-button">Crear Usuario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;
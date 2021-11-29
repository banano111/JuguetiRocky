import axios from 'axios';

export const login_auth = async (data) => {
    try {
        const response = await axios.post("https://juguetirocky-api.herokuapp.com/login/auth", data)
        if (response.data){
            return response.data
        }

    } catch (error) {
        return{
            hasError: true,
            error
        }
    }
}

export const register_user = async (data) => {
    try {
        const response = await axios.post("https://juguetirocky-api.herokuapp.com/login/register", data)
        if (response.data){
            return response.data
        }

    } catch (error) {
        return{
            hasError: true,
            error
        }
    }
}
import axios from 'axios';
import { API_URL } from '../../consts'

export const login_auth = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/login/auth`, data)
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
        const response = await axios.post(`${API_URL}/login/register`, data)
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
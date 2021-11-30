import axios from 'axios';
import { API_URL } from '../../consts'

export const create_sale = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/sales/new_sale`, data)
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

export const get_user_sales = async (user_id) => {
    
    try {
        const response = await axios.get(`${API_URL}/sales/user/${user_id}`)
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
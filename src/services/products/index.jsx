import axios from 'axios';
import { API_URL } from '../../consts'

export const most_wanted = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/mostwanted`)
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

export const ind_product = async (data) => {

    try {
        const response = await axios.get(`${API_URL}/products/${data}`)
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

export const getProducts = async () => {
    
    try {
        const response = await axios.get(`${API_URL}/products/`)
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

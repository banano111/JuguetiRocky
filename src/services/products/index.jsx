import axios from 'axios';

export const most_wanted = async () => {
    try {
        const response = await axios.get("https://juguetirocky-api.herokuapp.com/products/mostwanted")
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

    const url = "https://juguetirocky-api.herokuapp.com/products/" + data

    console.log(url)

    try {
        const response = await axios.get(url)
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

    const url = "https://juguetirocky-api.herokuapp.com/products/"

    console.log(url)

    try {
        const response = await axios.get(url)
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

import axios from 'axios';

export const create_sale = async (data) => {
    try {
        const response = await axios.post("https://juguetirocky-api.herokuapp.com/sales/new_sale", data)
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
    
   var url_api = "https://juguetirocky-api.herokuapp.com/sales/user/" + user_id
    
    try {
        const response = await axios.get(url_api)
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
import axios from 'axios'
import config from '../config'

export async function placeOrder(order) {
    const token = sessionStorage.getItem('token');
    const response = await axios.post(`${config.url}/orders`, order,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data

}
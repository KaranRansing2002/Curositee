import axios from 'axios'
import config from '../config'

export async function placeOrder(order) {

    const response = await axios.post(`${config.url}/orders`, order)
    return response.data

}
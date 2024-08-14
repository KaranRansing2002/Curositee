import axios from 'axios'
import config from '../config'

export async function addproduct(product) {

    const response = await axios.post(`${config.url}/product/addproduct`, product)
    return response.data

  }
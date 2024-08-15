import axios from 'axios'
import config from '../config'

export async function addproduct(product) {

    const response = await axios.post(`${config.url}/product/addproduct`, product)
    return response.data

}

export async function getProductsByVendor(userId) {

    const response = await axios.get(`${config.url}/product/${userId}`)
    return response.data

}

export async function deleteProduct(pvid) {

    const response = await axios.delete(`${config.url}/product/${pvid}`)
    return response.data

}

export async function updateStock(imgid,stock) {

    const response = await axios.patch(`${config.url}/product/update`,{imgid,stock});
    return response.data

}
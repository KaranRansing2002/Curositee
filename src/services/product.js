import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '@/App'
import config from '../config'

export async function addproduct(product) {
    const token = sessionStorage.getItem('token');
    const response = await axios.post(`${config.url}/product/addproduct`, product,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data

}

export async function getProductsByVendor(userId) {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${config.url}/product/${userId}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data

}

export async function deleteProduct(pvid) {
    const token = sessionStorage.getItem('token');
    const response = await axios.delete(`${config.url}/product/${pvid}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data

}

export async function updateStock(imgid,stock) {
    const token = sessionStorage.getItem('token');
    const response = await axios.patch(`${config.url}/product/update`,{imgid,stock},{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data

}

export async function productDiscription(index) {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`${config.url}/productDetails?imgid=${index}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};
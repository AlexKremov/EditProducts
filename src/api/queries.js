import axios from './axios';

export const getProducts = () => axios.get('/products');
export const getProductById = (id) => axios.get(`/products/${id}`);
export const putProduct = (id, product) => axios.put(`/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`/products/${id}`);

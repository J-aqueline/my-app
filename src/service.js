import axios from "axios";

const API_URL_BASE = 'https://controle-estoque-jaque.herokuapp.com';

const basicFetch = async (endpoint) => {
    const url = `${API_URL_BASE}${endpoint}`.substring(0, 45) + `/${endpoint}`
    const req = await axios.get(url);
    return req.data;
}

const basicPost = async (endpoint,obj) => {
     await axios.post(`${API_URL_BASE}${endpoint}`,obj);
}

const basicDelete = async (endpoint) => {
    await axios.delete(`${API_URL_BASE}${endpoint}`);
}

const getAllItem = async() => {
    return await basicFetch('item')
} 

const getItemBySubstring = async(substring) => {
    return await basicFetch(`item/${substring}`)
}

const getAllCategoria = async() => {
    return await basicFetch('categoria')
}

const getCategoriaBySubstring = async(substring) => {
    return await basicFetch(`categoria/${substring}`)
}

const postItem = async(item) => {
    return await basicPost('item',item)
}
const deleteItem = async(id) => {
    return await basicDelete('item/'+id)
}


export{
    getAllItem,
    getAllCategoria,
    getItemBySubstring,
    getCategoriaBySubstring,
    postItem,
    deleteItem
}
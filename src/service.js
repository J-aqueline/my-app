import axios from "axios";

const API_URL_BASE = 'http://localhost:8080';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const basicPost = async (endpoint,obj) => {
     await axios.post(`${API_URL_BASE}${endpoint}`,obj);
}

const getAllItem = async() => {
    return await basicFetch('/item')
} 

const getItemBySubstring = async(substring) => {
    return await basicFetch('/item/'+'substring')
}

const getAllCategoria = async() => {
    return await basicFetch('/categoria')
}

const getCategoriaBySubstring = async(substring) => {
    return await basicFetch('/categoria/'+'substring')
}

const postItem = async(item) => {
    return await basicPost('/item',item)
}


export{
    getAllItem,
    getAllCategoria,
    getItemBySubstring,
    getCategoriaBySubstring,
    postItem
}
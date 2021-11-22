const API_URL_BASE = 'http://localhost:8080';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const getAll = async() => {
    return await basicFetch('/item')
} 

export{
    getAll
}
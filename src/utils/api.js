import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api/";

const ADD_PRODUCT = "http://127.0.0.1:8000/api/admin/add_product"

const ADD_CATEGORY = 'http://127.0.0.1:8000/api/admin/add_category';

const DELETE_CATEGORY = 'http://127.0.0.1:8000/api/admin/delete_category';
const DELTE_PRODUCT = `http://127.0.0.1:8000/api/admin/delete_product`;


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}


export const Add_Product = (name, description, priceOld, priceNew, stock, category, image) => {
    const formData = new FormData();
    formData.append('title', name);
    formData.append('description', description);
    formData.append('discount', priceNew);
    formData.append('price', priceOld);
    formData.append('stock', stock);
    formData.append('images', JSON.stringify([image]));
    formData.append('category_id', category);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADD_PRODUCT, true);
    xhr.send(formData);
}

export const Add_categoryAPi = (category) => {
    const formData = new FormData();
    formData.append('title', category);
    formData.append('status', "active");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ADD_CATEGORY, true);
    xhr.send(formData);
}

export const Delete_category = (category) => {
    const formData = new FormData();
    formData.append('id', category);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', DELETE_CATEGORY, true);
    xhr.send(formData);
}

export const Delete_product = (product) => {
    const formData = new FormData();
    formData.append('id', product);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', DELTE_PRODUCT, true);
    xhr.send(formData);
}


export const register_sumbit = (name, email, password, phone, address) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('password', password)
    formData.append('address', address)

    fetch('http://127.0.0.1:8000/api/user/register', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            return data.data;
        })
        .catch(error => {
            console.log(error)
        });
}


export const login_submit = async (email, password) => {
    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)

    try {
        const { data } = await axios.post("http://127.0.0.1:8000/api/user/login",formData);
        return data;
    } catch (err) {
        return err
    }
}
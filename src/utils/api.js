import axios from 'axios';

const token = 'R7t#xP1$9@fGzQwY2&5U8*oK$L3aXcZ6'; // Replace 'YOUR_AUTH_TOKEN' with the actual token

const BASE_URL = "http://127.0.0.1:8000/api/";

const ADD_PRODUCT = "http://127.0.0.1:8000/api/admin/add_product"

const ADD_CATEGORY = 'http://127.0.0.1:8000/api/admin/add_category';

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
    formData.append('discount', JSON.stringify([priceNew]));
    formData.append('price', JSON.stringify([priceOld]));
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
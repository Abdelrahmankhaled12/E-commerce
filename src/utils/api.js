import axios from 'axios';

const KEY = "http://127.0.0.1:8000/"

const ORDER = KEY + "api/user/make_order";


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(KEY +  "api/" + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}


export const SendOrderApi = (data) => {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('governorate', data.governorate);
        formData.append('city', data.city);
        formData.append('postal', data.postal);
        formData.append('products', JSON.stringify(data.products));
        formData.append('payment_method', data.payment_method);
        formData.append('phone', data.phone);
        
        fetch(ORDER, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

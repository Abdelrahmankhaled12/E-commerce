import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000/api/";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(BASE_URL + url);
        return data;
    } catch (err) {
        console.log(err);
        return err
    }
}

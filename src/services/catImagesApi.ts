import axios from "axios";

const baseURL = "https://cataas.com/";

const catImagesApi = axios.create({
    baseURL: baseURL,
});



export default catImagesApi;
import axios from "axios";

const baseURL = "https://catfact.ninja/";

const catFactsApi = axios.create({
    baseURL: baseURL,
});



export default catFactsApi;
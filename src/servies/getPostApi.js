import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";
axios.defaults.params = {
    apiKey: "",
};


export const getPostsApi = async () => {
     const {data} = await axios.get();
    return data;
};
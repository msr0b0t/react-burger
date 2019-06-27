import axios from "axios";

const instance = axios.create({
    baseURL: "https://mary-s-burgers.firebaseio.com/"
});

export default instance;

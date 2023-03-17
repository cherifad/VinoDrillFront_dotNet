import axios from "axios";
import config from './utils/config';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.backend_url;

// if a parameter is passed, it will be used as the token
// if no parameter is passed, it will use the token from the store
export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

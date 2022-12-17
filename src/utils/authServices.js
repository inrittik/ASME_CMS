import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_API_URL;

export const login = async (user) => { 
    const url = `${BASE_URL}/api/login`;
    let resp;
    try {
        resp = await axios.post(url, user, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(resp.data);
        if (resp.status === 201) toast.success(resp.statusText);
        else toast.error(resp.statusText);
    } catch (err) {
        toast.error(err.response.data.message);
    }
    
    return resp;
}

export const logout = async () => { 
    const url = `${BASE_URL}/api/logout`;
    let resp;
    
    try {
        resp = await axios.get(url);
        if (resp.status === 200) toast.success(resp.statusText);
        else toast.error(resp.statusText);
    } catch (err) {
        toast.error("Couldn't be logged out");
    }
    
    return resp;
}
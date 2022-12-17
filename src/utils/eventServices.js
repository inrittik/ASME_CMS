import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_API_URL;


export const getAllEvents = async () => {
    const url = `${BASE_URL}/api/events`;
    let resp;

    try {
      resp = await axios.get(url);
      
    } catch (err) {
      // toast.error(err.response.data.msg);
      console.log(err)
    }

    return resp;
};

export const createEvent = async (event) => {
  const url = `${BASE_URL}/api/event/new`;
  let resp;

  try {
    resp = await axios.post(url, event, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (resp.status === 201 && resp.data !== "Could not decode base64")
      toast.success(resp.statusText);
    else toast.error("Image Size is too large");
  } catch (err) {
    toast.error(err.response.data.msg);
  }

  return resp;
};

export const deleteEvent = async (id) => { 
  const url = `${BASE_URL}/api/event/${id}`;
  let resp;

  try {
    resp = await axios.delete(url);
    if (resp.status === 200) toast.success(resp.statusText);
    else toast.error(resp.statusText);
  } catch (err) {
    toast.error("Couldn't be deleted");
  }

  return resp;
}

export const updateEvent = async (id, event) => { 
  const url = `${BASE_URL}/api/event/${id}`;
  let resp;

  try {
    resp = await axios.put(url, event, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (resp.status === 200 && resp.data !== "Could not decode base64")
      toast.success(resp.statusText);
    else toast.error("Image Size is too large");
  } catch (err) {
    toast.error(err.response.data.msg);
  }

  return resp;
}

export const getEventById = async (id) => { 
  const url = `${BASE_URL}/api/event/${id}`;
  let resp;

  try {
    resp = await axios.get(url);
    if (resp.data.status === 200) toast.success(resp.data.msg);
    else toast.error(resp.data.msg);
  } catch (err) {
    toast.error(err.response.data.msg);
  }

  return resp;
}
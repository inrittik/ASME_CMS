import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;


export const getAllEvents = async () => {
    const url = `${BASE_URL}/api/events`;
    let resp;

    try {
      resp = await axios.get(url);
    } catch (err) {
      console.log({ err });
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
  } catch (err) {
    console.log({ err });
  }

  return resp;
};

export const deleteEvent = async (id) => { 
  const url = `${BASE_URL}/api/event/${id}`;
  let resp;

  try {
    resp = await axios.delete(url);
  } catch (err) {
    console.log({ err });
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
  } catch (err) {
    console.log({ err });
  }

  return resp;
}

export const getEventById = async (id) => { 
  const url = `${BASE_URL}/api/event/${id}`;
  let resp;

  try {
    resp = await axios.get(url);
  } catch (err) {
    console.log({ err });
  }

  return resp;
}
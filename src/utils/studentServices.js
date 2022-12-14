import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_API_URL;

export const getStudentById = async (id) => {
  const url = `${BASE_URL}/api/student/${id}`;
  let resp;

  try {
    resp = await axios.get(url);
  } catch (err) {
    console.log({ err });
  }

  return resp;
};

export const deleteStudentById = async (id) => {
  const url = `${BASE_URL}/api/student/${id}`;
  let resp;

  try {
    resp = await axios.delete(url);
    if (resp.status === 200) toast.success(resp.statusText);
    else toast.error(resp.statusText);
  } catch (err) {
    toast.error("Couldn't be deleted");
  }

  return resp;
};

export const updateStudentById = async (id, student) => {
  const url = `${BASE_URL}/api/student/${id}`;
  let resp;

  try {
    resp = await axios.put(url, student, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log({ err });
  }

  return resp;
};

export const getAllStudentsByEvent = async (_id) => {
  const url = `${BASE_URL}/api/students/${_id}`;
  let resp;

  try {
    resp = await axios.get(url);
  } catch (err) {
    console.log({ err });
  }

  return resp;
};

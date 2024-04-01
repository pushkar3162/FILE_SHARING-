
import axios from 'axios';
const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URI}/upload`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('error is here', error.message);
  }
}




import axios from 'axios';
const API_URI = process.env.REACT_APP_API_URL;

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URI}/upload`, data);
    console.log('API Response:', response.data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('error is here', error.message);
  }
}



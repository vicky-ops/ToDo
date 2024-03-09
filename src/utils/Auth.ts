import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/users?username=${username}&password=${password}`);
    if (response.data.length > 0) {
      const user = response.data[0];
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in local storage
      return user;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    throw error;
  }
};
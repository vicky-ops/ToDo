import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface User {
  id: number;
  username: string;
  password: string;
}

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users`, { username, password });
    const newUser: User = response.data;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: User) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    throw error;
  }
};
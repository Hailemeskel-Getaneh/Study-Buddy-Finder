import axios from 'axios';

const API_BASE_UR = 'http://localhost:7000/api/';

// Register User
export const register = async (userData) => {
  const response = await axios.post(API_BASE_UR + 'register', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login User
export const login = async (userData) => {
  const response = await axios.post(API_BASE_UR + 'login', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
export const logout = () => {
  localStorage.removeItem('user');
};



// Fetch user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (profile) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/profile`, profile, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Fetch matches
export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/matches`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};

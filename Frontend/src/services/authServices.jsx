import axios from 'axios';

const API_BASE_URL = 'http://localhost:7000/api/';

// Register User
export const register = async (userData) => {
  const response = await axios.post(API_BASE_URL + 'register', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login User
export const login = async (userData) => {
  const response = await axios.post(API_BASE_URL + 'login', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
export const logout = () => {
  localStorage.removeItem('user');
};


// Get user profile
export const getUserProfile = async () => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token; // Correct token retrieval
    if (!token) throw new Error('No token found');

    const response = await axios.get(`${API_BASE_URL}profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return profile data
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (profileData) => {
  try {
    const token = JSON.parse(localStorage.getItem('user'))?.token; // Correct token retrieval
    if (!token) throw new Error('No token found');

    const response = await axios.put(`${API_BASE_URL}profile`, profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return updated profile data
  } catch (error) {
    console.error('Error updating profile:', error);
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

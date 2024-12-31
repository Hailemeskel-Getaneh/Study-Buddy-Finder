// src/pages/Profile.jsx
import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/authServices.jsx';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '', bio: '', interests: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(); // Mock API call
      setProfile(data);
    };
    fetchProfile();
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    await updateUserProfile(profile); // Mock API call
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <>
    <Header></Header>
    
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-white shadow p-4 rounded">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="block mb-4 p-2  border border-black w-6/12 rounded"
            />
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="block mb-4 p-2 w-6/12 border border-black rounded"
            />
            <input
              type="text"
              name="interests"
              value={profile.interests}
              onChange={handleChange}
              className="block mb-4 p-2 w-6/12 border border-black rounded"
            />
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <p><strong>Interests:</strong> {profile.interests}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
<Footer></Footer>
    
    </>
   
  );
};

export default Profile;


import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/authServices';
import Header from '../components/header';
import Footer from '../components/footer';

const Profile = () => {
  const [profile, setProfile] = useState({ bio: '', interests: [] });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: name === 'interests' ? value.split(', ') : value });
  };

  const handleSave = async () => {
    try {
      await updateUserProfile(profile);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="p-8 h-screen">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="bg-white shadow p-4 rounded">
          {isEditing ? (
            <>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="block mb-4 p-2 w-6/12 border border-black rounded"
              />
              <input
                type="text"
                name="interests"
                value={profile.interests.join(', ')}
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
              <p><strong>Bio:</strong> {profile.bio}</p>
              <p><strong>Interests:</strong> {profile.interests.join(', ')}</p>
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
      <Footer />
    </>
  );
};

export default Profile;

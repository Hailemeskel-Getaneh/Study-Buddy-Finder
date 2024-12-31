
// src/pages/Matches.jsx
import { useState, useEffect } from 'react';
import { getMatches } from '../services/authServices.jsx'
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getMatches(); // Mock API call
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (

    <>
<Header></Header>
<div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Find Study Buddies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-white shadow p-4 rounded">
            <h3 className="text-xl font-bold">{match.name}</h3>
            <p><strong>Interests:</strong> {match.interests}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  
  );
};

export default Matches;

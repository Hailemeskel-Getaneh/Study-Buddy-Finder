import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<h2>Welcome to Study Buddy Finder</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;

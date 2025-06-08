import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './pages/Users';
import CreateUsers from './pages/CreateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav style={{ padding: '10px' }}>
          <Link to="/">USERS</Link> | 
          <Link to="/create"> CREATE USERS</Link> | 
        </nav>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './components/PrivateRoute';
import Homepage1 from './Homepage1';
import CategorySelect from './components/Categories';
import Generate from './Generater';
import { useNavigate } from 'react-router-dom';

function App() {
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage1 />} />
        
        <Route path="/generate/:topic" element={<Generate />} />
        
        <Route path="/categories" element={<CategorySelect />} />


        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

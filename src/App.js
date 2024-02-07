import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Signup';
import Home from './Components/Home/Home';


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
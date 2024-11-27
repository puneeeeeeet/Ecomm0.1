import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import SellerDashboard from "./components/dashboard/SellerDashboard";
import SupportDashboard from "./components/dashboard/SupportDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/support-dashboard" element={<SupportDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

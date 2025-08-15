import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import BlogDetails from "./components/BlogDetails";
import AdminDashboard from "./AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

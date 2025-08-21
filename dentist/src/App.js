import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ServiceBooking from "./components/ServiceBooking";
import DoctorsList from "./components/DoctorsList";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 bg-light min-vh-100 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServiceBooking />} />
            <Route path="/doctors" element={<DoctorsList />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-dark text-white p-3 vh-100 ${collapsed ? "col-1" : "col-3"}`}
      style={{ transition: "width 0.3s" }}
    >
      <button
        className="btn btn-primary mb-3"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? ">>" : "<<"}
      </button>

      <ul className="nav flex-column">
        <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
        <li className="nav-item"><Link to="/services" className="nav-link text-white">Services</Link></li>
        <li className="nav-item"><Link to="/doctors" className="nav-link text-white">Doctors</Link></li>
        <li className="nav-item"><Link to="/reviews" className="nav-link text-white">Reviews</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="nav flex-column bg-primary " style={{ height: "100vh" }}>
      <Link to="/" className="nav-link active text-white" aria-current="page">
        Home
      </Link>
      <Link to="/admin/dashboard" className="nav-link text-white">
        DashBoard
      </Link>
      <Link to="/admin/dashboard/upload" className="nav-link text-white">
        Upload book
      </Link>
      <Link to="/admin/dashboard/manage" className="nav-link text-white">
        Manage Books
      </Link>
    </nav>
  );
};

export default AdminNavbar;

import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark  navbar-expand-lg " data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          ExcerTracker
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create Exercises Log
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link ">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

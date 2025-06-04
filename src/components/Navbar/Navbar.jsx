import React from 'react';
import { Link, NavLink } from 'react-router';

export const Navbar = () => {
  return (
    <div>
      <Link>
        <span></span>LearnLingo
      </Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </div>
      <div>
        <button>
          <span></span>Log in
        </button>
        <button>Registration</button>
      </div>
    </div>
  );
};

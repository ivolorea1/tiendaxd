import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div >
            <Link to="/">TodoSport</Link>
          </div>
          <ul className="flex space-x-4" >
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "./layout.css";

export const Layout = () => {
  const menu = [
    { url: "/", name: "Home" },
    { url: "/minesweeper", name: "Minesweeper" },
    { url: "/carousel", name: "Carousel 1" },
    { url: "/crousel2", name: "Carousel 2" },
    { url: "/crousel3", name: "Carousel 3" },
  ];

  const location = useLocation();
  const pageName =
    menu.find((item) => item.url === location.pathname)?.name || "";

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <div className="layout">
      <header>
        <nav className={menuOpen ? "open" : "close"}>
          <ul>
            {menu.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} onClick={handleMenuToggle}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h1>{pageName}</h1>
          <button onClick={handleMenuToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© Created with React.js by Vladislav Podymskiy</p>
      </footer>
    </div>
  );
};

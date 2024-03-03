import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/_d3ca59bf-275a-4f0b-b28c-0c73d53ed179_prev_ui.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="w-full">
      <div className="h-[70px] border-[#C499F3] border-[3px] border-opacity-25 bg-white rounded-full lg:w-[90%] mx-auto px-10 mt-5">
        <div className="flex items-center space-x-4">
          <div className="group relative">
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mt-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <ul className="mt-[28px] z-10 p-2 shadow rounded w-52 absolute">
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <Link
                      className={
                        isActiveRoute(menuItem.path)
                          ? "Button font-semibold active"
                          : "Button font-semibold"
                      }
                      to={menuItem.path}
                    >
                      {menuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="w-9 mt-3 items-center mr-10">
            <img className="" src={logo} alt="" />
          </div>
          <ul className="flex gap-6 mt-4">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link
                  className={
                    isActiveRoute(menuItem.path)
                      ? "Button font-semibold active"
                      : "Button font-semibold"
                  }
                  to={menuItem.path}
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-xl lg:pr-2 flex items-center"></div>
      </div>
    </nav>
  );
}

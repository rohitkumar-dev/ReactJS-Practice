import React, { useState } from "react";
import { Container, Logo, LogoutBtn, ThemeBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [menu, setMenu] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 bg-orange-50">
      <Container>
        <nav className=" ">
          <div className="flex flex-row flex-wrap items-center justify-between">
            <Link to="/" className="w-1/2 sm:w-1/4">
              <Logo width="100px" />
            </Link>
            <div className="w-1/2 flex justify-end sm:hidden ">
              <button className="" onClick={() => setMenu(!menu)}>
                <svg
                  className={` h-8 w-8 p-1 bg-gray-400 border border-amber-600 rounded-sm `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div>
                <ThemeBtn/>
              </div>
            </div>

            <div
              className={` ${
                menu ? "inline-block" : "hidden"
              }  sm:inline-block  bg-orange-100 flex-grow text-sm border border-amber-700 rounded-md mt-3 sm:mt-0 sm:flex-grow-0  dark:bg-blue-800`}
            >
              <ul className="sm:flex sm:flex-row sm:justify-between ">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name} className=" sm:ml-3 md:ml-8">
                      <NavLink
                        to={item.slug}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-orange-700 bg-orange-200"
                              : "text-black"
                          } inline-block w-full px-4 py-2 font-medium  bg-amber-100 rounded-md`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}

                <li className="hidden sm:inline-block ml-3">
                  <ThemeBtn/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

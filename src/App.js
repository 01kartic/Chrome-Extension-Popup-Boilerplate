import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="w-fit p-1 mx-auto my-6 border rounded-xl">
        <ul className="w-fit h-fit flex justify-center gap-2">
          <Link to="/">
            <li
              onClick={() => handleLinkClick("Home")}
              className={`px-3 py-2 rounded-lg ${activeLink === "Home"
                  ? "text-sky-500 bg-sky-50"
                  : "text-black hover:text-sky-600"
                }`}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={() => handleLinkClick("About")}
              className={`px-3 py-2 rounded-lg ${activeLink === "About"
                  ? "text-sky-500 bg-sky-50"
                  : "text-black hover:text-sky-600"
                }`}
            >
              About
            </li>
          </Link>
        </ul>
      </nav>

      <div className="px-6 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
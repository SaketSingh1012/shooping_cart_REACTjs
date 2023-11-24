import { BrowserRouter as Router, NavLink,Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";
import Mens_Outerwear from "./Mens_Outerwear";
import Ladies_Outwear from "./Ladies_Outwear";
import Mens_T_Shirt from "./Mens_T_Shirt";
import Ladies_T_Shirt from "./Ladies_T_Shirt";

const Homepage = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <>
        <div className="Home_Head">
          <NavLink
            to="/"
            className={`shop link`}
            onClick={() => handleNavLinkClick("home")}
          >
            SHOP
          </NavLink>
          <div className="cart_image"></div>
        </div>
        <div className="Home_navbar">
          <NavLink
            to="/mens_outerwear"
            className={`link ${activeLink === "mens_outerwear" ? "activeLink" : ""}`}
            onClick={() => handleNavLinkClick("mens_outerwear")}
          >
            Men&apos;s Outerwear
          </NavLink>
          <NavLink
            to="/ladies_outerwear"
            className={`link ${activeLink === "ladies_outerwear" ? "activeLink" : ""}`}
            onClick={() => handleNavLinkClick("ladies_outerwear")}
          >
            Ladies Outerwear
          </NavLink>
          <NavLink
            to="/mens_t_shirts"
            className={`link ${activeLink === "mens_t_shirts" ? "activeLink" : ""}`}
            onClick={() => handleNavLinkClick("mens_t_shirts")}
          >
            Men&apos;s T-Shirts
          </NavLink>
          <NavLink
            to="/ladies_t_shirts"
            className={`link ${activeLink === "ladies_t_shirts" ? "activeLink" : ""}`}
            onClick={() => handleNavLinkClick("ladies_t_shirts")}
          >
            Ladies T-Shirts
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<HomepageContent />} />
          <Route path="/mens_outerwear" element={<Mens_Outerwear />} />
          <Route path="/ladies_outerwear" element={<Ladies_Outwear />} />
          <Route path="/mens_t_shirts" element={<Mens_T_Shirt />} />
          <Route path="/ladies_t_shirts" element={<Ladies_T_Shirt />} />
        </Routes>
      </>
    </Router>
  );
};

const HomepageContent = () => {
  return (
    <>
      <div className="outwear">
        <div className="mens_outwear_img"></div>
        <div>Men&apos;s Outerwear</div>
        <div>
          <Link to="/mens_outerwear">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className="outwear">
        <div className="ladies_outwear_img"></div>
        <div>Ladies Outerwear</div>
        <div>
          <Link to="/ladies_outerwear">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className="t-shirt">
        <div className="outwear">
          <div className="mens_t-shirt_img"></div>
          <div>Men T-Shirts</div>
          <div>
            <Link to="/mens_t_shirts">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="outwear">
          <div className="ladies_t-shirt_img"></div>
          <div>Ladies T-Shirts</div>
          <div>
            <Link to="/ladies_t_shirts">
              <button>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;

import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus= useOnlineStatus()

  // If no depedency array => useEffect is called Every Rendered
  // if there is depedency array=> useEffect is called at once
  // if dependecy array is [btnNameReact]=> useEffect is called everytime [btnNameReact] updated

  useEffect(() => {
    console.log("Use Effect called");
  }, []);
  // console.log("header Called");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? " 🟢" : "🔴 "}</li>
          <li><Link to ="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              // console.log("btnNameReact",btnNameReact)
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import React from "react";
import "../App.css";
import profile from "../pictures/profile.jpg";

function Header() {
  return (
    <div className="screen-height">
      <img src={profile} alt="Logo" className="profile" />
      <h3 className="h3-text">Hello! I'm Luiz Antonio A. Tañedo</h3>
      <ul className="no-bullets">
        <li>23 Years Old</li>
        <li>Lives in Quezon City</li>
      </ul>
    </div>
  );
}

export default Header;

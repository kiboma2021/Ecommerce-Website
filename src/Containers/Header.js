import React from "react";
import '../Styles/Header.css'
const Header = () => {
  return (
    <div className="my-header">
      <div className="upper-header">
        <div className="free-delivery">FREE DELIVERY IN 24 HOURS</div>
        <div className="contact-phone">
          <div>Call or WhatsApp to order</div>
          <div>0710 011 111</div>
        </div>
      </div>
      <div className="lower-header">
        <div className="logo">
          <h1>Soko Yetu</h1>
          <p>Kwa bei nafuu</p>
        </div>
        <div>
          <form className="search-item">
            <input type="search" placeholder="Search for ..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <ul className="myLinks">
          <li>Acount</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
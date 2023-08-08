import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; SiamSaleh</h4>
      {/* mt=margin top */}
      <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contacts">Contacts</Link> |
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

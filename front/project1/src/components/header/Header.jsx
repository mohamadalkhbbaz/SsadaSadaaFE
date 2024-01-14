import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>Code PRo</h1>
      <p>Hello {name}</p>
    </div>
  );
};

export default Header;

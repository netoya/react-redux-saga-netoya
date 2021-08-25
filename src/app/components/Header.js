import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={"h-10 bg-gray-400"}>
      <Link to={"/home"}>HOme</Link>
      <Link to={"/contacto"}>Contacto</Link>
    </div>
  );
}

export default Header;

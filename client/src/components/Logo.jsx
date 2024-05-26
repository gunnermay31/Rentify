import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  const { userType } = useSelector((store) => store.auth);
  return (
    <Link to={`/${userType ? userType : ""}`}>
      <img
        className="w-16 h-10 md:w-20 md:h-12"
      />
    </Link>
  );
};

export default Logo;

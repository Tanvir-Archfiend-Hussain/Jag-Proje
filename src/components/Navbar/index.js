import React from "react";

const NavBAr = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Nvabar</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/about" activeStyle>
            Services
          </NavLink>
          <NavLink to="/about" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/about" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBAr;

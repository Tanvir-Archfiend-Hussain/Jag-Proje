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
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBAr;

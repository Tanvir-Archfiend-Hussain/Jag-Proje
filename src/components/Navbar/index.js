import React from "react";

const NavBAr = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Nvabar</h1>
        </NavLink>
        <Bars />
        <NavMenu></NavMenu>
      </Nav>
    </>
  );
};

export default NavBAr;

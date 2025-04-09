import React from 'react';

function Navbar() {
  return (
<nav
  className="navbar"
  style={{
    background: "linear-gradient(to bottom, #6cae42 0%, #3c8527 100%)",
    border: "4px solid #2b5a1b",
    boxShadow:
      "inset -4px -4px 0 #2b5a1b, inset 4px 4px 0 #90c760, 0 4px #1e3c12, 0 8px #13290c",
    borderRadius: "0px",
    color: "#fff",
    padding: "1rem 2rem",
    fontFamily: "MinecraftTen, sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div className="navbar-brand">Angela's World</div>
  <ul className="navbar-nav" style={{ display: "flex", gap: "1rem" }}>
    <li><a href="#" style={{ color: "#fff" }}>Home</a></li>
    <li><a href="#" style={{ color: "#fff" }}>Guides</a></li>
    <li><a href="#" style={{ color: "#fff" }}>Contact</a></li>
  </ul>
</nav>
  );
}

export default Navbar;

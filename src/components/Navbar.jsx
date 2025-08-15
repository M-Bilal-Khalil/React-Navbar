import { Link } from "react-router-dom";

export default function Navbar() {
  const navBarStyle = {
    background: "#f8f8f8",
    borderBottom: "1px solid #ccc",
    width: "100%",
  };

  const navContentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // logo left, links right
    padding: "15px 20px",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#333",
    textDecoration: "none",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "30px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  };

  return (
    <div style={navBarStyle}>
      <div style={navContentStyle}>
        {/* Logo */}
        <Link to="/" style={logoStyle}>
          Bilal's Website
        </Link>

        {/* Navbar Links */}
        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
        </div>
      </div>
    </div>
  );
}

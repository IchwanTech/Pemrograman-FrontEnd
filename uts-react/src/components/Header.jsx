import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, #166534, #22c55e)",
        padding: "12px 20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          WanPedia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/posts", label: "Posts" },
              { to: "/pesantren", label: "Pesantren" },
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                style={{
                  fontSize: "1rem",
                  fontWeight: location.pathname === to ? "bold" : "normal",
                  color: location.pathname === to ? "#FFD700" : "#ffffff",
                  margin: "0 12px",
                  padding: "8px 14px",
                  borderRadius: "5px",
                  transition: "all 0.3s ease-in-out",
                  textDecoration: "none",
                }}
                className="nav-link-custom"
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#166534",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "30px",
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <p
          style={{
            fontSize: "1rem",
            margin: "0",
            color: "#FFD700",
          }}
        >
          &copy; {new Date().getFullYear()} WanPedia. Semua Hak Dilindungi.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            marginTop: "5px",
            color: "#ffffff",
          }}
        >
          Dibangun dengan semangat ilmu & inspirasi.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

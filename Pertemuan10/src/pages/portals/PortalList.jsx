import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MyNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function PortalList() {
  const [portals, setPortals] = useState([]);

  useEffect(() => {
    const getPortals = async () => {
      try {
        const response = await axios.get(
          "https://api-berita-indonesia.vercel.app/"
        );
        const endpoints = response.data?.endpoints || [];

        const updatedPortals = await Promise.all(
          endpoints.map(async (portal) => {
            try {
              const portalResponse = await axios.get(
                `https://api-berita-indonesia.vercel.app/${portal.name}/terbaru/`
              );
              const { description, image } = portalResponse.data.data || {};

              return {
                ...portal,
                description: description || "Deskripsi tidak tersedia",
                image: image || "https://picsum.photos/200",
              };
            } catch (error) {
              console.error(
                `Gagal mengambil data untuk ${portal.name}:`,
                error
              );
              return {
                ...portal,
                description: "Deskripsi tidak tersedia",
                image: "https://picsum.photos/200",
              };
            }
          })
        );

        setPortals(updatedPortals);
      } catch (error) {
        console.log("Error fetching portals:", error);
      }
    };

    getPortals();
  }, []);

  return (
    <div>
      <MyNavbar />
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">Daftar Portal Berita</h2>
        <Row xs={1} md={3} lg={4} className="g-4 justify-content-center">
          {portals.map((portal, index) => (
            <Col key={index}>
              <NavLink
                to={`/portal/${portal.name}`}
                className="text-decoration-none"
              >
                <Card className="shadow-sm border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={portal.image}
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/200")
                    }
                    className="rounded-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center d-flex flex-column">
                    <Card.Title
                      className="fw-bold"
                      style={{ color: "#0d6efd" }}
                    >
                      {portal.name.toUpperCase()}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {portal.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default PortalList;

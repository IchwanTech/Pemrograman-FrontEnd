import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaSearch,
  FaArrowLeft,
  FaBuilding,
} from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function KabupatenList() {
  const { provinsiId } = useParams();
  const [kabupaten, setKabupaten] = useState([]);
  const [provinsiName, setProvinsiName] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    axios
      .get(
        `https://api-pesantren-indonesia.vercel.app/kabupaten/${provinsiId}.json`
      )
      .then((response) => {
        setKabupaten(response.data);
        // Try to get provinsi name if available in the response
        if (response.data.length > 0 && response.data[0].provinsi) {
          setProvinsiName(response.data[0].provinsi);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching kabupaten:", error);
        setLoading(false);
      });
  }, [provinsiId]);

  const filteredKabupaten = kabupaten.filter((kab) =>
    kab.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRandomColor = (index) => {
    const colors = [
      "#166534",
      "#22c55e",
      "#0891b2",
      "#7e22ce",
      "#b91c1c",
      "#c2410c",
      "#0369a1",
    ];
    return colors[index % colors.length];
  };

  return (
    <div>
      <Header />

      <div
        style={{
          backgroundColor: "#f0f9ff",
          padding: "60px 0",
          backgroundImage: "url('https://via.placeholder.com/1920x300')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(22, 101, 52, 0.8)",
          }}
        ></div>
        <Container className="position-relative" data-aos="fade-up">
          <div className="text-center text-white">
            <h1 className="fw-bold mb-3">
              Daftar Kabupaten{provinsiName && ` di ${provinsiName}`}
            </h1>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
              Pilih kabupaten untuk melihat daftar pesantren di wilayah
              tersebut. Data pesantren lengkap dan terupdate.
            </p>
            <div
              className="mx-auto position-relative"
              style={{ maxWidth: "500px" }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Cari Kabupaten..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: "50px 0 0 50px", paddingLeft: "20px" }}
                />
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "#166534",
                    borderRadius: "0 50px 50px 0",
                    border: "none",
                  }}
                >
                  <FaSearch className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-3">Memuat data kabupaten...</p>
          </div>
        ) : (
          <>
            <Row xs={1} md={3} lg={4} className="g-4">
              {filteredKabupaten.length > 0 ? (
                filteredKabupaten.map((kab, index) => (
                  <Col
                    key={kab.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <Link
                      to={`/pesantren/${kab.id}`}
                      className="text-decoration-none"
                    >
                      <Card
                        className="h-100 border-0 overflow-hidden"
                        style={{
                          borderRadius: "12px",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 20px rgba(0,0,0,0.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 6px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div
                          style={{
                            height: "8px",
                            backgroundColor: getRandomColor(index),
                          }}
                        />
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
                          <div
                            className="d-flex align-items-center justify-content-center mb-3"
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              backgroundColor: "#f0f9ff",
                              color: getRandomColor(index),
                            }}
                          >
                            <FaBuilding size={24} />
                          </div>
                          <Card.Title
                            className="fw-bold text-center mb-3"
                            style={{ color: "#333" }}
                          >
                            {kab.nama}
                          </Card.Title>
                          <div className="mt-auto">
                            <span
                              className="d-inline-block rounded-pill px-3 py-1 small"
                              style={{
                                backgroundColor: "#e6f7ef",
                                color: "#166534",
                              }}
                            >
                              Lihat Pesantren{" "}
                              <FaArrowRight size={12} className="ms-1" />
                            </span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <div className="text-center py-5">
                    <p className="text-muted">
                      Data kabupaten tidak ditemukan.
                    </p>
                  </div>
                </Col>
              )}
            </Row>

            <div className="text-center mt-5" data-aos="fade-up">
              <Link to="/">
                <button
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#166534",
                    color: "white",
                    borderRadius: "50px",
                  }}
                >
                  <FaArrowLeft className="me-2" /> Kembali ke Daftar Provinsi
                </button>
              </Link>
            </div>
          </>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default KabupatenList;

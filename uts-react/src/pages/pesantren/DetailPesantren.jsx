import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaArrowLeft,
  FaSearch,
  FaUser,
  FaIdCard,
  FaBookOpen,
  FaPhone,
} from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function DetailPesantren() {
  const { kabupatenId } = useParams();
  const [pesantren, setPesantren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [kabupatenName, setKabupatenName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Inisialisasi AOS untuk animasi scroll
    AOS.init({
      duration: 800,
      once: false,
    });

    setLoading(true);
    axios
      .get(
        `https://api-pesantren-indonesia.vercel.app/pesantren/${kabupatenId}.json`
      )
      .then((response) => {
        setPesantren(response.data);
        // Try to get kabupaten name if available in the response
        if (response.data.length > 0 && response.data[0].kabupaten) {
          setKabupatenName(response.data[0].kabupaten);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pesantren:", error);
        setLoading(false);
      });
  }, [kabupatenId]);

  const filteredPesantren = pesantren.filter(
    (ps) => ps.nama && ps.nama.toLowerCase().includes(searchTerm.toLowerCase())
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
              Daftar Pesantren{kabupatenName && ` di ${kabupatenName}`}
            </h1>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
              Temukan informasi pesantren lengkap dan terupdate.
            </p>
            <div
              className="mx-auto position-relative"
              style={{ maxWidth: "500px" }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Cari Pesantren..."
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

      {/* Count Section */}
      <div style={{ backgroundColor: "white", padding: "30px 0" }}>
        <Container>
          <div className="text-center mb-4" data-aos="fade-up">
            <Badge
              pill
              bg="success"
              className="mb-2 px-3 py-2"
              style={{ backgroundColor: "#166534" }}
            >
              <FaBookOpen className="me-1" /> Pesantren
            </Badge>
            <h2 className="fw-bold mt-2" style={{ color: "#166534" }}>
              Informasi Pesantren Lengkap
            </h2>
            <p className="text-muted">
              Detail pesantren beserta alamat, nama kyai, dan NSPP
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="my-5">
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="success" />
            <p className="mt-3">Memuat data pesantren...</p>
          </div>
        ) : (
          <>
            <Row xs={1} md={2} lg={3} className="g-4">
              {filteredPesantren.length > 0 ? (
                filteredPesantren.map((ps, index) => (
                  <Col
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={(index % 9) * 50}
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
                      <Card.Body className="p-4">
                        <Card.Title
                          className="fw-bold mb-3"
                          style={{ color: getRandomColor(index) }}
                        >
                          {ps.nama || "Nama tidak tersedia"}
                        </Card.Title>

                        <div className="d-flex align-items-start mb-2">
                          <div
                            style={{
                              minWidth: "28px",
                              color: getRandomColor(index),
                              marginTop: "3px",
                            }}
                          >
                            <FaMapMarkerAlt />
                          </div>
                          <div>
                            <strong>Alamat:</strong>
                            <p className="text-muted mb-2">
                              {ps.alamat ? ps.alamat : "Alamat tidak tersedia"}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mb-2">
                          <div
                            style={{
                              minWidth: "28px",
                              color: getRandomColor(index),
                              marginTop: "3px",
                            }}
                          >
                            <FaUser />
                          </div>
                          <div>
                            <strong>Kyai:</strong>
                            <p className="text-muted mb-2">
                              {ps.kyai ? ps.kyai : "Nama kyai tidak tersedia"}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mb-2">
                          <div
                            style={{
                              minWidth: "28px",
                              color: getRandomColor(index),
                              marginTop: "3px",
                            }}
                          >
                            <FaIdCard />
                          </div>
                          <div>
                            <strong>NSPP:</strong>
                            <p className="text-muted mb-0">
                              {ps.nspp ? ps.nspp : "NSPP tidak tersedia"}
                            </p>
                          </div>
                        </div>
                        {ps.kab_kota.nama && (
                          <div className="d-flex align-items-start mt-2">
                            <div
                              style={{
                                minWidth: "28px",
                                color: getRandomColor(index),
                                marginTop: "3px",
                              }}
                            >
                              <FaPhone />
                            </div>
                            <div>
                              <strong>Kabupaten:</strong>
                              <p className="text-muted mb-0">
                                {ps.kab_kota.nama}
                              </p>
                            </div>
                          </div>
                        )}
                        {ps.provinsi.nama && (
                          <div className="d-flex align-items-start mt-2">
                            <div
                              style={{
                                minWidth: "28px",
                                color: getRandomColor(index),
                                marginTop: "3px",
                              }}
                            >
                              <FaPhone />
                            </div>
                            <div>
                              <strong>Provinsi:</strong>
                              <p className="text-muted mb-0">
                                {ps.provinsi.nama}
                              </p>
                            </div>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col xs={12}>
                  <div className="text-center">
                    <h4 className="text-muted fw-bold text-center">
                      Data pesantren tidak tersedia
                    </h4>
                  </div>
                </Col>
              )}
            </Row>

            <div className="text-center mt-5" data-aos="fade-up">
              <Link to={`/kabupaten/${kabupatenId}`}>
                <button
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#166534",
                    color: "white",
                    borderRadius: "50px",
                  }}
                >
                  <FaArrowLeft className="me-2" /> Kembali ke Daftar Kabupaten
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

export default DetailPesantren;

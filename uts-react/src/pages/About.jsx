import React, { useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header
        title="Tentang Kami"
        subtitle="Menyebarkan Ilmu dan Inspirasi Bersama Wanpedia"
      />
      <Container style={{ padding: "50px 0" }}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center" data-aos="fade-right">
            <Image
              src={aboutImage}
              alt="Tentang Wanpedia"
              fluid
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Col>

          <Col md={6} data-aos="fade-left">
            <Card style={{ border: "none", background: "transparent" }}>
              <Card.Body>
                <h2 style={{ color: "#166534", fontWeight: "bold" }}>
                  Wanpedia
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#444",
                    lineHeight: "1.6",
                  }}
                >
                  Wanpedia adalah platform berbagi ilmu dan inspirasi yang
                  berkomitmen untuk menyebarkan pengetahuan dan nilai-nilai
                  positif kepada masyarakat. Dengan berbagai konten edukatif dan
                  informatif, kami berharap dapat menjadi sumber wawasan bagi
                  pembaca dari berbagai kalangan.
                </p>

                <h3 style={{ color: "#22c55e", fontWeight: "bold" }}>
                  Misi Kami
                </h3>
                <p style={{ fontSize: "1.1rem", color: "#444" }}>
                  Kami berkomitmen untuk menyediakan konten berkualitas dalam
                  berbagai bidang, termasuk pendidikan, agama, teknologi, dan
                  pengembangan diri. Tujuan utama kami adalah membangun
                  komunitas yang gemar belajar dan berbagi ilmu.
                </p>

                <h3 style={{ color: "#22c55e", fontWeight: "bold" }}>
                  Hubungi Kami
                </h3>
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li>
                    <strong>Email:</strong> noerfy@gmail.com
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> +62 857 1504 3406
                  </li>
                  <li>
                    <strong>Instagram:</strong> @noerfyy_
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;

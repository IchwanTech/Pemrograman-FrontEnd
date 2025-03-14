import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
import heroImage from "../assets/post.svg";
import Footer from "../components/Footer";
import Article from "../components/Article";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="hero-section text-white"
        style={{
          backgroundColor: "#0d6efd",
          padding: "80px 10%",
          width: "100%",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">Selamat Datang di PeTIK</h1>
              <p className="lead">
                Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah
                lembaga pendidikan berbasis IT yang membentuk generasi siap
                menghadapi industri digital.
              </p>
              <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia
                digital bersama para mentor dan praktisi industri!
              </p>
              <Button
                variant="light"
                size="lg"
                href="/about"
                className="fw-bold text-primary"
              >
                Pelajari Lebih Lanjut
              </Button>
            </Col>

            <Col md={6} className="text-center">
              <img
                src={heroImage}
                alt="Hero PeTIK"
                className="img-fluid"
                style={{ maxHeight: "400px", width: "90%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Popular Categories</h2>
            <p className="text-muted">Explore topics that interest you</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {[
            "Web Development",
            "Machine Learning",
            "Cyber Security",
            "Mobile Development",
            "DevOps and Automation",
          ].map((category, index) => (
            <Col md={4} lg={2} key={index}>
              <Card className="text-center shadow-sm category-card">
                <Card.Body>
                  <Card.Title className="fw-bold">{category}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Latest Posts Section */}
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Latest Posts</h2>
            <p className="text-muted">Read the latest news and updates</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          <Article />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

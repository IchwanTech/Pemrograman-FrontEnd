import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4}>
            <h5 className="fw-bold">PeTIK Blog</h5>
            <p className="small">
              Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah
              lembaga pendidikan berbasis IT yang membentuk generasi siap
              menghadapi industri digital.
            </p>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/posts" className="text-white text-decoration-none">
                  Posts
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p className="small">
              Jl. Mandor Basar No.54, Rangkapan Jaya, Kec. Pancoran Mas, Kota
              Depok, Jawa Barat 16434
            </p>
            <p className="small">Email: info@petik.com</p>
            <p className="small">Phone: +62 812-3456-7890</p>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} PeTIK Blog. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

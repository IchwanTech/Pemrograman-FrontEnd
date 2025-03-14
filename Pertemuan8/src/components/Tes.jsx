import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tes = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ width: "100%" }}
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h3>Ini layouting menggunakan grid react bootstrap</h3>
        <Row className="mt-3 me-3">
          <Col className="col-3 col-md-3 col-lg-3 bg-danger text-white">
            1 of 3
          </Col>
          <Col className="col-3 col-md-3 col-lg-3 bg-success text-white">
            2 of 3
          </Col>
          <Col className="col-3 col-md-3 col-lg-3 bg-info text-white">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tes;

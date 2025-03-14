import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import MyNavbar from "../components/Navbar";

const Author = () => {
  const [authors, setAuthors] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MyNavbar />
      <Container className="mt-5">
        <h1 className="fw-bold text-center text-primary mb-4">Author List</h1>
        <Row className="g-4 justify-content-center">
          {authors.map((author) => (
            <Col key={author.id} md={4} className="mb-4">
              <Card className="shadow border-0 rounded-4 overflow-hidden user-card h-100">
                <div className="bg-primary text-white p-3 text-center">
                  <CardTitle tag="h5" className="fw-bold mb-0">
                    {author.name}
                  </CardTitle>
                  <small className="text-white-50">{author.username}</small>
                </div>
                <CardBody className="p-4">
                  <CardText className="mb-2">
                    <b>Email:</b> {author.email}
                  </CardText>
                  <CardText className="mb-2">
                    <b>Phone:</b> {author.phone}
                  </CardText>
                  <CardText className="mb-2">
                    <b>Website:</b>{" "}
                    <a
                      href={`https://${author.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-primary fw-bold"
                    >
                      www.{author.website}
                    </a>
                  </CardText>
                  <CardText className="mb-2">
                    <b>Company:</b> {author.company.name}
                  </CardText>
                  <CardText>
                    <b>Address:</b> {author.address.street},{" "}
                    {author.address.city}
                  </CardText>
                  <Button
                    color="primary"
                    outline
                    className="rounded-pill mt-3 w-100"
                  >
                    View Profile
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Author;

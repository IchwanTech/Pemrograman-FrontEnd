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
        <h1 className="fw-bold text-center">Author List</h1>
        <Row>
          {authors.map((author) => (
            <Col key={author.id} md={4}>
              <Card className="shadow-sm border-1 rounded-3 user-card mt-3">
                <CardBody>
                  <CardTitle tag="h5" className="fw-bold text-primary">
                    {author.name}
                  </CardTitle>
                  <CardText className="text-muted">{author.username}</CardText>
                  <CardText>
                    <b>Email</b>: {author.email} <br />
                    <b>Phone</b>: {author.phone} <br />
                    <b>Website</b>:{" "}
                    <a href={`https://${author.website}`} target="_blank">
                      www.{author.website}
                    </a>
                    <br />
                    <b>Company</b>: {author.company.name} <br />
                    <b>Address</b>: {author.address.street},
                    {author.address.city} <br />
                  </CardText>
                  <Button color="primary" outline block>
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

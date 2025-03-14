import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Input,
} from "reactstrap";
import axios from "axios";
import postsData from "../posts.json";
import Search from "./Search";

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [totalPost, setTotalPosts] = useState(postsData.length);

  const onChangeSearch = (keyword) => {
    const filteredData = postsData.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setPosts(filteredData.slice(0, 6));
    setTotalPosts(filteredData.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data.slice(0, 6));
        setTotalPosts(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Search onSearchChange={onChangeSearch} totalPost={totalPost} />
      <Row>
        {posts.map((post, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm border-0 rounded-lg h-100 hover-effect">
              <CardBody>
                <CardTitle tag="h5" className="text-primary fw-bold">
                  {post.title}
                </CardTitle>
                <CardText className="text-muted">
                  {post.author && <small>✍️ {post.author}</small>}
                  <br />
                  {post.date && <small>📅 {post.date}</small>}
                  <br />
                  {post.tags && <small>🏷️ {post.tags}</small>}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Article;

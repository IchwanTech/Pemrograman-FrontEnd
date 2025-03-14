import { useParams } from "react-router-dom";
import MyNavbar from "../../components/Navbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import Search from "../../components/Search";

const DetailPortals = () => {
  const { name } = useParams();
  const [portals, setPortals] = useState({ posts: [] });
  const [isLoading, setIsLoading] = useState(true);

  const getPortals = async () => {
    try {
      const response = await axios.get(
        `https://api-berita-indonesia.vercel.app/${name}/terbaru/`
      );
      setPortals(response.data.data || { posts: [] });
    } catch (error) {
      console.error("Error fetching data:", error);
      setPortals({ posts: [] });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getPortals();
  }, [name]);

  return (
    <div>
      <MyNavbar />
      <Container className="mt-4">
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            {portals.title && (
              <>
                <h3 className="fw-bold mb-4 text-primary text-center">
                  {portals.title}
                </h3>
                <p className="text-muted text-center">{portals.description}</p>
                <Search />
              </>
            )}
            <Row>
              {portals.posts.map((post, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={index}
                  className="mb-5 px-2 px-md-3 px-lg-4"
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <Card className="shadow-sm border-0 h-100">
                      <Card.Img
                        variant="top"
                        src={post.thumbnail || "https://picsum.photos/300"}
                        onError={(e) =>
                          (e.target.src = "https://picsum.photos/300")
                        }
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title className="text-primary fw-bold">
                          {post.title}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          {post.description || "Tidak ada deskripsi"}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default DetailPortals;

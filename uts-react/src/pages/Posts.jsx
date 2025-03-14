import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomPicsumId = () => Math.floor(Math.random() * 1000) + 1;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(
        "https://ichwan.rikpetik.site/api/posts"
      );

      const fetchedPosts = response.data?.data?.data || [];

      const postsWithThumbnails = fetchedPosts.map((post) => ({
        ...post,
        thumbnail:
          post.thumbnail ||
          `https://picsum.photos/id/${getRandomPicsumId()}/500/300`,
      }));

      setPosts(postsWithThumbnails);
    } catch (error) {
      setError("Gagal memuat data.");
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();

    return () => {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    };
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />

      <Container className="my-5 flex-grow-1">
        <h2
          className="text-center mb-5 fw-bold text-success"
          data-aos="fade-down"
        >
          Artikel Terbaru
        </h2>

        {loading && (
          <div className="text-center my-5" data-aos="fade-in">
            <Spinner animation="border" variant="success" role="status">
              <span className="visually-hidden">Memuat artikel...</span>
            </Spinner>
            <p className="mt-2">Memuat artikel...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="text-center" data-aos="fade-in">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </Alert>
        )}

        {!loading && !error && posts.length === 0 && (
          <Alert variant="info" className="text-center" data-aos="fade-in">
            <i className="bi bi-info-circle-fill me-2"></i>
            Tidak ada artikel tersedia saat ini.
          </Alert>
        )}

        <Row className="g-4">
          {Array.isArray(posts) &&
            posts.length > 0 &&
            posts.map((post, index) => (
              <Col key={post.id} md={4} className="mb-4">
                <div
                  className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="position-relative">
                    <img
                      src={post.thumbnail}
                      className="card-img-top"
                      alt={post.title}
                      style={{ height: "200px", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/id/${getRandomPicsumId()}/500/300`;
                      }}
                    />
                    {post.category && (
                      <span className="position-absolute top-0 end-0 bg-success text-white px-2 py-1 m-2 rounded-pill small">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{post.title}</h5>
                    {post.excerpt && (
                      <p className="card-text text-muted small">
                        {post.excerpt.substring(0, 120)}...
                      </p>
                    )}
                    <div className="mt-auto">
                      {post.author && (
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-light rounded-circle p-1 me-2">
                            <img
                              src={`https://picsum.photos/id/${getRandomPicsumId()}/500/300`}
                              alt={post.author}
                              className="rounded-circle"
                              width="30"
                              height="30"
                            />
                          </div>
                          <small className="text-muted">{post.author}</small>
                        </div>
                      )}
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{post.date}</small>
                        <NavLink
                          to={post.url}
                          className="btn btn-sm btn-success"
                          target="_blank"
                        >
                          Baca Selengkapnya
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Posts;

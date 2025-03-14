import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  Badge,
} from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImage from "../assets/landing-image.jpg";
import arab from "../assets/arab.jpg";
import {
  FaBook,
  FaVideo,
  FaUsers,
  FaAward,
  FaChalkboardTeacher,
} from "react-icons/fa";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import web from "../assets/web.jpg";
import tauhid from "../assets/tauhid.jpg";
import iwan from "../assets/iwan.jpg";
import galskuy from "../assets/gaskuy.jpeg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  const categories = [
    {
      id: 1,
      title: "Ilmu Agama",
      icon: <FaBook size={30} />,
      count: 120,
      color: "#166534",
    },
    {
      id: 2,
      title: "Teknologi",
      icon: <FaChalkboardTeacher size={30} />,
      count: 85,
      color: "#166534",
    },
    {
      id: 3,
      title: "Bahasa",
      icon: <FaUsers size={30} />,
      count: 60,
      color: "#166534",
    },
    {
      id: 4,
      title: "Bisnis",
      icon: <FaAward size={30} />,
      count: 45,
      color: "#166534",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Belajar Kapan Saja",
      description: "Akses materi pembelajaran 24/7 dari perangkat apa saja",
      icon: <FaBook size={40} color="#22c55e" />,
    },
    {
      id: 2,
      title: "Video Tutorial",
      description: "Ratusan video tutorial berkualitas tinggi",
      icon: <FaVideo size={40} color="#22c55e" />,
    },
    {
      id: 3,
      title: "Komunitas Aktif",
      description: "Bergabunglah dengan ribuan pembelajar lainnya",
      icon: <FaUsers size={40} color="#22c55e" />,
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Dasar-dasar Tauhid",
      category: "Ilmu Agama",
      guru: "Ustadz Anwar",
      image: tauhid,
      rating: 4.9,
      mahasantri: 1250,
    },
    {
      id: 2,
      title: "Pemrograman Web",
      category: "Teknologi",
      guru: "Kak Sukma",
      image: web,
      rating: 4.8,
      mahasantri: 980,
    },
    {
      id: 3,
      title: "Bahasa Arab untuk Pemula",
      category: "Bahasa",
      guru: "Ustadz Wahyu",
      image: arab,
      rating: 4.7,
      mahasantri: 750,
    },
  ];

  const testimonis = [
    {
      id: 1,
      name: "Iwan Fullstack",
      role: "Mahasantri",
      content:
        "Wanpedia membantu saya memahami ilmu IT dengan lebih mudah dan mendalam. Materinya sangat lengkap!",
      avatar: iwan,
    },
    {
      id: 2,
      name: "Kak Galskuy",
      role: "Musyrif",
      content:
        "Sebagai seorang musyrif, saya menemukan banyak referensi berharga di Wanpedia untuk membantu mengajar mahasantri saya.",
      avatar: galskuy,
    },
  ];

  return (
    <>
      <Header />

      <Container style={{ padding: "80px 0" }}>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <h1
              style={{
                color: "#166534",
                fontWeight: "bold",
                fontSize: "2.5rem",
              }}
            >
              Belajar Tanpa Batas di Wanpedia
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6" }}>
              Wanpedia adalah platform edukasi berbasis teknologi yang
              menyediakan berbagai materi pembelajaran, mulai dari ilmu agama
              hingga teknologi.
            </p>
            <Button
              variant="success"
              size="lg"
              href="/about"
              style={{
                backgroundColor: "#22c55e",
                border: "none",
                padding: "12px 24px",
                fontSize: "1.2rem",
                borderRadius: "10px",
              }}
            >
              Mulai Belajar
            </Button>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left">
            <Image
              src={landingImage}
              alt="Wanpedia"
              fluid
              style={{
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Col>
        </Row>
      </Container>

      <div style={{ backgroundColor: "#f9fafb", padding: "80px 0" }}>
        <Container>
          <h2
            className="text-center mb-5"
            style={{ color: "#166534", fontWeight: "bold" }}
            data-aos="fade-up"
          >
            Kategori Pembelajaran
          </h2>
          <Row>
            {categories.map((category, index) => (
              <Col key={category.id} md={3} sm={6} className="mb-4">
                <div data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card
                    className="h-100 text-center"
                    style={{
                      borderRadius: "10px",
                      border: "none",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Card.Body>
                      <div
                        style={{ marginBottom: "15px", color: category.color }}
                      >
                        {category.icon}
                      </div>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {category.title}
                      </Card.Title>
                      <Card.Text>{category.count} Kursus</Card.Text>
                      <Button
                        variant="outline-success"
                        style={{ borderColor: "#22c55e", color: "#166534" }}
                      >
                        Lihat Kursus
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Container style={{ padding: "80px 0" }}>
        <h2
          className="text-center mb-5"
          style={{ color: "#166534", fontWeight: "bold" }}
          data-aos="fade-up"
        >
          Fitur Unggulan Wanpedia
        </h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={feature.id} md={4} className="mb-4">
              <div data-aos="fade-up" data-aos-delay={index * 150}>
                <Card className="h-100 text-center border-0">
                  <Card.Body>
                    <div className="mb-3">{feature.icon}</div>
                    <Card.Title
                      style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                    >
                      {feature.title}
                    </Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div style={{ backgroundColor: "#f9fafb", padding: "80px 0" }}>
        <Container>
          <div
            className="d-flex justify-content-between align-items-center mb-5"
            data-aos="fade-up"
          >
            <h2 style={{ color: "#166534", fontWeight: "bold" }}>
              Kursus Populer
            </h2>
            <Button
              variant="link"
              style={{
                color: "#22c55e",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Lihat Semua Kursus
            </Button>
          </div>
          <Row>
            {popularCourses.map((course, index) => (
              <Col key={course.id} md={4} className="mb-4">
                <div data-aos="flip-up" data-aos-delay={index * 100}>
                  <Card
                    className="h-100"
                    style={{
                      borderRadius: "10px",
                      border: "none",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      height: "100%", // Ensure full height
                    }}
                  >
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={course.image}
                        style={{
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div>
                        <Badge
                          bg="light"
                          text="dark"
                          className="mb-2"
                          style={{
                            backgroundColor: "#e6f7ef",
                            color: "#166534",
                          }}
                        >
                          {course.category}
                        </Badge>
                        <Card.Title
                          style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                        >
                          {course.title}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          Oleh: {course.guru}
                        </Card.Text>
                      </div>
                      <div className="mt-auto d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-warning">★</span>{" "}
                          {course.rating}
                        </div>
                        <div className="text-muted">
                          {course.mahasantri} Mahasantri
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Container style={{ padding: "80px 0" }}>
        <h2
          className="text-center mb-5"
          style={{ color: "#166534", fontWeight: "bold" }}
          data-aos="fade-up"
        >
          Apa Kata Mereka?
        </h2>
        <Row className="justify-content-center">
          {testimonis.map((testimoni, index) => (
            <Col key={testimoni.id} md={5} className="mb-4">
              <div data-aos="fade-up" data-aos-delay={index * 200}>
                <Card
                  className="h-100"
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Card.Body>
                    <div className="d-flex mb-3">
                      <Image
                        src={testimoni.avatar}
                        roundedCircle
                        width={60}
                        height={60}
                      />
                      <div className="ms-3">
                        <h5 style={{ margin: 0, fontWeight: "bold" }}>
                          {testimoni.name}
                        </h5>
                        <p className="text-muted" style={{ margin: 0 }}>
                          {testimoni.role}
                        </p>
                      </div>
                    </div>
                    <Card.Text
                      style={{ fontSize: "1.1rem", fontStyle: "italic" }}
                    >
                      "{testimoni.content}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "80px 0",
          color: "#166534",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Container className="text-center">
          <div data-aos="zoom-in">
            <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Siap Untuk Mulai Belajar?
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                maxWidth: "700px",
                margin: "0 auto 30px",
                color: "#4b5563",
              }}
            >
              Bergabunglah dengan ribuan pembelajar lainnya dan mulailah
              perjalanan ilmu Anda bersama Wanpedia hari ini.
            </p>
            <Button
              variant="success"
              size="lg"
              style={{
                padding: "12px 30px",
                fontSize: "1.2rem",
                borderRadius: "10px",
                fontWeight: "bold",
                backgroundColor: "#166534",
                color: "white",
                border: "none",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Daftar Sekarang
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;

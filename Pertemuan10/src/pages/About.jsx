import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <MyNavbar />
      <Container className="mt-5 d-flex justify-content-center">
        <Card
          className="shadow-lg border-0 rounded-4 p-4"
          style={{ maxWidth: "800px" }}
        >
          <CardBody>
            <CardTitle
              tag="h1"
              className="fw-bold text-primary text-center mb-4"
            >
              About PeTIK
            </CardTitle>
            <CardText className="text-muted">
              <p>
                <b>Pesantren PeTIK</b> adalah lembaga pendidikan yang
                mengintegrasikan ilmu agama dan teknologi informasi. Dengan
                kurikulum berbasis IT, santri tidak hanya dibekali dengan ilmu
                keislaman tetapi juga keterampilan dalam pemrograman,
                pengelolaan basis data, serta pengembangan aplikasi berbasis web
                dan mobile.
              </p>
              <p>
                Selain itu, PeTIK juga menyediakan berbagai program pelatihan
                dan proyek berbasis industri untuk meningkatkan pengalaman
                praktis santri. Dengan bimbingan para mentor yang berpengalaman,
                santri PeTIK siap bersaing di dunia kerja maupun membangun
                startup berbasis teknologi.
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default About;

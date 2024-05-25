import { Col, Container, Nav, Row } from 'react-bootstrap';
import makanansehat from '../images/makanansehat.png';
const Intro = () => {
  return (
    <div className="intro-container">
      <Container className="intro">
        <Row>
          <Col>
            <div className="title">Gizi yang</div>
            <div className="title">Menyehatkan,</div>
            <div className="title2">Olahraga yang</div>
            <div className="title2">Membahagiakan!</div>
            <div className="title3">Di AturPola, kami percaya bahwa kombinasi gizi yang tepat dan kegiatan fisik yang menyenangkan adalah kunci untuk hidup yang lebih baik.</div>
            <div>
              <button className="button">Mulai Perjalanan Sehat Anda Sekarang!</button>
            </div>
          </Col>
          <Col className="text-end">
            <div className="gambarsehat">
              <img width={'70%'} src={makanansehat} alt="Makanan Sehat" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

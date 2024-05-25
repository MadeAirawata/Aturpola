import { Col, Container, Nav, Row } from 'react-bootstrap';
import peningkatan from '../images/peningkatan.png';
import emosional from '../images/emosional.png';
import jantung from '../images/jantung.png';
import waktu from '../images/waktu.png';

const Health = () => {
  return (
    <div className="health-container">
      <Container className="health">
        <div className="title4">Kenapa Pola Hidup Sehat</div>
        <div className="title5">Penting?</div>
        <div className="title6">Ingatlah bahwa kesehatan adalah aset terbesar yang dimiliki setiap individu.</div>
        <Row className="health-row">
          <Col>
            <div className="column-content">
              <img width={'120px'} src={peningkatan} />
              <div className="title7">Peningkatan Energi</div>
              <div className="title8">Pola hidup sehat dapat mengurangi risiko berbagai penyakit kronis seperti diabetes, kanker, dan penyakit jantung.</div>
            </div>
          </Col>
          <Col>
            <div className="column-content">
              <img width={'120px'} src={emosional} />
              <div className="title7">Emosional Sejahtera</div>
              <div className="title8">Dengan pola hidup sehat, Anda dapat merasakan peningkatan kesejahteraan emosional dan kebahagiaan dalam kehidupan sehari-hari.</div>
            </div>
          </Col>
          <Col>
            <div className="column-content">
              <img width={'120px'} src={jantung} />
              <div className="title7">Penurunan Risiko Penyakit</div>
              <div className="title8">Pola hidup sehat dapat mengurangi risiko berbagai penyakit kronis seperti diabetes, kanker, dan penyakit jantung.</div>
            </div>
          </Col>
          <Col>
            <div className="column-content">
              <img width={'100px'} src={waktu} />
              <div className="title7">Banyak Waktu Luang</div>
              <div className="title8">Dengan pola hidup sehat, Anda dapat merasakan peningkatan kesejahteraan emosional dan kebahagiaan dalam kehidupan sehari-hari.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Health;

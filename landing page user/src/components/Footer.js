import { Col, Row, Container } from 'react-bootstrap';
import logooo from '../images/logooo.png';
import icon from '../images/icon.png';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="gambar5">
              <img src={logooo} />
            </div>
            <div className="title15">Buat hidup sehat jadi kebiasaan tanpa drama!</div>
            <div className="title16">Optimalkan performa hidupmu dengan rekomendasi gizi dan rencana latihan yang disesuaikan.</div>
          </Col>
          <Col className="column-footer">
            <div className="title17">Aku Ingin:</div>
            <li>
              <button className="button6">Buat akun</button>
            </li>
            <li>
              <button className="button6">Masuk akun</button>
            </li>
            <li>
              <button className="button6">Rekomendasi Nutrisi</button>
            </li>
            <li>
              <button className="button6">Masuk akun</button>
            </li>
            <li>
              <button className="button6">Komunitas</button>
            </li>
          </Col>
          <Col>
            <div className="title18">Kontak Kami:</div>
            <div className="title19">Email:</div>
            <div className="title19">info@aturpola.com</div>
            <div className="title19">Phone:</div>
            <div className="title19">+62 123 4567 890</div>
            <div className="title19">Alamat:</div>
            <div className="title19">Jalan Jendral Sudirman No. 123, Jakarta Pusat, Indonesia</div>
          </Col>
          <Col>
            <div className="title18">Temukan Kami di Media Sosial:</div>
            <img width={'200px'} src={icon} />
            <div className="title20">Didukung Oleh:</div>
            <div className="title21">Celerates Acceleration Program</div>
          </Col>
          <div className="horizontal-line1"></div>
          <div className="title22">2024@ All rights reserved. Design by Six Broters Team</div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

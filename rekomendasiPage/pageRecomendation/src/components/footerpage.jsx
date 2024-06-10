// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/Logo1.png'
import { Link } from 'react-router-dom';
import Icon from '../assets/iconmediasosial.png'

const footerpage = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <img src={Logo} alt="Logo" className="logo-footer-landingpageguest" />
                        <h1>Buat Hidup Sehat Jadi Kebiasaan Tanpa Drama!</h1>
                        <p>Optimalkan performa hidupmu dengan rekomendasi gizi dan rencana latihan yang disesuaikan.</p>
                        <div className="akuingin-footer-landingpageguest">
                            <h1>Aku Ingin:</h1>
                            <p>
                                <Link to="/buat-akun">Buat Akun</Link>
                            </p>
                            <p>
                                <Link to="/masuk-akun">Masuk Akun</Link>
                            </p>
                            <p>
                                <Link to="/rekomendasi-nutrisi">Rekomendasi Nutrisi</Link>
                            </p>
                            <p>
                                <Link to="/rekomendasi-latihan">Rekomendasi Latihan</Link>
                            </p>
                            <p>
                                <Link to="/komunitas">Komunitas</Link>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="kontak-landingpageguest">
                            <h1>Kontak Kami:</h1>
                            <p>Email: info@aturpola.com</p>
                            <h1>Phone:</h1>
                            <p>+62 123 4567 890</p>
                            <h1>Alamat</h1>
                            <p>Jalan Jendral Sudirman No. 123, Jakarta Pusat, Indonesia</p>
                        </div>
                        <div className="mediasosial-landingpageguest">
                            <h1>Temukan Kami Di Media Sosial:</h1>
                            <img src={Icon} alt="Social Media" />
                            <h1>Didukung oleh:</h1>
                            <p>Celerates Acceleration Program</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="horizontal-line">
                <Container>
                    <Row>
                        <Col>
                            <p>2024@ All rights reserved. Design by Six Brothers Team</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default footerpage

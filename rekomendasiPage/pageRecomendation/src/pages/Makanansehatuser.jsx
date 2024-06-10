import React from 'react'

const Makanansehatuser = () => {
    // eslint-disable-next-line no-undef
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className="Makanan-sehat">
            <header className="w-100 in-vh-100">
                <Container className='containercontent'>
                    <Row className="header-box d-flex align-items-center">
                        <div className="text">
                            <Col>
                                <h1>Hai, [Name User]!</h1>
                                <p>Ini Dia Rekomendasi Makanan Sehat untukmu!</p>
                            </Col>
                        </div>
                    </Row>
                    <Col>
                        <h1 className="header-title">
                            Ketahui Dulu Kebutuhan <span className="highlight">Nutrisi Harianmu!</span>
                        </h1>
                        <p className="description-text">
                            Ini Dia Rekomendasi Makanan Sehat untukmu!
                        </p>
                    </Col>
                    <Row style={{ justifyContent: 'center' }}>
                        {dataArray.map((data, index) => (
                            <Col key={index} style={{ display: 'flex', justifyContent: 'center', padding: '2px' }}>
                                <Card style={{
                                    width: '270px', height: '192px', margin: '2px'
                                }}>
                                    <Card.Body style={{ display: 'flex' }}>
                                        <Card.Img variant="top" src={data.img} style={{ width: '35px', height: '35px', marginRight: '10px' }} />
                                        <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', justifyContent: 'space-between' }}>
                                            <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.title}</Card.Title>
                                            <Card.Text style={{ fontSize: '13px' }}>{data.content}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Col>
                        <h1 className="header-title">
                            Rekomendasi Menu Sehat Untuk Kamu
                        </h1>
                    </Col>
                    <div className="row justify-content-center button-warning-gym" onClick={handleButtonClick}>
                        {filterMenu.map((val) => (
                            <div key={val.id} className='col-lg-3 col-md-4 col-sm-6 card my-3 border-0' style={{ cursor: 'pointer' }}>
                                <img src={val.img} alt={val.title} />
                                <h3 className='mt-3 fw-bold fs-6'>{val.title}</h3>
                                <p>{val.desc}</p>
                                <div className="d-flex icon-container">
                                    <img src={val.minyak} alt="Minyak" className="icon mx-2" /> 430
                                    <img src={val.keju} alt="Keju" className="icon mx-2" /> 15
                                    <img src={val.gizi} alt="Gizi" className="icon mx-2" /> 55
                                    <img src={val.karbohidrat} alt="Karbohidrat" className="icon mx-2" /> 23
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="custom-button ">
                        Lebih Banyak Menu
                    </button>
                </Container>
                {showPopup && (
                    <div className="popup-container">
                        <div className="popup-overlay" onClick={handleClosePopup}></div>
                        <div className="popup">
                            <div className="popup-content">
                                <img src={Popup} alt="" />
                                <span className="close-button" onClick={handleClosePopup}>&times;</span>
                                <h1>Ups! Kamu Memerlukan Akun untuk Mengakses Halaman Ini</h1>
                                <p>Ingin melihat lebih banyak detail tentang tempat gym tersebut? Silakan masuk atau daftar untuk mengakses konten lengkap kami.</p>
                                <button className='buttonMasukclose'>Masuk</button>
                            </div>
                        </div>
                    </div>
                )}
            </header >
        </div >
    )
}

export default Makanansehatuser

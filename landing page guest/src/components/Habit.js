import { Col, Container, Nav, Row, Accordion } from 'react-bootstrap';
import gambar5 from '../images/gambar5.png';

const Habit = () => {
  return (
    <div className="image-container">
      <img src={gambar5} alt="Descriptive Alt Text" className="image" />
      <div className="text-overlay">
        <h1>“We are what we repeatedly eat. Healthy eating is not an act, but a habit.”</h1>
        <div className="horizontal-line"></div>
        <div className="title14">Mari kita mulai perjalanan kesehatan kita bersama-sama.</div>
        <button className="button5">Bergabung Sekarang</button>
      </div>
    </div>
  );
};

export default Habit;

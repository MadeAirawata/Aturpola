import React, { useState } from 'react';
import logooo from './Images/logooo.png';
import makanansehat from './Images/makanansehat.png';
import peningkatan from './Images/peningkatan.png';
import gambarfitur1 from './Images/gambarfitur1.png';
import gambarfitur2 from './Images/gambarfitur2.png';
import gambarfitur3 from './Images/gambarfitur3.png';
import gambarfitur4 from './Images/gambarfitur4.png';
import iconmediasosial from './Images/iconmediasosial.png';
import gambaryouare from './Images/gambaryouare.png';
import user from './Images/user.png';

const Landingpageguest = () => {
  const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="border-b border-gray-200">
        <button className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none" onClick={toggleAccordion}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">{title}</span>
            <span>{isOpen ? '-' : '+'}</span>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 bg-white">
            <p className="text-gray-700">{content}</p>
          </div>
        )}
      </div>
    );
  };

  const items = [
    {
      title: 'Apa yang membedakan AturPola dari platform kesehatan lainnya?',
      content: 'Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.',
    },
    {
      title: 'Bagaimana saya bisa memulai menggunakan AturPola?',
      content: 'Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.',
    },
    {
      title: 'Apakah AturPola tersedia untuk semua usia?',
      content: 'Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.',
    },
    {
      title: 'Apakah saya perlu memiliki pengetahuan kesehatan sebelum menggunakan AturPola?',
      content: 'Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.',
    },
    {
      title: 'Apakah ada biaya atau langganan bulanan untuk menggunakan AturPola?',
      content: 'Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.',
    },
  ];

  return (
    <div>
      <div className="container-landingpageguest">
        <nav className="navbar">
          <a href="#">Makanan Sehat</a>
          <a href="#">Latihan Fisik</a>
          <a href="#">Komunitas</a>
          <div className="user">
            <a href="#">
              <img width="30%" src={user}></img>
            </a>
          </div>
          <div className="logo-landingpage-guest">
            <img src={logooo} alt="Logo"></img>
          </div>
        </nav>
        <div className="hero-section-guest">
          <div className="text-herosection">
            <h1>Gizi Yang</h1>
            <h1>Menyehatkan</h1>
          </div>
          <div className="text-herosection1">
            <h1>Olahraga Yang</h1>
            <h1>Membahagiakan!</h1>
          </div>
          <div className="text-herosection2">
            <h1>Di AturPola, kami percaya bahwa kombinasi gizi yang tepat dan </h1>
            <h1>kegiatan fisik yang menyenangkan adalah kunci untuk</h1>
            <h1>yang lebih baik.</h1>
          </div>
          <button className="button-herosection">Bergabunglah Sekarang!</button>
        </div>
        <div className="makanan-herosection">
          <img src={makanansehat} alt="Makanan Sehat"></img>
        </div>

        <div className="pola-hidup">
          <div className="kenapa-polahidup">
            <h1>Kenapa Pola Hidup Sehat</h1>
          </div>
          <div className="penting-polahidup">
            <h1>Penting?</h1>
          </div>
          <div className="teks-polahidup">
            <p>Ingatlah bahwa kesehatan adalah aset terbesar yang dimiliki setiap individu.</p>
          </div>
          <div className="icon-polahidup">
            <div className="icon">
              <img src={peningkatan} alt="Peningkatan Energi"></img>
              <h1>Peningkatan Energi</h1>
              <div className="icon-text">Pola hidup sehat dapat mengurangi risiko berbagai penyakit kronis seperti diabetes, kanker, dan penyakit jantung.</div>
            </div>
            <div className="icon">
              <img src={peningkatan} alt="Emosional Sejahtera"></img>
              <h1>Emosional Sejahtera</h1>
              <div className="icon-text">Dengan pola hidup sehat, Anda dapat merasakan peningkatan kesejahteraan emosional dan kebahagiaan dalam kehidupan sehari-hari.</div>
            </div>
            <div className="icon">
              <img src={peningkatan} alt="Penurunan Risiko Penyakit"></img>
              <h1>Penurunan Risiko Penyakit</h1>
              <div className="icon-text">Pola hidup sehat dapat mengurangi risiko berbagai penyakit kronis seperti diabetes, kanker, dan penyakit jantung.</div>
            </div>
            <div className="icon">
              <img src={peningkatan} alt="Banyak Waktu Luang"></img>
              <h1>Banyak Waktu Luang</h1>
              <div className="icon-text">Dengan pola hidup sehat, Anda dapat merasakan peningkatan kesejahteraan emosional dan kebahagiaan dalam kehidupan sehari-hari.</div>
            </div>
          </div>
        </div>
        <div className="fitur-landingpageguest">
          <h1>Fitur Unggulan Kami</h1>
          <p>Cari beragam rekomendasi nutrisi dan latihan fisik untuk Anda</p>
        </div>
        <div className="card-landingpageguest">
          <div className="card-1">
            <img src={gambarfitur1} alt="Fitur 1"></img>
            <h1>Rekomendasi Nutrisi Kamu</h1>
            <p>Temukan menu makanan sehat dan rahasia nutrisinya. Pesan hidangan favoritmu dalam sekejap.</p>
            <button className="button-fitur">Mulai!</button>
          </div>
          <div className="card-1">
            <img src={gambarfitur2} alt="Fitur 2"></img>
            <h1>Rencanakan Latihanmu</h1>
            <p>Akses latihan yang disesuaikan dengan kebutuhanmu. Mulai dari video workout hingga penemuan gym terdekat.</p>
            <button className="button-fitur">Mulai!</button>
          </div>
          <div className="card-1">
            <img src={gambarfitur3} alt="Fitur 3"></img>
            <h1>Bergabunglah Dengan Komunitas</h1>
            <p>Temukan inspirasi, berbagi kisah, dan dapatkan dukungan dalam komunitas sehat kami.</p>
            <button className="button-fitur">Mulai!</button>
          </div>
          <div className="card-1">
            <img src={gambarfitur4} alt="Fitur 4"></img>
            <h1>Pesan Makanan & Booking Gym</h1>
            <p>Pesan makanan sehat favoritmu dan booking gym secara langsung dalam satu platform yang praktis.</p>
            <button className="button-fitur">Mulai!</button>
          </div>
        </div>
        <div className="question-landingpage">
          <h1>Frequently Asked Questions</h1>
          <p>Temukan jawaban untuk pertanyaan Anda di sini.</p>
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto mt-4">
            {items.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
        <div className="youare-landingpageguest">
          <div className="content-youare">
            <img src={gambaryouare} alt="You Are"></img>
            <h1>“We are what we repeatedly eat. Healthy eating is not an act, but a habit.”</h1>
            <p>Mari Kita Mulai Perjalanan Sehat Kita bersama-sama</p>
            <button className="button-youare-landingpageguest">Bergabung Sekarang</button>
          </div>
        </div>
        <div className="footer-landingpageguest">
          <div className="logo-footer-landingpageguest">
            <img src={logooo} alt="Logo"></img>
            <h1>Buat Hidup Sehat Jadi Kebiasaan Tanpa Drama!</h1>
            <p>Optimalkan performa hidupmu dengan rekomendasi gizi dan rencana latihan yang disesuaikan.</p>
          </div>
          <div className="akuingin-footer-landingpageguest">
            <h1>Aku Ingin:</h1>
            <p>
              <a href="#">Buat Akun</a>
            </p>
            <p>
              <a href="#">Masuk Akun</a>
            </p>
            <p>
              <a href="#">Rekomendasi Nutrisi</a>
            </p>
            <p>
              <a href="#">Rekomendasi Latihan</a>
            </p>
            <p>
              <a href="#">Komunitas</a>
            </p>
          </div>
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
            <img src={iconmediasosial} alt="Social Media"></img>
            <h1>Didukung oleh:</h1>
            <p>Celerates Acceleration Program</p>
          </div>
        </div>
      </div>
      <div className="horizontal-line">
        <p>2024@ All rights reserved. Design by Six Broters Team</p>
      </div>
    </div>
  );
};

export default Landingpageguest;

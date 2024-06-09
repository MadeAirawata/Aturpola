import React, { useState } from 'react';
import logooo from './Images/logooo.png';
import user from './Images/user.png';
import herosectiongym from './Images/herosectiongym.png';
import tersediainstruktur from './Images/tersediainstruktur.png';
import tanpainstruktur from './Images/tanpainstruktur.png';
import cardgym1 from './Images/cardgym1.png';
import cardgym2 from './Images/cardgym2.png';
import cardgym3 from './Images/cardgym3.png';
import cardgym4 from './Images/cardgym4.png';
import cardgym5 from './Images/cardgym5.png';
import cardgym6 from './Images/cardgym6.png';
import cardgym7 from './Images/cardgym7.png';
import cardgym8 from './Images/cardgym8.png';
import cardgym9 from './Images/cardgym9.png';
import cardgym10 from './Images/cardgym10.png';
import cardgym11 from './Images/cardgym11.png';
import cardgym12 from './Images/cardgym12.png';
import cardgym13 from './Images/cardgym13.png';
import cardgym14 from './Images/cardgym14.png';
import cardgym15 from './Images/cardgym15.png';
import cardgym16 from './Images/cardgym16.png';
import pathicon from './Images/pathicon.png';
import iconmediasosial from './Images/iconmediasosial.png';

const gymData = [
  {
    img: cardgym1,
    name: 'Fit & Flex Gym',
    hours: 'Senin-Jumat: 06.00 - 22.00, Sabtu-Minggu: 08.00 - 20.00',
    city: 'Jakarta Selatan',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym2,
    name: 'Iron Strength Gym',
    hours: 'Senin-Sabtu: 05.00 - 23.00, Minggu: 07.00 - 21.00',
    city: 'Surabaya',
    instruktur: tanpainstruktur,
  },
  {
    img: cardgym3,
    name: 'ActiveLife Fitness Center',
    hours: 'Senin-Jumat: 07.00 - 21.00, Sabtu: 08.00 - 18.00',
    city: 'Bandung',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym4,
    name: 'PowerFit Gym',
    hours: 'Setiap Hari: 06.00 - 23.00',
    city: 'Yogyakarta',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym5,
    name: 'PowerFit Gym',
    hours: 'Senin - Jumat: 06:00 - 22:00 Sabtu - Minggu: 07:00 - 20:00',
    city: 'Jakarta Pusat',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym6,
    name: 'Elite Fitness Center',
    hours: 'Senin - Jumat: 05:30 - 21:00 Sabtu - Minggu: 06:00 - 19:00',
    city: 'Surabaya',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym7,
    name: 'Iron Body Gym',
    hours: 'Senin - Minggu: 06:00 - 23:00',
    city: 'Bandung',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym8,
    name: 'Xtreme Fitness Studio',
    hours: 'Senin - Jumat: 05:00 - 22:00 Sabtu - Minggu: 06:00 - 20:00',
    city: 'Medan',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym9,
    name: 'Fit Nation',
    hours: 'Senin - Jumat: 06:30 - 21:00 Sabtu - Minggu: 07:00 - 18:00',
    city: 'Semarang',
    instruktur: tanpainstruktur,
  },
  {
    img: cardgym10,
    name: 'Olympus Gym',
    hours: 'Senin - Minggu: 24 Jam',
    city: 'Jakarta Selatan',
    instruktur: tanpainstruktur,
  },
  {
    img: cardgym11,
    name: 'Stronghold Fitness',
    hours: 'Senin - Minggu: 06:00 - 23:00',
    city: 'Surabaya',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym12,
    name: 'City Fitness Center',
    hours: 'Senin - Jumat: 07:00 - 22:00 Sabtu - Minggu: 08:00 - 20:00',
    city: 'Bandung',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym13,
    name: 'Body Tech Gym',
    hours: 'Senin - Minggu: 06:00 - 21:00',
    city: 'Surabaya',
    instruktur: tersediainstruktur,
  },
  {
    img: cardgym14,
    name: 'Vitality Fitness Club',
    hours: 'Senin - Jumat: 06:00 - 20:00 Sabtu - Minggu: 07:00 - 19:00',
    city: 'Semarang',
    instruktur: tanpainstruktur,
  },
  {
    img: cardgym15,
    name: 'Flex Fitness Studio',
    hours: 'Senin - Minggu: 07:00 - 22:00',
    city: 'Balikpapan',
    instruktur: tanpainstruktur,
  },
  {
    img: cardgym16,
    name: 'Core Strength Gym',
    hours: 'Senin - Jumat: 05:00 - 23:00 Sabtu - Minggu: 06:00 - 21:00',
    city: 'Yogyakarta',
    instruktur: tersediainstruktur,
  },
];

const Rekomendasigymuser = () => {
  const [searchCity, setSearchCity] = useState('');
  const [filteredGyms, setFilteredGyms] = useState(gymData);

  const handleSearchChange = (event) => {
    const city = event.target.value;
    setSearchCity(city);
    const filtered = gymData.filter((gym) => gym.city.toLowerCase().includes(city.toLowerCase()));
    setFilteredGyms(filtered);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#">Makanan Sehat</a>
        <a href="#">Latihan Fisik</a>
        <a href="#">Komunitas</a>
        <div className="user">
          <a href="#">Masuk</a>
        </div>
        <div className="logo-landingpage-guest">
          <img src={logooo} alt="Logo"></img>
        </div>
      </nav>
      <div className="herosection-gym">
        <img src={herosectiongym}></img>
        <h1>Mari Kita Mulai Bergerak Bersama!</h1>
        <p>Temukan gym terdekat dan mulai bergerak! Ayo, jadikan langkah pertama menuju gaya hidup sehat hari ini. </p>
      </div>
      <div className="search-gym">
        <p>Kota</p>
        <input type="text" placeholder="Masukkan Kota Anda..." value={searchCity} onChange={handleSearchChange} className="search-input" />
      </div>
      <div className="rekomendasi-gym">
        <h1>Rekomendasi Tempat Gym</h1>
      </div>
      <div className="rekomendasi-gym-container">
        {filteredGyms.map((gym, index) => (
          <button key={index} className="card-gym">
            <img src={gym.img} alt={gym.name}></img>
            <h1>{gym.name}</h1>
            <p>{gym.hours}</p>
            <div className="card-gym-instruktur">
              <img width="15%" src={gym.instruktur} alt="Instruktur"></img>
              <h2>{gym.city}</h2>
            </div>
          </button>
        ))}
      </div>
      <div className="showing-gym">
        <h1>Showing 1-12 of {filteredGyms.length}</h1>
        <div className="flex">
          <button className="w-[43px] h-[30px] border-[0.1px] border-[#D5D5D5] rounded-l-lg flex items-center justify-center cursor-pointer hover:bg-gray-500/20 active:scale-90 transition-all duration-150">
            <img src={pathicon} alt="" className="rotate-180 opacity-50" />
          </button>
          <button className="w-[43px] h-[30px] border-[0.1px] border-[#D5D5D5] rounded-r-lg flex items-center justify-center cursor-pointer hover:bg-gray-500/20 active:scale-90 transition-all duration-150">
            <img src={pathicon} alt="" className="" />
          </button>
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
  );
};

export default Rekomendasigymuser;

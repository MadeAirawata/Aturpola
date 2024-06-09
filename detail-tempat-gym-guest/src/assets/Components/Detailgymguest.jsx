import React, { useState } from 'react';
import logooo from './Images/logooo.png';
import cardgym6 from './Images/cardgym6.png';
import tersediainstruktur from './Images/tersediainstruktur.png';
import iconmediasosial from './Images/iconmediasosial.png';
import warninggymguest from '../Components/Images/warninggymguest.png';

const Detailgymguest = () => {
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

      <div className="warning-gym">
        <div className="warning-gym-pictures">
          <img src={warninggymguest}></img>
          <h1>Ups! Kamu Memerlukan Akun untuk Mengakses Halaman Ini</h1>
          <p>Ingin melihat lebih banyak detail tentang tempat gym tersebut? Silakan masuk atau daftar untuk mengakses konten lengkap kami.</p>
          <button className="button-warning-gym">Masuk</button>
        </div>
      </div>

      <div className="information-gymuser">
        <a href="#">Home > </a>
        <a href="#">Latihan Fisik > </a>
        <a href="#">Elite Fitness Center </a>
        <h1>Elite Fitness Center</h1>
        <div className="information-gymuser-container">
          <img src={cardgym6}></img>
          <h1>Deskripsi Gym:</h1>
          <p>
            Elite Fitness Center merupakan pusat kebugaran yang lengkap dengan berbagai fasilitas modern dan instruktur berkualitas. Terletak di pusat kota Surabaya, gym ini menyediakan berbagai macam peralatan fitness dan program pelatihan
            untuk membantu Anda mencapai tujuan kesehatan dan kebugaran Anda. Dengan suasana yang nyaman dan ramah, Elite Fitness Center adalah tempat yang sempurna untuk meningkatkan kebugaran Anda.
          </p>
        </div>
        <div className="information-gymuser-container">
          <div className="information-gymcard">
            <h1>Alamat Gym:</h1>
            <p>Jl. Raya Darmo Permai III No. 45, Surabaya, Jawa Timur Kode Pos: 60241</p>
            <h1>Fasilitas Gym:</h1>
            <p>-Area latihan bebas</p>
            <p>-Peralatan kardio dan kekuatan terbaru</p>
            <p>-Studio kelas grup</p>
            <p>-Ruang personal training</p>
            <p>-Sauna dan kolam renang</p>
            <p>-Kafe dan area lounge</p>
            <div className="instruktur-gymcard">
              <h1>Tersedia Instruktur</h1>
            </div>
            <p>
              Instruktur kami adalah para profesional yang berpengalaman dan berdedikasi dalam membantu Anda mencapai potensi kebugaran Anda yang terbaik. Mereka siap memberikan bimbingan dan dukungan untuk membantu Anda meraih hasil yang
              diinginkan.
            </p>
            <div className="logo-instruktur-gym">
              <img width="8%" src={tersediainstruktur}></img>
            </div>
          </div>
          <div className="information-gymcard2">
            <h1>Mulailah Perjalanan Kebugaran Anda di Elite Fitness Center!</h1>
            <p>Jadwalkan sesi latihan Anda sekarang dan mulailah perjalanan Anda menuju tubuh yang sehat dan bugar di Elite Fitness Center!</p>
            <button className="button-gymcard2">Pesan Disini</button>
          </div>
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

export default Detailgymguest;

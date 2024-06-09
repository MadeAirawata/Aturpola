import React from 'react';
import logo from '../assets/logooo.png';

function Footer() {
  return (
    <footer className="bg-yellow-100 p-4 ">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>
        <img src={logo} alt="AturPola Logo" className="h-16 mr-2 ml-16" />
          <p>Optimalkan performa hidupmu dengan rekomendasi gizi dan rencana latihan yang disesuaikan.</p>
        </div>
        <div>
          <h3 className="font-bold text-green-600">Aku ingin:</h3>
          <ul className="list-disc list-inside">
            <li>Buat akun</li>
            <li>Masuk akun</li>
            <li>Rekomendasi Nutrisi</li>
            <li>Rekomendasi Latihan</li>
            <li>Komunitas</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-green-600">Kontak Kami:</h3>
          <p>Email: info@aturpola.com</p>
          <p>Phone: +62 123 4567 890</p>
          <p>Alamat: Jalan Jendral Sudirman No. 123, Jakarta Pusat, Indonesia</p>
        </div>
      </div>
      <hr className="my-4 border-green-600" />
      <div className="text-center mt-4">
        <p>2024@ All rights reserved. Design by Six Broters Team</p>
      </div>
    </footer>
  );
}

export default Footer;

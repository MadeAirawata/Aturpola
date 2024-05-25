import React from 'react';
import './style/login.css';
import images2 from '../components/asset/images2.png';
const Forgotpassword = () => {
  return (
    <div className="wrapper">
      <form action="">
        <img width="50px" src={images2} />
        <h1>Lupa Password!</h1>
        <div className="input-box">
          <p>Masukkan Email Anda</p>
          <input type="text" placeholder="Email" required />
        </div>
        <div className="button-submit">
          <button type="submit">Get Verification Code</button>
        </div>
        <div className="register-link">
          <h>Kembali Ke</h> <a href="#"> Login</a>
        </div>
      </form>
    </div>
  );
};
export default Forgotpassword;

import React from 'react'
import { useState } from 'react';
import './LoginSignup.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../Assets/logo.png'
// eslint-disable-next-line no-unused-vars

const fieldData = [
    { id: 'Nama Lengkap', label: 'Nama Lengkap', type: 'text' },
    { id: 'Email', label: 'Email', type: 'email' },
    { id: 'Password', label: 'Password', type: 'password' },
    { id: 'Konfirmasi Password', label: 'Confirm Password', type: 'password' }
];


const signup = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = useState({ //hooks
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };
    return (
        <div className="container" >
            <div className="sign-up">
                <header className="header">
                    <img src={Logo} alt="" />
                    <h1 className="title">
                        <span className="part1">Register</span> <span className="part2">Now!</span>
                    </h1>
                </header>

                <form className="signupForm" onSubmit={handleSubmit}>
                    {fieldData.map((field) => (
                        <div key={field.id} className="form-group">
                            <label htmlFor={field.id}>{field.label}</label>
                            <input
                                className='input'
                                type={field.type === 'password' && showPassword[field.id] ? 'text' : field.type}
                                id={field.id}
                                value={formData[field.id]}
                                onChange={handleChange}
                                placeholder={field.id}
                                autoComplete='on'
                                required
                            />
                            {field.type === 'password' && (
                                <span
                                    className="password-toggle-icon"
                                    onClick={() => togglePasswordVisibility(field.id)}
                                >
                                    {showPassword[field.id] ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            )}
                        </div>
                    ))}
                    <button type="submit">Register</button>
                    <div className="forgot-password">Sudah punya akun? <span>Login</span></div>
                </form>
            </div>
            {/* Login */}
            <div className="content">
                <h1>Selamat Datang di AturPola!</h1>
                <p>Dapatkan akses ke fitur-fitur canggih kami untuk meraih gaya hidup sehat yang Anda impikan. Mari bergabung bersama kami dalam perjalanan menuju kesehatan dan kebugaran yang lebih baik!</p>
            </div>

        </div >
    );
}

export default signup
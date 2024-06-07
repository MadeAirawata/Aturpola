// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/Loginassets/logo.png';
import '../Signuppage/signup.css'

const fieldData = [
    { id: 'name', label: 'Nama Lengkap', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
    { id: 'confirmPassword', label: 'Konfirmasi Password', type: 'password' }
];

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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
        <div className="container">
            <div className="sign-up">
                <header className="header">
                    <img src={Logo} alt="Logo" />
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
                                placeholder={field.label}
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
                    <div className="forgot-password">Sudah punya akun? <span><a href="/">Login</a></span></div>
                </form>
            </div>
            <div className="content">
                <h1>Selamat Datang di AturPola!</h1>
                <p>Dapatkan akses ke fitur-fitur canggih kami untuk meraih gaya hidup sehat yang Anda impikan. Mari bergabung bersama kami dalam perjalanan menuju kesehatan dan kebugaran yang lebih baik!</p>
            </div>
        </div>
    );
};

export default Signup;

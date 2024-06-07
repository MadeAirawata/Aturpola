// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../../assets/Loginassets/logo.png'; // Update the path to your logo
import '../Loginpage/login.css'

const fieldData = [
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
];


const Login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formDatalogin, setFormdatalogin] = useState({
        email: '',
        password: '',
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState({
        password: false,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormdatalogin({
            ...formDatalogin,
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
        console.log('Form submitted:', formDatalogin);
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
                                value={formDatalogin[field.id]}
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
                    <button type="submit">Login</button>
                    <div className="forgot-password">Belum punya akun? <span><a href="./components/koginpages/Login">Sign up</a><br /></span> Atau <span><a href="#">Lupa Password</a></span></div>
                </form>
            </div>
            <div className="content">
                <h1>Selamat Datang di Kembali!</h1>
                <p>Kami senang melihat Anda kembali di AturPola. Silakan masukkan informasi login Anda untuk melanjutkan perjalanan kesehatan Anda bersama kami.</p>
            </div>
        </div>
    );
}

export default Login; 
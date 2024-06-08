// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Logo from '../../assets/Loginassets/logo.png';
import '../Onboarding/onboarding.css'

function Onboarding() {
    const [formData, setFormData] = useState({
        kelamin: '',
        activities: '',
        goals: '',
        weight: '',
        height: '',
        age: ''
    });

    const formFields = [
        { label: 'Jenis Kelamin', name: 'kelamin', type: 'text' },
        { label: 'Jenis Kegiatan', name: 'activities', type: 'text' },
        { label: 'Goals', name: 'goals', type: 'text' },
        { label: 'Berat Badan', name: 'weight', type: 'number' },
        { label: 'Tinggi Badan', name: 'height', type: 'number' },
        { label: 'Umur', name: 'age', type: 'number' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Lakukan apa pun dengan data form di sini
    };

    return (
        <div className="container">
            <div className="onboarding">
                <header className="headeronboarding">
                    <img src={Logo} alt="" />
                    <h1 className='judul'>Silakan Lengkapi Data Diri Anda</h1>
                </header>
                <form className='formonboarding' onSubmit={handleSubmit}>
                    {formFields.slice(0, 3).map((field) => (
                        <div key={field.name}>
                            <label className='Label1'>
                                {field.label}:
                                <input
                                    className='inputform'
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange} />
                            </label>
                        </div>
                    ))}
                    <div className="horizontal-fields">
                        {formFields.slice(3).map((field) => (
                            <div key={field.name} className="horizontal-field">
                                <label className='Label2'>
                                    {field.label}:
                                    <input
                                        className='inputform2'
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange} />
                                </label>
                            </div>
                        ))}
                    </div>
                </form>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </div>
            <div className="content">
                <h1>Temukan kekuatan dan inspirasi untuk mengubah hidup Anda.</h1>
                <p>Sebelum kita mulai, mari lengkapi beberapa informasi penting untuk mempersonalisasi pengalaman Anda.</p>
            </div>
        </div>
    );
}

export default Onboarding

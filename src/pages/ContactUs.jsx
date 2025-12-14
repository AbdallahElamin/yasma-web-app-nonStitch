import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form Submitted', formData);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>{t('nav.contact')}</h1>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                    {/* Contact Info */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--color-primary)' }}><MapPin size={24} /></div>
                                <p>123 Business Road, Riyadh, Saudi Arabia</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--color-primary)' }}><Phone size={24} /></div>
                                <p>+966 50 000 0000</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--color-primary)' }}><Mail size={24} /></div>
                                <p>info@yasmaksa.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--color-bg-card)', padding: '2rem', borderRadius: '12px' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text" name="name" placeholder="Full Name" required
                                value={formData.name} onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#121212', color: 'white' }}
                            />
                            <input
                                type="email" name="email" placeholder="Email" required
                                value={formData.email} onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#121212', color: 'white' }}
                            />
                            <input
                                type="text" name="subject" placeholder="Subject" required
                                value={formData.subject} onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#121212', color: 'white' }}
                            />
                            <textarea
                                name="message" placeholder="Message" rows="5" required
                                value={formData.message} onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #333', background: '#121212', color: 'white' }}
                            ></textarea>

                            <button type="submit" disabled={status === 'sending'} style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                                <Send size={18} />
                            </button>
                            {status === 'success' && <p style={{ color: '#4caf50', textAlign: 'center' }}>Message sent successfully!</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

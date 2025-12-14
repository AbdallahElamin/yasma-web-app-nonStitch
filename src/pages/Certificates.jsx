import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Certificates = () => {
    const { t } = useLanguage();

    const certs = [
        { title: 'ISO 9001:2015', desc: 'Quality Management System', image: 'https://placehold.co/800x600?text=ISO+9001' },
        { title: 'Safety Excellence', desc: 'Awarded for Zero Accidents in 2024', image: 'https://placehold.co/800x600?text=Safety+Award' },
        { title: 'Vendor Qualification', desc: 'Approved vendor for major government projects.', image: 'https://placehold.co/800x600?text=Vendor+Cert' }
    ];

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>{t('nav.certificates')}</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {certs.map((cert, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            gap: '2rem',
                            backgroundColor: 'var(--color-bg-card)',
                            padding: '2rem',
                            borderRadius: '12px'
                        }}>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ color: 'var(--color-primary)' }}>{cert.title}</h2>
                                <p style={{ fontSize: '1.2rem', color: '#ccc' }}>{cert.desc}</p>
                            </div>
                            <div style={{ flex: 1 }}>
                                <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '8px' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;

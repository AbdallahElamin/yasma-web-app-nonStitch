import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
    const { t } = useLanguage();

    const sections = [
        { title: 'History', content: 'YASMA For Contracting Co. was established with a commitment to excellence. Over the years, we have executed numerous high-profile projects, building a reputation for reliability and quality engineering.' },
        { title: 'Vision', content: 'To be the partner of choice for construction solutions in the Kingdom, known for our innovative approach and unwavering commitment to quality.' },
        { title: 'Values', content: 'Integrity, Safety, Quality, and Innovation are the pillars of our operations. We believe in building long-term relationships with our clients based on trust.' }
    ];

    const sisterCompanies = [
        { name: 'Enwani Real Estate', logo: 'https://placehold.co/200x100?text=Enwani' },
        { name: 'United Step Company', logo: 'https://placehold.co/200x100?text=United+Step' },
        { name: 'Al Sharq Stations', logo: 'https://placehold.co/200x100?text=Al+Sharq' }
    ];

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>{t('nav.about')}</h1>

                <div style={{ display: 'grid', gap: '4rem', marginBottom: '4rem' }}>
                    {sections.map((sec, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                            gap: '2rem',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h3>{sec.title}</h3>
                                <p style={{ color: '#ccc', lineHeight: '1.8' }}>{sec.content}</p>
                            </div>
                            <div style={{ flex: 1, minWidth: '300px', height: '300px', backgroundColor: '#222', borderRadius: '12px' }}>
                                {/* Placeholder for image */}
                                <img src={`https://placehold.co/600x400?text=${sec.title}`} alt={sec.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Sister Companies</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {sisterCompanies.map((company, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#fff',
                                padding: '1rem',
                                borderRadius: '8px',
                                width: '250px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src={company.logo} alt={company.name} style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

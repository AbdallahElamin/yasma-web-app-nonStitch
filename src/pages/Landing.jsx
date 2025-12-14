import React from 'react';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

const Landing = () => {
    const { t } = useLanguage();

    return (
        <div className="landing-page">
            <Hero />

            {/* Introduction / About Snippet */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-primary)' }}>{t('nav.about')}</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
                        YASMA is a leading construction and contracting company in Saudi Arabia, dedicated to delivering excellence in every project.
                    </p>
                </div>
            </section>

            {/* Services / Projects Teaser could go here */}
        </div>
    );
};

export default Landing;

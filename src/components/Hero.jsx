import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const isRtl = language === 'ar';

    return (
        <section className="hero" style={{
            position: 'relative',
            height: '80vh',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center'
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: '1rem',
                    lineHeight: 1.2
                }}>
                    {t('hero.title')}
                </h1>
                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    marginBottom: '2rem',
                    color: '#ddd'
                }}>
                    {t('hero.subtitle')}
                </p>
                <button
                    onClick={() => navigate('/projects')}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    {t('hero.cta')}
                    {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
            </div>
        </section>
    );
};

export default Hero;

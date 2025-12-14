import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{ backgroundColor: '#000', padding: '2rem 0', marginTop: 'auto', textAlign: 'center', borderTop: '1px solid #333' }}>
            <div className="container">
                <p style={{ color: '#888', marginBottom: '0.5rem' }}>{t('footer.rights')}</p>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>info@yasmaksa.com | +966 50 000 0000</p>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { to: '/', label: 'nav.home' },
        { to: '/about', label: 'nav.about' },
        { to: '/projects', label: 'nav.projects' },
        { to: '/certificates', label: 'nav.certificates' },
        { to: '/contact', label: 'nav.contact' },
    ];

    return (
        <nav className="navbar" style={{ backgroundColor: '#1E1E1E', padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Branding */}
                <div className="brand" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    YASMA
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div className="links" style={{ display: 'flex', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => (isActive ? 'active-link' : '')}
                                style={({ isActive }) => ({
                                    color: isActive ? 'var(--color-primary)' : 'white',
                                    fontWeight: isActive ? 'bold' : 'normal'
                                })}
                            >
                                {t(link.label)}
                            </NavLink>
                        ))}
                    </div>

                    <button onClick={toggleLanguage} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>
                        <Globe size={16} />
                        {t('nav.lang')}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={toggleMenu} style={{ background: 'none', color: 'white' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Simple Mobile Menu Implementation (inline styles for speed, better in CSS) */}
            <style>{`
         @media (max-width: 768px) {
           .desktop-menu .links { display: none !important; }
           .mobile-toggle { display: block !important; }
           
           /* Mobile Menu Dropdown would go here or handled via state */
         }
       `}</style>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu" style={{
                    position: 'absolute', top: '70px', left: 0, right: 0, background: '#1E1E1E', padding: '1rem',
                    display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid #333'
                }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            style={{ color: 'white', padding: '0.5rem' }}
                        >
                            {t(link.label)}
                        </NavLink>
                    ))}
                    <button onClick={() => { toggleLanguage(); setIsOpen(false); }} style={{ width: 'fit-content' }}>
                        {t('nav.lang')}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

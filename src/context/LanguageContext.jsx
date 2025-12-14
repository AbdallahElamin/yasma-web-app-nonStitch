import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../translations/en.json';
import ar from '../translations/ar.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const translations = language === 'en' ? en : ar;

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    useEffect(() => {
        document.documentElement.setAttribute('dir', language === 'en' ? 'ltr' : 'rtl');
        document.documentElement.lang = language;
    }, [language]);

    // key string usage: "nav.home"
    const t = (key) => {
        const keys = key.split('.');
        let value = translations;
        for (const k of keys) {
            value = value[k];
            if (!value) return key;
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

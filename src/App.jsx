import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import Projects from './pages/OurProjects';
import Certificates from './pages/Certificates';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar />
                    <main style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/certificates" element={<Certificates />} />
                            <Route path="/contact" element={<ContactUs />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;

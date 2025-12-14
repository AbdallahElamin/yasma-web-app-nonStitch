import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    const projectData = [
        { id: 1, title: 'Luxury Villa A', category: 'Residential', image: 'https://placehold.co/600x400?text=Villa+A' },
        { id: 2, title: 'City Tower', category: 'Commercial', image: 'https://placehold.co/600x400?text=City+Tower' },
        { id: 3, title: 'Highway Station', category: 'Fuel Stations', image: 'https://placehold.co/600x400?text=Fuel+Station' },
        { id: 4, title: 'Private Palace B', category: 'Residential', image: 'https://placehold.co/600x400?text=Palace+B' },
        { id: 5, title: 'Grand Mall', category: 'Commercial', image: 'https://placehold.co/600x400?text=Mall' },
        { id: 6, title: 'Express Fuel', category: 'Fuel Stations', image: 'https://placehold.co/600x400?text=Express+Fuel' },
    ];

    const categories = ['All', 'Residential', 'Commercial', 'Fuel Stations'];

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projectData;
        return projectData.filter(p => p.category === filter);
    }, [filter]);

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>{t('nav.projects')}</h1>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                backgroundColor: filter === cat ? 'var(--color-primary)' : 'transparent',
                                color: filter === cat ? 'black' : 'var(--color-primary)',
                                border: '1px solid var(--color-primary)'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card" style={{
                            backgroundColor: 'var(--color-bg-card)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s'
                        }}>
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginTop: 0 }}>{project.title}</h3>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-muted)',
                                    display: 'inline-block',
                                    border: '1px solid #333',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px'
                                }}>
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

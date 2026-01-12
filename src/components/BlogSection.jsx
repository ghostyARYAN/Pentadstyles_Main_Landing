import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Reviving the Lost Art of Jamdani Weaving",
        excerpt: "Discover how our artisan partners in Bengal are breathing new life into the centuries-old tradition of Jamdani, blending heritage patterns with contemporary aesthetics.",
        author: "Priya Sharma",
        date: "Oct 12, 2024",
        category: "Heritage",
        image: "/images/mjq9i12n-e8qqspt.png"
    },
    {
        id: 2,
        title: "How AI is Helping Rural Artisans Reach Global Markets",
        excerpt: "PentadStyles' new AI Studio is revolutionizing product photography, allowing weavers to showcase their work professionally without expensive setups.",
        author: "Rahul Verma",
        date: "Nov 05, 2024",
        category: "Technology",
        image: "/images/mjq9i121-ain7t5f.png"
    },
    {
        id: 3,
        title: "Sustainable Fashion: Why Handloom is the Future",
        excerpt: "In a world of fast fashion, handloom textiles offer a sustainable, eco-friendly alternative. Learn about the carbon footprint of your saree.",
        author: "Ananya Gupta",
        date: "Nov 18, 2024",
        category: "Sustainability",
        image: "/images/mjq9i12n-evquage.png"
    }
];

export function BlogSection() {
    return (
        <section id="blog" className="section-padding container">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
                <h5 style={{ color: 'var(--color-glow-1)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1rem' }}>Our Stories</h5>
                <h2>Insights from the Loom</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', marginTop: '1rem' }}>
                    Stories of heritage, innovation, and the people behind the fabric.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {blogPosts.map((post) => (
                    <div key={post.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', transition: 'var(--transition)' }}>
                        <div style={{ height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <span style={{ color: 'var(--color-glow-2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Calendar size={14} /> {post.date}
                                </div>
                            </div>
                            
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', lineHeight: 1.4 }}>{post.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>{post.excerpt}</p>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <User size={16} /> {post.author}
                                </div>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-glow-1)', fontWeight: 600, fontSize: '0.9rem' }}>
                                    Read <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <a href="#" className="btn btn-glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={18} /> View All Articles
                </a>
            </div>
        </section>
    );
}

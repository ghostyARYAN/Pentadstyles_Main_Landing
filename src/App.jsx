import React from 'react';
import { WorldMapDemo } from './components/WorldMapDemo';
import { BlogSection } from './components/BlogSection';
import {
    LayoutDashboard, Package, ShoppingBag, TicketPercent, Leaf, Sparkles,
    Store, Boxes, Tag, CreditCard, Truck, Cloud, Bot, Globe, Handshake,
    Camera, ArrowRight, Menu, X
} from 'lucide-react';

function App() {
    return (
        <main>
            <header className="site-header">
                <a href="#" className="logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    PentadStyles
                </a>
                <nav className="nav-links">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <a href="https://store.pentadstyles.shop" target="_blank" className="nav-link" style={{ color: 'var(--color-glow-1)' }}>Login</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container hero-content">
                    <h1>Weaving Heritage, <br /> <span style={{ color: 'var(--color-glow-1)' }}>Empowering Artisans.</span></h1>
                    <p>The bridge between Indian artisans and the global market. Ethically made, transparently priced, and AI-enabled.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="#problem" className="btn btn-primary">Join the Movement</a>
                        <a href="https://store.pentadstyles.shop" target="_blank" className="btn btn-glass">Artisan Dashboard</a>
                    </div>
                </div>

                <div className="hero-visual container">
                    <div className="ui-card-main glass-panel">
                        <img src="/images/mjq9i12n-e8qqspt.png" alt="Handloom Weaver" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                        <div className="glass-panel" style={{ position: 'absolute', bottom: '20px', left: '20px', padding: '1rem', borderLeft: '3px solid #FF7B54' }}>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Authenticity Verified</div>
                            <div style={{ fontWeight: 600 }}>100% Handwoven</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section id="problem" className="section-padding container">
                <div className="glass-panel" style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--color-glow-2), transparent)' }}></div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h5 style={{ color: 'var(--color-glow-2)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>The Challenge</h5>
                        <h2 style={{ marginBottom: '2rem' }}>Why Indian Handlooms Need a Revolution</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
                            Indian handloom artisans face limited market access, unfair pricing, and a growing reliance on middlemen—endangering centuries-old weaving traditions. Meanwhile, consumers searching for authentic, handcrafted textiles often encounter counterfeits, inflated prices, and limited choice.
                        </p>
                        <p style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '1.2rem' }}>
                            The result? A broken ecosystem that undervalues tradition.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Solution Section */}
            <section id="about" className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center', gap: '4rem' }}>
                    <div>
                        <div className="glass-panel" style={{ height: '500px', position: 'relative', borderRadius: 'var(--radius-lg)' }}>
                            <img src="/images/mjq9i121-ain7t5f.png" alt="Solution" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--color-glow-1)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Our Solution</h5>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>The Bridge to Global Markets</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            PentadStyles is not just a platform; we are the bridge between artisans and customers (pentadstyles.shop). We provide dedicated AI tools for photoshoots and marketing, ensuring dignity and global reach.
                        </p>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--color-glow-1)', marginBottom: '2.5rem' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.25rem', fontWeight: 300 }}>"Every weave tells a story—and we’re here to make sure the world hears it."</p>
                        </div>
                        <a href="#dashboard" className="btn btn-primary">See the Tech</a>
                    </div>
                </div>
            </section>

            {/* Artisan Dashboard Showcase */}
            <section id="dashboard" className="section-padding container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h5 style={{ color: 'var(--color-glow-1)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1rem' }}>The Platform</h5>
                    <h2 style={{ fontSize: '2.5rem' }}>Introducing the Artisan Dashboard</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', marginTop: '1rem' }}>
                        A powerful, AI-enabled command center hosted at <a href="https://store.pentadstyles.shop" target="_blank" style={{ color: 'var(--text-main)', textDecoration: 'underline' }}>store.pentadstyles.shop</a>.
                    </p>
                </div>

                <div className="dashboard-mock">
                    <div className="db-header">
                        <div className="db-dot" style={{ background: '#ff5f56' }}></div>
                        <div className="db-dot" style={{ background: '#ffbd2e' }}></div>
                        <div className="db-dot" style={{ background: '#27c93f' }}></div>
                        <div style={{ marginLeft: '1rem', fontSize: '0.8rem', color: '#555' }}>store.pentadstyles.shop</div>
                    </div>

                    <div className="db-body">
                        <div className="db-sidebar" style={{ width: '240px', fontSize: '0.85rem', color: '#888' }}>
                            <div className="db-nav-item active" style={{ width: '100%', height: 'auto', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem', borderRadius: '6px', color: '#fff' }}>
                                <LayoutDashboard size={16} /> Dashboard
                            </div>
                            <div className="db-nav-item" style={{ width: '100%', height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem' }}>
                                <Package size={16} /> Orders & Inventory
                            </div>
                            <div className="db-nav-item" style={{ width: '100%', height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem' }}>
                                <ShoppingBag size={16} /> Storefront
                            </div>
                            <div className="db-nav-item" style={{ width: '100%', height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem' }}>
                                <TicketPercent size={16} /> Promotions
                            </div>
                            <div className="db-nav-item" style={{ width: '100%', height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem' }}>
                                <Leaf size={16} /> Sustainability
                            </div>
                            <div className="db-nav-item" style={{ marginTop: 'auto', width: '100%', height: 'auto', background: 'transparent', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem', color: 'var(--color-glow-2)' }}>
                                <Sparkles size={16} /> AI Studio
                            </div>
                        </div>

                        <div className="db-content">
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>My Store Overview</h3>
                            <div className="db-card-row">
                                <div className="db-stat-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>Total Revenue</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>₹1,24,000</span>
                                </div>
                                <div className="db-stat-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#aaa' }}>Active Products</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>42</span>
                                </div>
                                <div className="db-stat-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5rem', borderColor: 'var(--color-glow-1)', background: 'rgba(255,123,84,0.1)' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#FF7B54' }}>Action Needed</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#FF7B54' }}>Ship 3 Orders</span>
                                </div>
                            </div>

                            <div className="db-big-chart">
                                <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
                                    <path d="M0 40 Q 25 20 50 40 T 100 10" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="var(--color-glow-1)" stopOpacity="1" />
                                            <stop offset="100%" stopColor="var(--color-glow-2)" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.8rem', color: '#aaa' }}>Sales Performance</div>
                            </div>

                            <div className="glass-panel" style={{ position: 'absolute', bottom: '-20px', right: '2rem', padding: '1rem', border: '1px solid var(--color-glow-2)', boxShadow: '0 10px 30px rgba(139,92,246,0.3)', transform: 'rotate(-5deg)' }}>
                                <div style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase' }}>New Feature</div>
                                <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Sparkles size={16} /> AI Photoshoot Ready
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capabilities-grid">
                    {[
                        { icon: Store, title: 'Modern Storefront', desc: 'Lightning-fast browsing, mobile-first UX, and image optimization.' },
                        { icon: Boxes, title: 'Order & Inventory', desc: 'Real-time stock tracking and automated order lifecycle management.' },
                        { icon: TicketPercent, title: 'Promotions', desc: 'Create coupons and manage launches centrally with audit trails.' },
                        { icon: Leaf, title: 'Sustainability', desc: 'Supplier transparency and impact reporting baked into the platform.' },
                        { icon: CreditCard, title: 'Global Payments', desc: 'Integrated Razorpay/Stripe for seamless international transactions.' },
                        { icon: Truck, title: 'Smart Shipping', desc: 'Automated labels and tracking via Shiprocket integration.' },
                        { icon: Cloud, title: 'Media Cloud', desc: 'Secure cloud storage for all your high-res artisan assets.' },
                        { icon: Bot, title: 'AI Assistant', desc: 'Auto-generated product descriptions and marketing copy.' }
                    ].map((cap, i) => (
                        <div key={i} className="cap-card">
                            <div className="cap-icon"><cap.icon /></div>
                            <div className="cap-title">{cap.title}</div>
                            <div className="cap-desc">{cap.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Product / How We Deliver */}
            <section className="section-padding container">
                <div className="section-header">
                    <h5 style={{ color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '1rem' }}>Our Product</h5>
                    <h2>How We Deliver Excellence</h2>
                    <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>←</span> Swipe to explore <span style={{ fontSize: '1.2rem' }}>→</span>
                    </p>
                </div>

                <div className="horizontal-scroll" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    {[
                        { icon: Store, title: 'No Middlemen', desc: 'Weavers control pricing, catalogues, and storefronts directly.', color: '#FF7B54' },
                        { icon: Globe, title: 'Global Access', desc: 'Connecting rural talent to international markets instantly.', color: '#8B5CF6' },
                        { icon: Handshake, title: 'Peer To Peer', desc: 'Transparent transactions between maker and buyer.', color: '#4CAF50' },
                        { icon: Camera, title: 'AI Studio', desc: 'Automated photoshoots for professional cataloging.', color: '#03A9F4' }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel product-feature-card" style={{ minWidth: '320px', padding: '3rem', scrollSnapAlign: 'center', borderTop: `3px solid ${item.color}`, transition: 'var(--transition)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: item.color }}><item.icon size={48} /></div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>{item.desc}</p>
                            <a href="#" style={{ color: item.color, fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>See More <ArrowRight size={16} /></a>
                        </div>
                    ))}
                </div>
            </section>

            {/* REACT WORLD MAP DEMO */}
            <WorldMapDemo />

            {/* Tale of the Weave */}
            <section className="section-padding" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                    <h5 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '3rem', fontSize: '0.85rem' }}>Tale of the Weave</h5>

                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', lineHeight: 1.4, fontWeight: 300 }}>
                        <p style={{ marginBottom: '2rem' }}>We don’t sell sarees. <br /><b style={{ color: '#fff', fontWeight: 600 }}>We preserve legacies.</b></p>
                        <p style={{ marginBottom: '2rem' }}>We don’t just empower artisans. <br /><b style={{ color: '#fff', fontWeight: 600 }}>We restore dignity.</b></p>
                        <p style={{ marginBottom: '2rem' }}>We don’t follow the fashion cycle. <br /><b style={{ color: '#fff', fontWeight: 600 }}>We’re redefining it.</b></p>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '3rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', display: 'inline-block', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.02)' }}>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>PentadStyles is more than a marketplace—it’s a movement.</p>
                        <h3 style={{ marginBottom: '3rem', color: 'var(--color-glow-1)', fontSize: '1.5rem' }}>Join us in globalizing India’s handloom heritage, <br />one thread at a time.</h3>
                        <a href="#" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Join the Movement</a>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogSection />

            {/* Footer */}
            <footer className="footer" id="contact" style={{ textAlign: 'left', padding: '6rem 0', borderTop: '1px solid var(--border-light)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    <div>
                        <a href="#" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-block', fontSize: '1.5rem' }}>PentadStyles</a>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                            Made with <span style={{ color: '#e25555' }}>&hearts;</span> in India.<br />
                            &copy; 2024 Pentad Styles. <br />All rights reserved.
                        </p>
                    </div>

                    {/* Footer Links - Simplified */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#fff' }}>Information</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Start with Us</a></li>
                            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Information</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default App;

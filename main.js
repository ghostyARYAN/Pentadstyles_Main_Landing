import './style.css'
import { WorldMap } from './world-map.js'
import {
  createIcons,
  LayoutDashboard,
  Package,
  ShoppingBag,
  TicketPercent,
  Leaf,
  Sparkles,
  Store,
  Boxes,
  Tag,
  CreditCard,
  Truck,
  Cloud,
  Bot,
  Globe,
  Handshake,
  Camera,
  ArrowRight,
  Menu,
  X
} from 'lucide'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a href="#" class="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      PentadStyles
    </a>
    <nav class="nav-links">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#contact" class="nav-link">Contact</a>
      <a href="https://store.pentadstyles.shop" target="_blank" class="nav-link" style="color: var(--color-glow-1);">Login</a>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container hero-content">
        <h1>Weaving Heritage, <br> <span style="color: var(--color-glow-1);">Empowering Artisans.</span></h1>
        <p>The bridge between Indian artisans and the global market. Ethically made, transparently priced, and AI-enabled.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
          <a href="#problem" class="btn btn-primary">Join the Movement</a>
          <a href="https://store.pentadstyles.shop" target="_blank" class="btn btn-glass">Artisan Dashboard</a>
        </div>
      </div>
      
      <div class="hero-visual container">
         <div class="ui-card-main glass-panel">
            <img src="/images/mjq9i12n-e8qqspt.png" alt="Handloom Weaver" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
            <div class="glass-panel" style="position: absolute; bottom: 20px; left: 20px; padding: 1rem; border-left: 3px solid #FF7B54;">
               <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Authenticity Verified</div>
               <div style="font-weight: 600;">100% Handwoven</div>
            </div>
         </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section id="problem" class="section-padding container">
      <div class="glass-panel" style="padding: 4rem 2rem; position: relative; overflow: hidden; text-align: center;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, var(--color-glow-2), transparent);"></div>
        <div style="max-width: 800px; margin: 0 auto;">
            <h5 style="color: var(--color-glow-2); text-transform: uppercase; letter-spacing: 3px; font-size: 0.9rem; margin-bottom: 1.5rem;">The Challenge</h5>
            <h2 style="margin-bottom: 2rem;">Why Indian Handlooms Need a Revolution</h2>
            <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.15rem; line-height: 1.8;">
                Indian handloom artisans face limited market access, unfair pricing, and a growing reliance on middlemen—endangering centuries-old weaving traditions. Meanwhile, consumers searching for authentic, handcrafted textiles often encounter counterfeits, inflated prices, and limited choice.
            </p>
            <p style="font-weight: 500; color: var(--text-main); font-size: 1.2rem;">
                The result? A broken ecosystem that undervalues tradition.
            </p>
        </div>
      </div>
    </section>

    <!-- Our Solution Section -->
    <section id="about" class="section-padding">
        <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); align-items: center; gap: 4rem;">
            <div>
                <div class="glass-panel" style="height: 500px; position: relative; border-radius: var(--radius-lg);">
                    <img src="/images/mjq9i121-ain7t5f.png" alt="Solution" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
                </div>
            </div>
            <div>
                <h5 style="color: var(--color-glow-1); text-transform: uppercase; letter-spacing: 3px; font-size: 0.9rem; margin-bottom: 1.5rem;">Our Solution</h5>
                <h2 style="margin-bottom: 1.5rem; font-size: 2.5rem;">The Bridge to Global Markets</h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.7;">
                    PentadStyles is not just a platform; we are the bridge between artisans and customers (pentadstyles.shop). We provide dedicated AI tools for photoshoots and marketing, ensuring dignity and global reach.
                </p>
                <div style="padding-left: 1.5rem; border-left: 3px solid var(--color-glow-1); margin-bottom: 2.5rem;">
                    <p style="font-style: italic; font-size: 1.25rem; font-weight: 300;">"Every weave tells a story—and we’re here to make sure the world hears it."</p>
                </div>
                <a href="#dashboard" class="btn btn-primary">See the Tech</a>
            </div>
        </div>
    </section>

    <!-- Artisan Dashboard Showcase (New) -->
    <section id="dashboard" class="section-padding container">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h5 style="color: var(--color-glow-1); text-transform: uppercase; letter-spacing: 3px; font-size: 0.9rem; margin-bottom: 1rem;">The Platform</h5>
        <h2 style="font-size: 2.5rem;">Introducing the Artisan Dashboard</h2>
        <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto; margin-top: 1rem;">
          A powerful, AI-enabled command center hosted at <a href="https://store.pentadstyles.shop" target="_blank" style="color: var(--text-main); text-decoration: underline;">store.pentadstyles.shop</a>.
        </p>
      </div>

      <div class="dashboard-mock">
        <!-- Window Controls -->
        <div class="db-header">
           <div class="db-dot" style="background: #ff5f56;"></div>
           <div class="db-dot" style="background: #ffbd2e;"></div>
           <div class="db-dot" style="background: #27c93f;"></div>
           <div style="margin-left: 1rem; font-size: 0.8rem; color: #555;">store.pentadstyles.shop</div>
        </div>
        
        <div class="db-body">
           <!-- Sidebar -->
           <div class="db-sidebar" style="width: 240px; font-size: 0.85rem; color: #888;">
              <div class="db-nav-item active" style="width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem; border-radius: 6px; color: #fff; background: rgba(255,255,255,0.05);">
                 <i data-lucide="layout-dashboard"></i> Dashboard
              </div>
              <div class="db-nav-item" style="width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem;">
                 <i data-lucide="package"></i> Orders & Inventory
              </div>
              <div class="db-nav-item" style="width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem;">
                 <i data-lucide="shopping-bag"></i> Storefront
              </div>
              <div class="db-nav-item" style="width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem;">
                 <i data-lucide="ticket-percent"></i> Promotions
              </div>
               <div class="db-nav-item" style="width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem;">
                 <i data-lucide="leaf"></i> Sustainability
              </div>
              <div class="db-nav-item" style="margin-top: auto; width: 100%; height: auto; background: transparent; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem; color: var(--color-glow-2);">
                 <i data-lucide="sparkles"></i> AI Studio
              </div>
           </div>
           
           <!-- Content -->
           <div class="db-content">
              <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem;">My Store Overview</h3>
              <div class="db-card-row">
                 <div class="db-stat-card" style="display: flex; flex-direction: column; justify-content: center; padding: 1.5rem;">
                    <span style="font-size: 0.8rem; color: #aaa;">Total Revenue</span>
                    <span style="font-size: 1.5rem; font-weight: 600;">₹1,24,000</span>
                 </div>
                 <div class="db-stat-card" style="display: flex; flex-direction: column; justify-content: center; padding: 1.5rem;">
                    <span style="font-size: 0.8rem; color: #aaa;">Active Products</span>
                    <span style="font-size: 1.5rem; font-weight: 600;">42</span>
                 </div>
                 <div class="db-stat-card" style="display: flex; flex-direction: column; justify-content: center; padding: 1.5rem; border-color: var(--color-glow-1); background: rgba(255,123,84,0.1);">
                    <span style="font-size: 0.8rem; color: #FF7B54;">Action Needed</span>
                    <span style="font-size: 1.1rem; font-weight: 600; color: #FF7B54;">Ship 3 Orders</span>
                 </div>
              </div>
              
              <div class="db-big-chart">
                 <!-- Mock Graph Line -->
                 <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none" style="opacity: 0.5;">
                    <path d="M0 40 Q 25 20 50 40 T 100 10" fill="none" stroke="url(#gradient)" stroke-width="2"/>
                    <defs>
                       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style="stop-color:var(--color-glow-1);stop-opacity:1" />
                          <stop offset="100%" style="stop-color:var(--color-glow-2);stop-opacity:1" />
                       </linearGradient>
                    </defs>
                 </svg>
                 <div style="position: absolute; top: 1rem; left: 1rem; font-size: 0.8rem; color: #aaa;">Sales Performance</div>
              </div>

               <!-- Floating AI Feature -->
              <div class="glass-panel" style="position: absolute; bottom: -20px; right: 2rem; padding: 1rem; border: 1px solid var(--color-glow-2); box-shadow: 0 10px 30px rgba(139,92,246,0.3); transform: rotate(-5deg);">
                 <div style="font-size: 0.7rem; color: #aaa; text-transform: uppercase;">New Feature</div>
                 <div style="font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                   <i data-lucide="sparkles" style="width: 16px; height: 16px;"></i> AI Photoshoot Ready
                 </div>
              </div>
           </div>
        </div>
      </div>

      <!-- Capabilities Grid -->
      <div class="capabilities-grid">
         ${[
    { icon: 'store', title: 'Modern Storefront', desc: 'Lightning-fast browsing, mobile-first UX, and image optimization.' },
    { icon: 'boxes', title: 'Order & Inventory', desc: 'Real-time stock tracking and automated order lifecycle management.' },
    { icon: 'ticket-percent', title: 'Promotions', desc: 'Create coupons and manage launches centrally with audit trails.' },
    { icon: 'leaf', title: 'Sustainability', desc: 'Supplier transparency and impact reporting baked into the platform.' },
    { icon: 'credit-card', title: 'Global Payments', desc: 'Integrated Razorpay/Stripe for seamless international transactions.' },
    { icon: 'truck', title: 'Smart Shipping', desc: 'Automated labels and tracking via Shiprocket integration.' },
    { icon: 'cloud', title: 'Media Cloud', desc: 'Secure cloud storage for all your high-res artisan assets.' },
    { icon: 'bot', title: 'AI Assistant', desc: 'Auto-generated product descriptions and marketing copy.' }
  ].map(cap => `
            <div class="cap-card">
               <div class="cap-icon"><i data-lucide="${cap.icon}"></i></div>
               <div class="cap-title">${cap.title}</div>
               <div class="cap-desc">${cap.desc}</div>
            </div>
         `).join('')}
      </div>
    </section>

    <!-- Our Product / How We Deliver -->
    <section class="section-padding container">
        <div class="section-header">
             <h5 style="color: #4CAF50; text-transform: uppercase; letter-spacing: 3px; font-size: 0.9rem; margin-bottom: 1rem;">Our Product</h5>
             <h2>How We Deliver Excellence</h2>
             <p style="font-size: 0.9rem; margin-top: 1rem; opacity: 0.6; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                <span style="font-size: 1.2rem;">←</span> Swipe to explore <span style="font-size: 1.2rem;">→</span>
             </p>
        </div>
        
        <div class="horizontal-scroll" style="display: flex; gap: 2rem; overflow-x: auto; padding-bottom: 2rem; scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none;">
            ${[
    { icon: 'store', title: 'No Middlemen', desc: 'Weavers control pricing, catalogues, and storefronts directly.', color: '#FF7B54' },
    { icon: 'globe', title: 'Global Access', desc: 'Connecting rural talent to international markets instantly.', color: '#8B5CF6' },
    { icon: 'handshake', title: 'Peer To Peer', desc: 'Transparent transactions between maker and buyer.', color: '#4CAF50' },
    { icon: 'camera', title: 'AI Studio', desc: 'Automated photoshoots for professional cataloging.', color: '#03A9F4' }
  ].map(item => `
                <div class="glass-panel product-feature-card" style="min-width: 320px; padding: 3rem; scroll-snap-align: center; border-top: 3px solid ${item.color}; transition: var(--transition);">
                    <div style="font-size: 3rem; margin-bottom: 1.5rem; color: ${item.color};"><i data-lucide="${item.icon}" style="width: 48px; height: 48px;"></i></div>
                    <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">${item.title}</h3>
                    <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1rem;">${item.desc}</p>
                    <a href="#" style="color: ${item.color}; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; display: inline-flex; align-items: center; gap: 0.5rem;">See More <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i></a>
                </div>
            `).join('')}
        </div>
    </section>

    <!-- Global Map Section -->
    <section class="section-padding container" style="text-align: center; overflow: hidden;">
       <div class="glass-panel" style="padding: 2rem;">
          <p class="font-bold" style="font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 1rem;">
             Remote <span id="connectivity-text" style="color: var(--text-muted); display: inline-block;"></span>
          </p>
          <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto; margin-bottom: 3rem;">
             Taking arts to all around the world. Break free from traditional boundaries. Connect directly with artisans from the comfort of your home.
          </p>
          
          <div id="world-map-container" style="width: 100%; height: 400px; position: relative; margin: 0 auto;"></div>
       </div>
    </section>

    <!-- Tale of the Weave (Manifesto) -->
    <section class="section-padding" style="background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%);">
        <div class="container" style="text-align: center; max-width: 900px;">
            <h5 style="color: var(--text-muted); text-transform: uppercase; letter-spacing: 5px; margin-bottom: 3rem; font-size: 0.85rem;">Tale of the Weave</h5>
            
            <div style="font-size: clamp(1.5rem, 4vw, 2.5rem); line-height: 1.4; font-weight: 300;">
                <p style="margin-bottom: 2rem;">We don’t sell sarees. <br><b style="color: #fff; font-weight: 600;">We preserve legacies.</b></p>
                <p style="margin-bottom: 2rem;">We don’t just empower artisans. <br><b style="color: #fff; font-weight: 600;">We restore dignity.</b></p>
                <p style="margin-bottom: 2rem;">We don’t follow the fashion cycle. <br><b style="color: #fff; font-weight: 600;">We’re redefining it.</b></p>
            </div>

            <div style="margin-top: 4rem; padding: 3rem; border: 1px solid var(--border-light); border-radius: var(--radius-lg); display: inline-block; backdrop-filter: blur(10px); background: rgba(255,255,255,0.02);">
                <p style="margin-bottom: 1.5rem; font-size: 1.2rem;">PentadStyles is more than a marketplace—it’s a movement.</p>
                <h3 style="margin-bottom: 3rem; color: var(--color-glow-1); font-size: 1.5rem;">Join us in globalizing India’s handloom heritage, <br>one thread at a time.</h3>
                <a href="#" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem;">Join the Movement</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact" style="text-align: left; padding: 6rem 0; border-top: 1px solid var(--border-light);">
        <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 4rem;">
            <div>
                <a href="#" class="logo" style="margin-bottom: 1.5rem; display: inline-block; font-size: 1.5rem;">PentadStyles</a>
                <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
                    Made with <span style="color: #e25555;">&hearts;</span> in India.<br>
                    &copy; 2024 Pentad Styles. <br>All rights reserved.
                </p>
            </div>
            
            <div>
                <h4 style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #fff;">Information</h4>
                <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Start with Us</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Information</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">About Company</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">FAQ</a></li>
                </ul>
            </div>

             <div>
                <h4 style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #fff;">Company</h4>
                <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Our Story</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Blog</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Careers</a></li>
                </ul>
            </div>

            <div>
                <h4 style="margin-bottom: 1.5rem; font-size: 1.1rem; color: #fff;">Support</h4>
                 <ul style="display: flex; flex-direction: column; gap: 0.8rem;">
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Contact Us</a></li>
                    <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Terms of Service</a></li>
                     <li><a href="#" style="color: var(--text-muted); font-size: 0.95rem; transition: color 0.3s;">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
  </main>
`



// ... Icons init ...
createIcons({
  icons: {
    LayoutDashboard,
    Package,
    ShoppingBag,
    TicketPercent,
    Leaf,
    Sparkles,
    Store,
    Boxes,
    Tag,
    CreditCard,
    Truck,
    Cloud,
    Bot,
    Globe,
    Handshake,
    Camera,
    ArrowRight,
    Menu,
    X
  }
})

// Initialize World Map
const map = new WorldMap('world-map-container', { color: '#4CAF50' });
map.addDefs();

const connections = [
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska -> LA
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska -> Brazil
  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } }, // Brazil -> Lisbon
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } }, // London -> Delhi
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } }, // Delhi -> Vladivostok
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } } // Delhi -> Nairobi
];

connections.forEach((conn, i) => {
  map.addConnection(conn.start, conn.end, i * 0.5);
});

// Text Animation for "Connectivity"
const textContainer = document.getElementById('connectivity-text');
const word = "Connectivity";
word.split("").forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.opacity = '0';
  span.style.transform = 'translateX(-10px)';
  span.style.display = 'inline-block';
  span.style.transition = `all 0.5s ease ${i * 0.1}s`;
  textContainer.appendChild(span);

  // Trigger animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      span.style.opacity = '1';
      span.style.transform = 'translateX(0)';
    }, 100);
  });
});


const projects = [
  {
    title: 'Neon Brand Identity',
    category: 'Branding',
    description: 'A futuristic logo and visual language system designed for memorable digital-first brands.',
    gradient: 'from-violet',
    tags: ['Logo', 'Identity', 'Neon'],
  },
  {
    title: 'Cyber Poster Series',
    category: 'Poster Design',
    description: 'High-contrast social posters with cinematic lighting, bold type, and motion-ready layouts.',
    gradient: 'from-cyan',
    tags: ['Poster', 'Typography', 'Campaign'],
  },
  {
    title: 'Creator Social Pack',
    category: 'Social Media',
    description: 'Scroll-stopping thumbnails, profile graphics, and reels covers built for creator growth.',
    gradient: 'from-pink',
    tags: ['Instagram', 'Thumbnail', 'Ads'],
  },
  {
    title: 'Gaming Visual Kit',
    category: 'Esports Graphics',
    description: 'Energetic banners, overlays, and stream visuals with glowing cyberpunk detail.',
    gradient: 'from-lime',
    tags: ['Gaming', 'Banner', 'Stream'],
  },
];

const services = ['Logo Design', 'Brand Identity', 'Social Media Creatives', 'Posters & Flyers', 'Thumbnails', 'Digital Campaigns'];
const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/sparkboyop/' },
  { label: 'Behance', href: 'https://www.behance.net/MukulEditz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/utkarsh-mudila-756046346/' },
  { label: 'Email', href: 'mailto:Mudila2006utkarsh@gmail.com' },
];

function tagList(tags) {
  return tags.map((tag) => `<small>${tag}</small>`).join('');
}

function renderProjects() {
  return projects.map((project, index) => `
    <article class="project-card reveal ${project.gradient}" data-project-card>
      <div class="project-visual"><span>${String(index + 1).padStart(2, '0')}</span></div>
      <p>${project.category}</p>
      <h3>${project.title}</h3>
      <span>${project.description}</span>
      <div class="tag-row">${tagList(project.tags)}</div>
    </article>
  `).join('');
}

function renderServices() {
  return [...services, ...services].map((service) => `<span>${service}</span>`).join('');
}

function renderSocials() {
  return socials.map((social) => {
    const target = social.label === 'Email' ? '' : ' target="_blank" rel="noreferrer"';
    return `<a href="${social.href}"${target}>${social.label}</a>`;
  }).join('');
}

function renderApp() {
  document.querySelector('#root').innerHTML = `
    <main class="site-shell">
      <div class="ambient-grid" aria-hidden="true"></div>
      <nav class="navbar" aria-label="Main navigation">
        <a class="brand-mark" href="#home">Mukul<span>Editz</span></a>
        <div class="nav-links">
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="home" class="hero section-pad">
        <div class="hero-copy reveal is-visible">
          <p class="eyebrow">Graphic Design Portfolio • Dark Futuristic Edition</p>
          <h1>Utkarsh Mudila crafts glowing visual stories as <span>Mukul Editz</span>.</h1>
          <p class="hero-text">A shareable portfolio for logos, posters, branding, thumbnails, and social media creatives—built to feel cinematic, animated, and ready for clients.</p>
          <div class="hero-actions">
            <a class="button primary" href="#work">Explore Work</a>
            <a class="button secondary" href="mailto:Mudila2006utkarsh@gmail.com">Start a Project</a>
          </div>
        </div>
        <div class="hero-orb-card reveal is-visible">
          <div class="orb-ring ring-one"></div>
          <div class="orb-ring ring-two"></div>
          <div class="floating-card top-card">Branding</div>
          <div class="floating-card bottom-card">Posters</div>
          <div class="core-logo">ME</div>
        </div>
      </section>
      <section class="stats-strip" aria-label="Portfolio highlights">
        <div class="stat"><strong>06+</strong><span>Design categories</span></div>
        <div class="stat"><strong>24/7</strong><span>Creative mindset</span></div>
        <div class="stat"><strong>100%</strong><span>Share-ready portfolio</span></div>
      </section>
      <section id="work" class="section-pad work-section">
        <div class="section-heading">
          <div><p class="eyebrow">Selected Work</p><h2>Design pieces made to stop the scroll.</h2></div>
          <p>Add your real artwork images later by replacing these project cards with your design exports.</p>
        </div>
        <div class="project-grid">${renderProjects()}</div>
      </section>
      <section id="journey" class="section-pad split-section">
        <div class="reveal"><p class="eyebrow">Design Journey</p><h2>From ideas to futuristic visuals.</h2><p class="body-copy">Mukul Editz is the creative studio identity of Utkarsh Mudila—a growing graphic design journey focused on strong composition, bold color, modern typography, and client-ready digital assets.</p></div>
        <div class="timeline">
          ${['Discover the brief', 'Build the concept', 'Design with impact', 'Deliver share-ready files'].map((item, index) => `<div class="timeline-item reveal"><span>0${index + 1}</span><p>${item}</p></div>`).join('')}
        </div>
      </section>
      <section class="services-marquee" aria-label="Design services"><div>${renderServices()}</div></section>
      <section id="contact" class="section-pad contact-section reveal">
        <p class="eyebrow">Contact</p>
        <h2>Ready to turn your idea into a glowing visual?</h2>
        <p>Reach out to Mukul Editz for graphic design, branding, posters, thumbnails, and social media creatives.</p>
        <div class="social-grid">${renderSocials()}</div>
      </section>
    </main>
  `;
}

function bootInteractions() {
  window.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.16 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

  document.querySelectorAll('[data-project-card]').forEach((card) => {
    card.addEventListener('pointerenter', () => {
      document.querySelectorAll('[data-project-card]').forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

renderApp();
bootInteractions();

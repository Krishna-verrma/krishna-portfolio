/**
 * HERO COMPONENT
 * Renders the introductory Home section with dynamic data,
 * profile photo fallback handling, and smooth CTA buttons.
 */

const HeroComponent = {
  render(data) {
    const container = document.getElementById('hero-container');
    if (!container) return;

    const { personal } = data;

    container.innerHTML = `
      <div class="hero-grid">
        <!-- Left: Introduction & CTAs -->
        <div class="hero-content reveal-left">
          <div class="hero-badge-group">
            <div class="hero-status-pill">
              <span class="status-dot"></span>
              <span>${personal.status.text}</span>
            </div>
            <div class="hero-age-pill">
              <i class="ph ph-sparkle"></i>
              <span>${personal.age}</span>
            </div>
          </div>

          <div class="hero-text-block">
            <span class="hero-title-greeting">Hi, I'm</span>
            <h1 class="hero-name text-gradient">${personal.name}</h1>
            <p class="hero-headline">${personal.title}</p>
          </div>

          <p class="hero-bio">${personal.shortBio}</p>

          <!-- Quick Stats Row -->
          <div class="hero-stats-row">
            <div class="hero-stat-item">
              <span class="hero-stat-val text-gradient-cyan">19</span>
              <span class="hero-stat-lbl">Years Old</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-val text-gradient-cyan">Gen AI</span>
              <span class="hero-stat-lbl">Specialization</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-val text-gradient-cyan">CU</span>
              <span class="hero-stat-lbl">Chandigarh Univ.</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="hero-cta-group">
            <a href="#about" class="btn btn-primary" id="hero-cta-profile">
              <span>Explore My Profile</span>
              <i class="ph ph-arrow-right"></i>
            </a>
            <a href="#skills" class="btn btn-secondary" id="hero-cta-skills">
              <span>View My Skills</span>
              <i class="ph ph-cpu"></i>
            </a>
          </div>
        </div>

        <!-- Right: Profile Image & Floating Cards -->
        <div class="hero-visual reveal-right">
          <div class="profile-avatar-wrapper">
            <div class="profile-avatar-glow"></div>
            
            <div class="profile-avatar-border">
              <img 
                id="hero-profile-img"
                src="${personal.profilePhoto}" 
                alt="${personal.profilePhotoAlt}"
                class="profile-avatar-img"
                loading="eager"
              />
            </div>

            <!-- Floating Micro-Badge Top -->
            <div class="floating-hero-card card-top">
              <div class="floating-card-icon">
                <i class="ph ph-brain"></i>
              </div>
              <div class="floating-card-text">
                <span class="floating-card-title">Artificial Intelligence</span>
                <span class="floating-card-sub">Core Focus</span>
              </div>
            </div>

            <!-- Floating Micro-Badge Bottom -->
            <div class="floating-hero-card card-bottom">
              <div class="floating-card-icon">
                <i class="ph ph-code"></i>
              </div>
              <div class="floating-card-text">
                <span class="floating-card-title">Problem Solving</span>
                <span class="floating-card-sub">C++ / Python / Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindImageFallback();
    this.bindButtons();
  },

  bindImageFallback() {
    const imgEl = document.getElementById('hero-profile-img');
    if (!imgEl) return;

    imgEl.addEventListener('error', () => {
      // If profile photo is missing or path changed, show friendly SVG avatar fallback
      imgEl.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='330' height='330' viewBox='0 0 330 330'><rect width='100%' height='100%' fill='%23162033'/><circle cx='165' cy='125' r='55' fill='%236366f1'/><path d='M65 270 C65 210, 265 210, 265 270 Z' fill='%236366f1'/><text x='50%' y='92%' dominant-baseline='middle' text-anchor='middle' fill='%2338bdf8' font-size='15' font-family='sans-serif'>[REPLACE WITH /assets/profile.jpg]</text></svg>";
    });
  },

  bindButtons() {
    const profileBtn = document.getElementById('hero-cta-profile');
    const skillsBtn = document.getElementById('hero-cta-skills');

    const smoothScroll = (targetId) => {
      const el = document.querySelector(targetId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    if (profileBtn) {
      profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#about');
      });
    }

    if (skillsBtn) {
      skillsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#skills');
      });
    }
  }
};

if (typeof window !== 'undefined') {
  window.HeroComponent = HeroComponent;
}

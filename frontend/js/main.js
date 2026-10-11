/**
 * MAIN ENTRY SCRIPT
 * Initializes portfolio components, Toast notifications,
 * IntersectionObserver scroll reveal animations, and Back-To-Top button.
 */

// Toast Utility
const Toast = {
  container: null,

  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', duration = 3500) {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconClass = 'ph-info';
    if (type === 'success') iconClass = 'ph-check-circle';
    if (type === 'error') iconClass = 'ph-warning-circle';

    toast.innerHTML = `
      <i class="ph ${iconClass} toast-icon"></i>
      <span>${message}</span>
    `;

    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  }
};

window.Toast = Toast;

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Ensure portfolio data is loaded
  const data = window.portfolioData;
  if (!data) {
    console.error('Portfolio data not found. Please check data/portfolio-data.js');
    return;
  }

  // 1. Initialize Theme & Toast
  Toast.init();
  if (window.ThemeManager) window.ThemeManager.init();

  // 2. Render Page Sections from Data
  if (window.HeroComponent) window.HeroComponent.render(data);
  if (window.AboutComponent) window.AboutComponent.render(data);
  if (window.AcademicsComponent) window.AcademicsComponent.render(data);
  if (window.SkillsComponent) window.SkillsComponent.render(data);
  if (window.AchievementsComponent) window.AchievementsComponent.render(data);
  if (window.GoalsComponent) window.GoalsComponent.render(data);
  if (window.ProjectsComponent) window.ProjectsComponent.render(data);
  if (window.CoaComponent) window.CoaComponent.render(data);
  if (window.ConverterComponent) window.ConverterComponent.render(data);
  if (window.ContactComponent) window.ContactComponent.render(data);

  // 3. Render Footer Data
  renderFooter(data);

  // 4. Initialize Navbar & Scroll Spy
  if (window.NavbarComponent) window.NavbarComponent.init();

  // 5. Initialize Scroll Reveal Animations
  initScrollReveal();

  // 6. Initialize Back to Top Button
  initBackToTop();
});

// Render Footer Details
function renderFooter(data) {
  const footerCopy = document.getElementById('footer-copyright');
  const footerSocials = document.getElementById('footer-socials');
  const { footer, contact } = data;
  const { socials } = contact;

  if (footerCopy) {
    footerCopy.innerHTML = `&copy; ${footer.copyrightYear} ${footer.copyrightName}. All Rights Reserved.`;
  }

  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${socials.github.url.includes('[') ? '#' : socials.github.url}" class="social-btn social-link-item" title="GitHub" data-name="GitHub" data-url="${socials.github.url}">
        <i class="ph ph-github-logo"></i>
      </a>
      <a href="${socials.linkedin.url.includes('[') ? '#' : socials.linkedin.url}" class="social-btn social-link-item" title="LinkedIn" data-name="LinkedIn" data-url="${socials.linkedin.url}">
        <i class="ph ph-linkedin-logo"></i>
      </a>
      <a href="${socials.instagram.url.includes('[') ? '#' : socials.instagram.url}" class="social-btn social-link-item" title="Instagram" data-name="Instagram" data-url="${socials.instagram.url}">
        <i class="ph ph-instagram-logo"></i>
      </a>
    `;

    footerSocials.querySelectorAll('.social-link-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const url = link.getAttribute('data-url');
        const name = link.getAttribute('data-name');
        if (url && (url.includes('[') || url === '#')) {
          e.preventDefault();
          window.Toast.show(`${name} link is set to placeholder in portfolio-data.js. Replace with your actual profile link!`, 'info');
        }
      });
    });
  }
}

// Scroll Reveal with IntersectionObserver
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target); // Reveal once
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

// Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * NAVBAR COMPONENT
 * Handles sticky navbar behavior, scroll progress bar,
 * active link spy, and mobile navigation drawer.
 */

const NavbarComponent = {
  init() {
    this.navbar = document.getElementById('navbar');
    this.progressBar = document.getElementById('scroll-progress-bar');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    this.mobileToggle = document.getElementById('mobile-nav-toggle');
    this.mobileDrawer = document.getElementById('mobile-nav-drawer');
    this.mobileBackdrop = document.getElementById('mobile-backdrop');
    this.sections = document.querySelectorAll('section[id]');

    this.bindScrollEvents();
    this.bindMobileEvents();
    this.bindLinkClicks();
  },

  bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // 1. Update Scroll Progress Bar
      if (this.progressBar && docHeight > 0) {
        const progressPercent = Math.min((scrollY / docHeight) * 100, 100);
        this.progressBar.style.width = `${progressPercent}%`;
      }

      // 2. Add 'scrolled' class to navbar for blur/border
      if (this.navbar) {
        if (scrollY > 30) {
          this.navbar.classList.add('scrolled');
        } else {
          this.navbar.classList.remove('scrolled');
        }
      }

      // 3. Section Spy
      this.updateActiveSection(scrollY);
    }, { passive: true });
  },

  updateActiveSection(scrollY) {
    const scrollPosition = scrollY + 120; // Offset for header

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  },

  bindMobileEvents() {
    if (!this.mobileToggle || !this.mobileDrawer) return;

    this.mobileToggle.addEventListener('click', () => {
      const isOpen = this.mobileDrawer.classList.contains('open');
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Close mobile drawer on pressing ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer.classList.contains('open')) {
        this.closeMobileMenu();
      }
    });
  },

  openMobileMenu() {
    this.mobileToggle.classList.add('open');
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    this.mobileDrawer.classList.add('open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeMobileMenu() {
    this.mobileToggle.classList.remove('open');
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    this.mobileDrawer.classList.remove('open');
    if (this.mobileBackdrop) this.mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  },

  bindLinkClicks() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            this.closeMobileMenu();

            const headerOffset = 70;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
};

if (typeof window !== 'undefined') {
  window.NavbarComponent = NavbarComponent;
}

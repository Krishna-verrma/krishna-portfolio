/**
 * THEME COMPONENT
 * Handles Dark / Light mode switching with localStorage persistence
 * and system preference detection.
 */

const ThemeManager = {
  STORAGE_KEY: 'krishna-portfolio-theme',

  init() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark mode for developer portfolio

    this.applyTheme(initialTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Listen to OS system theme changes if user hasn't set manual preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleIcon(theme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  },

  updateToggleIcon(theme) {
    const iconEl = document.getElementById('theme-icon');
    if (!iconEl) return;

    if (theme === 'light') {
      // Show Moon icon in light mode (to switch to dark)
      iconEl.className = 'ph ph-moon';
      iconEl.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      // Show Sun icon in dark mode (to switch to light)
      iconEl.className = 'ph ph-sun';
      iconEl.setAttribute('aria-label', 'Switch to light mode');
    }
  }
};

if (typeof window !== 'undefined') {
  window.ThemeManager = ThemeManager;
}

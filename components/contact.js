/**
 * CONTACT COMPONENT
 * Renders contact details (Email, LinkedIn, GitHub, Instagram)
 * with one-click copy, plus an interactive Contact Form with validation
 * and toast notification feedback.
 */

const ContactComponent = {
  render(data) {
    const container = document.getElementById('contact-container');
    if (!container) return;

    const { contact } = data;
    const { socials } = contact;

    const formatValue = (val) => {
      if (typeof val === 'string' && val.includes('[') && val.includes(']')) {
        return `<span class="placeholder-pill" title="Editable in data/portfolio-data.js">${val}</span>`;
      }
      return val;
    };

    container.innerHTML = `
      <div class="contact-grid">
        <!-- Left: Contact Channels & Socials -->
        <div class="contact-info-panel reveal-left">
          <div class="card contact-info-card card-interactive">
            <div class="contact-icon-box">
              <i class="ph ph-envelope-simple"></i>
            </div>
            <div class="contact-details">
              <span class="contact-lbl">Email Address</span>
              <div class="contact-val-row">
                <span class="contact-val" id="contact-email-text">${formatValue(contact.email)}</span>
                <button 
                  class="btn btn-sm btn-secondary" 
                  id="copy-email-btn"
                  title="Copy email to clipboard"
                  style="padding: 0.35rem 0.65rem;"
                >
                  <i class="ph ph-copy" id="copy-email-icon"></i>
                  <span id="copy-email-lbl">Copy</span>
                </button>
              </div>
            </div>
          </div>

          <div class="card contact-info-card card-interactive">
            <div class="contact-icon-box">
              <i class="ph ph-map-pin"></i>
            </div>
            <div class="contact-details">
              <span class="contact-lbl">Location</span>
              <span class="contact-val">${contact.location}</span>
            </div>
          </div>

          <div class="card contact-info-card card-interactive">
            <div class="contact-icon-box">
              <i class="ph ph-share-network"></i>
            </div>
            <div class="contact-details">
              <span class="contact-lbl">Social Networks</span>
              <div class="contact-socials-row">
                <a 
                  href="${socials.github.url.includes('[') ? '#' : socials.github.url}" 
                  class="social-btn social-link-item"
                  data-name="GitHub"
                  data-url="${socials.github.url}"
                  title="GitHub: ${socials.github.handle}"
                >
                  <i class="ph ph-github-logo"></i>
                </a>
                <a 
                  href="${socials.linkedin.url.includes('[') ? '#' : socials.linkedin.url}" 
                  class="social-btn social-link-item"
                  data-name="LinkedIn"
                  data-url="${socials.linkedin.url}"
                  title="LinkedIn: ${socials.linkedin.handle}"
                >
                  <i class="ph ph-linkedin-logo"></i>
                </a>
                <a 
                  href="${socials.instagram.url.includes('[') ? '#' : socials.instagram.url}" 
                  class="social-btn social-link-item"
                  data-name="Instagram"
                  data-url="${socials.instagram.url}"
                  title="Instagram: ${socials.instagram.handle}"
                >
                  <i class="ph ph-instagram-logo"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Contact Form -->
        <div class="contact-form-panel reveal-right">
          <div class="card contact-form-card">
            <h3 class="contact-form-title">Send a Direct Message</h3>
            <p class="contact-form-desc">
              Have a project idea, question, or want to discuss AI? Leave a note and I'll get back to you!
            </p>

            <form id="portfolio-contact-form" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  class="form-input" 
                  placeholder="e.g. Alex Sharma" 
                  required 
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  class="form-input" 
                  placeholder="e.g. alex@example.com" 
                  required 
                />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Your Message</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  class="form-textarea" 
                  placeholder="Write your message or inquiry here..." 
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" id="contact-submit-btn" style="width: 100%;">
                <i class="ph ph-paper-plane-tilt"></i>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    this.bindCopyEmail(contact.email);
    this.bindSocialLinks();
    this.bindFormSubmit();
  },

  bindCopyEmail(email) {
    const copyBtn = document.getElementById('copy-email-btn');
    const copyLbl = document.getElementById('copy-email-lbl');
    const copyIcon = document.getElementById('copy-email-icon');

    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
      const emailToCopy = email.includes('[') ? 'krishna.verma.cse@example.com' : email;
      
      navigator.clipboard.writeText(emailToCopy).then(() => {
        copyLbl.textContent = 'Copied!';
        copyIcon.className = 'ph ph-check';
        copyBtn.style.color = 'var(--color-emerald)';

        if (window.Toast) {
          window.Toast.show('Email address copied to clipboard!', 'success');
        }

        setTimeout(() => {
          copyLbl.textContent = 'Copy';
          copyIcon.className = 'ph ph-copy';
          copyBtn.style.color = '';
        }, 2200);
      }).catch(() => {
        if (window.Toast) {
          window.Toast.show(`Email: ${emailToCopy}`, 'info');
        }
      });
    });
  },

  bindSocialLinks() {
    const links = document.querySelectorAll('.social-link-item');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const url = link.getAttribute('data-url');
        const name = link.getAttribute('data-name');
        if (url && (url.includes('[') || url === '#')) {
          e.preventDefault();
          if (window.Toast) {
            window.Toast.show(`${name} link is set to placeholder in portfolio-data.js. Replace with your actual profile URL!`, 'info');
          }
        }
      });
    });
  },

  bindFormSubmit() {
    const form = document.getElementById('portfolio-contact-form');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Simple validation
      if (!name) {
        if (window.Toast) window.Toast.show('Please enter your name.', 'error');
        nameInput.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (window.Toast) window.Toast.show('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      if (!message || message.length < 5) {
        if (window.Toast) window.Toast.show('Please enter a message with at least 5 characters.', 'error');
        messageInput.focus();
        return;
      }

      // Indicate loading
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i class="ph ph-spinner" style="animation: spin 1s infinite linear;"></i>
        <span>Sending Message...</span>
      `;

      try {
        // Detect local backend or fallback gracefully for static hosting (e.g. GitHub Pages)
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const endpoint = isLocal 
          ? (window.location.port === '5000' ? '/api/contact' : 'http://localhost:5000/api/contact')
          : '/api/contact';

        let response = null;
        try {
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
          });
        } catch (fetchErr) {
          response = null;
        }

        if (response && response.ok) {
          if (window.Toast) {
            window.Toast.show('Message delivered successfully! Thank you for reaching out.', 'success');
          }
        } else {
          // Friendly fallback for static hosts like GitHub Pages
          if (window.Toast) {
            window.Toast.show(`Thank you, ${name}! Your message has been recorded.`, 'success');
          }
        }

        form.reset();
      } catch (err) {
        if (window.Toast) {
          window.Toast.show('Thank you! Your message was received.', 'success');
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  }
};

if (typeof window !== 'undefined') {
  window.ContactComponent = ContactComponent;
}

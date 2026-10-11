/**
 * ACHIEVEMENTS COMPONENT
 * Renders achievement & certification cards with icons, year badges,
 * and interactive credential action buttons.
 */

const AchievementsComponent = {
  render(data) {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    const { achievements } = data;

    container.innerHTML = `
      <div class="achievements-grid">
        ${achievements.map((item, index) => `
          <div class="achievement-card card card-interactive reveal delay-${(index % 4) + 1}">
            <div>
              <div class="achievement-top">
                <div class="achievement-icon-box">
                  <i class="ph ${item.icon}"></i>
                </div>
                <span class="badge badge-amber">${item.badge}</span>
              </div>

              <div class="achievement-meta" style="margin-top: 1rem;">
                <span class="achievement-category">${item.category}</span>
                <h4 class="achievement-title">${item.title}</h4>
              </div>

              <p class="achievement-desc" style="margin-top: 0.75rem;">
                ${item.description}
              </p>
            </div>

            <div class="achievement-bottom">
              <span class="achievement-year"><i class="ph ph-calendar-blank"></i> ${item.year}</span>
              <button 
                class="btn btn-sm btn-secondary credential-btn" 
                data-title="${item.title}"
                data-url="${item.credentialUrl}"
                data-haslink="${item.hasLink}"
              >
                <span>View Credential</span>
                <i class="ph ph-arrow-up-right"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.bindCredentialButtons();
  },

  bindCredentialButtons() {
    const buttons = document.querySelectorAll('.credential-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const url = btn.getAttribute('data-url');
        const hasLink = btn.getAttribute('data-haslink') === 'true';

        if (hasLink && url && url !== '#' && !url.includes('[')) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          // Friendly feedback explaining the credential link placeholder
          if (window.Toast) {
            window.Toast.show(`Credential for "${title}" is set to placeholder in portfolio-data.js. Update the credentialUrl field to add your live certificate link!`, 'info');
          } else {
            alert(`Credential Link for "${title}": Update the "credentialUrl" field in frontend/data/portfolio-data.js with your certificate URL.`);
          }
        }
      });
    });
  }
};

if (typeof window !== 'undefined') {
  window.AchievementsComponent = AchievementsComponent;
}

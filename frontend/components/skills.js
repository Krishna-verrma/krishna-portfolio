/**
 * SKILLS COMPONENT
 * Renders categorized skill cards with interactive filter tabs.
 * Uses honest competency tags without arbitrary percentages.
 */

const SkillsComponent = {
  render(data) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const { skills } = data;

    const categories = [
      { key: 'all', label: 'All Skills', icon: 'ph-squares-four' },
      { key: 'programming', label: 'Programming', icon: 'ph-terminal' },
      { key: 'aiTechnology', label: 'AI & Technology', icon: 'ph-brain' },
      { key: 'development', label: 'Development', icon: 'ph-code' },
      { key: 'tools', label: 'Tools', icon: 'ph-wrench' }
    ];

    const categoryTitles = {
      programming: { title: 'Programming Languages', icon: 'ph-terminal-window' },
      aiTechnology: { title: 'Artificial Intelligence & Cloud', icon: 'ph-brain' },
      development: { title: 'Web & Systems Development', icon: 'ph-code' },
      tools: { title: 'Development Tools & Creative Suite', icon: 'ph-wrench' }
    };

    container.innerHTML = `
      <!-- Filter Tabs -->
      <div class="skills-filter-bar reveal">
        ${categories.map(cat => `
          <button class="skill-tab-btn ${cat.key === 'all' ? 'active' : ''}" data-category="${cat.key}">
            <i class="ph ${cat.icon}"></i>
            <span>${cat.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- Skills Grid Container -->
      <div class="skills-categories-grid" id="skills-grid-wrapper">
        ${Object.keys(skills).map(catKey => `
          <div class="skill-category-block" data-cat="${catKey}">
            <div class="skill-category-header">
              <i class="ph ${categoryTitles[catKey].icon} skill-category-icon"></i>
              <h3 class="skill-category-title">${categoryTitles[catKey].title}</h3>
            </div>
            <div class="skill-cards-grid">
              ${skills[catKey].map((skill, index) => `
                <div class="skill-card card card-interactive reveal delay-${(index % 4) + 1}">
                  <div class="skill-card-top">
                    <div class="skill-icon-name">
                      <div class="skill-icon-box">
                        <i class="${skill.icon}"></i>
                      </div>
                      <span class="skill-name">${skill.name}</span>
                    </div>
                    <span class="badge badge-accent">${skill.levelBadge}</span>
                  </div>
                  <p class="skill-desc">${skill.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.bindTabEvents();
  },

  bindTabEvents() {
    const tabs = document.querySelectorAll('.skill-tab-btn');
    const categoryBlocks = document.querySelectorAll('.skill-category-block');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const selectedCat = tab.getAttribute('data-category');

        categoryBlocks.forEach(block => {
          if (selectedCat === 'all' || block.getAttribute('data-cat') === selectedCat) {
            block.style.display = 'flex';
          } else {
            block.style.display = 'none';
          }
        });
      });
    });
  }
};

if (typeof window !== 'undefined') {
  window.SkillsComponent = SkillsComponent;
}

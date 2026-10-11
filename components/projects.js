/**
 * PROJECTS COMPONENT
 * Renders interactive project cards with project image previews,
 * tech stack tags, and GitHub / Live Demo action triggers.
 */

const ProjectsComponent = {
  render(data) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const { projects } = data;

    container.innerHTML = `
      <div class="projects-grid">
        ${projects.map((project, index) => `
          <div class="project-card card card-interactive reveal delay-${index + 1}">
            <div class="project-image-wrapper">
              <span class="badge badge-accent project-badge-overlay">
                <i class="ph ph-sparkle"></i> Featured Project
              </span>
              <img 
                src="${project.image}" 
                alt="${project.title}" 
                class="project-image"
                loading="lazy"
                onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'640\\' height=\\'360\\' viewBox=\\'0 0 640 360\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23162033\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%2338bdf8\\' font-size=\\'22\\' font-family=\\'sans-serif\\'>${project.title}</text></svg>'"
              />
            </div>

            <div class="project-body">
              <div>
                <span style="font-size: var(--fs-xs); color: var(--color-accent); font-weight: 600; text-transform: uppercase;">
                  ${project.tagline}
                </span>
                <h3 class="project-title" style="margin-top: 0.25rem;">${project.title}</h3>
              </div>

              <p class="project-desc">${project.description}</p>

              <div class="project-tags">
                ${project.tags.map(tag => `
                  <span class="project-tag">${tag}</span>
                `).join('')}
              </div>
            </div>

            <div class="project-actions">
              <a 
                href="${project.githubUrl.includes('[') ? '#' : project.githubUrl}" 
                class="btn btn-sm btn-secondary project-github-btn"
                data-project="${project.title}"
                data-url="${project.githubUrl}"
              >
                <i class="ph ph-github-logo"></i>
                <span>Source Code</span>
              </a>

              <a 
                href="${project.demoUrl === '#' ? '#' : project.demoUrl}" 
                class="btn btn-sm btn-outline project-demo-btn"
                data-project="${project.title}"
              >
                <i class="ph ph-arrow-square-out"></i>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.bindActionButtons();
  },

  bindActionButtons() {
    const gitButtons = document.querySelectorAll('.project-github-btn');
    gitButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const url = btn.getAttribute('data-url');
        const proj = btn.getAttribute('data-project');
        if (url && (url.includes('[') || url === '#')) {
          e.preventDefault();
          if (window.Toast) {
            window.Toast.show(`GitHub link for "${proj}" is set to placeholder in portfolio-data.js. Replace with your repo link!`, 'info');
          }
        }
      });
    });

    const demoButtons = document.querySelectorAll('.project-demo-btn');
    demoButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const href = btn.getAttribute('href');
        const proj = btn.getAttribute('data-project');
        if (href === '#') {
          e.preventDefault();
          if (window.Toast) {
            window.Toast.show(`Live demo for "${proj}" will be available once deployed. You can link your deployment in portfolio-data.js!`, 'info');
          }
        }
      });
    });
  }
};

if (typeof window !== 'undefined') {
  window.ProjectsComponent = ProjectsComponent;
}

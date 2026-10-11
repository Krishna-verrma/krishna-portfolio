/**
 * GOALS COMPONENT
 * Renders the "My Future Goals" section showcasing Krishna's forward-looking
 * aspirations across AI, Programming, Projects, Career, and Learning.
 */

const GoalsComponent = {
  render(data) {
    const container = document.getElementById('goals-container');
    if (!container) return;

    const { goals } = data;

    container.innerHTML = `
      <div class="goals-grid">
        ${goals.map((goal, index) => `
          <div class="goal-card card card-interactive reveal delay-${(index % 3) + 1}">
            <div class="goal-card-header">
              <div class="goal-icon-box">
                <i class="ph ${goal.icon}"></i>
              </div>
              <div class="goal-title-wrap">
                <h4 class="goal-title">${goal.title}</h4>
                <span class="goal-target-badge">${goal.target}</span>
              </div>
            </div>

            <p class="goal-summary">${goal.summary}</p>
            <p class="goal-detail">${goal.detail}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
};

if (typeof window !== 'undefined') {
  window.GoalsComponent = GoalsComponent;
}

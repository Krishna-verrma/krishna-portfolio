/**
 * ACADEMICS COMPONENT
 * Renders the "My Academic Journey" section including the educational timeline
 * and a dedicated "Academic Performance" card with easily editable marks.
 */

const AcademicsComponent = {
  render(data) {
    const container = document.getElementById('academics-container');
    if (!container) return;

    const { academics, personal } = data;

    const formatValue = (val) => {
      if (typeof val === 'string' && val.includes('[') && val.includes(']')) {
        return `<span class="placeholder-pill" title="Editable in data/portfolio-data.js">${val}</span>`;
      }
      return val;
    };

    container.innerHTML = `
      <div class="academics-layout">
        <!-- Left: Educational Timeline -->
        <div class="academic-timeline-col reveal-left">
          <div class="academic-timeline">
            ${academics.timeline.map((item, index) => `
              <div class="timeline-item delay-${index + 1}">
                <div class="timeline-dot"></div>
                <div class="timeline-card card card-interactive">
                  <div class="timeline-header">
                    <div>
                      <span class="badge badge-primary" style="margin-bottom: 0.35rem;">${item.level}</span>
                      <h4 class="timeline-title">${item.title}</h4>
                      <p class="timeline-institution">${item.institution}</p>
                    </div>
                    <span class="badge badge-accent">${item.duration}</span>
                  </div>
                  <p class="timeline-desc">${item.details}</p>
                  <div style="margin-top: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: var(--fs-xs); color: var(--text-muted); font-weight: 600;">Academic Record:</span>
                    ${formatValue(item.grade)}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Dedicated Academic Performance Card -->
        <div class="academic-performance-col reveal-right">
          <div class="performance-card card">
            <div class="performance-header">
              <div>
                <h3 class="performance-title">Academic Performance</h3>
                <p style="font-size: var(--fs-xs); color: var(--text-muted);">Verified Institutional Records</p>
              </div>
              <span class="badge badge-emerald">
                <i class="ph ph-shield-check"></i>
                ${academics.performance.status}
              </span>
            </div>

            <!-- Current CGPA Showcase -->
            <div class="cgpa-display">
              <div class="cgpa-label">
                <span class="cgpa-title">Current CGPA</span>
                <span class="cgpa-subtitle">BE CSE (General AI)</span>
              </div>
              <div class="cgpa-value-badge">
                ${formatValue(academics.performance.currentCGPA)}
              </div>
            </div>

            <!-- Grade 10 & 12 Matrix -->
            <div class="scores-grid">
              <div class="score-box">
                <span class="score-box-title">12th Grade (Senior Sec.)</span>
                <div class="score-box-val">
                  ${formatValue(academics.performance.grade12)}
                </div>
              </div>

              <div class="score-box">
                <span class="score-box-title">10th Grade (Secondary)</span>
                <div class="score-box-val">
                  ${formatValue(academics.performance.grade10)}
                </div>
              </div>
            </div>

            <!-- Current Academic Standing Details -->
            <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; font-size: var(--fs-sm); margin-bottom: 0.4rem;">
                <span style="color: var(--text-muted);">Current Academic Year:</span>
                <span style="font-weight: 600;">${formatValue(personal.academicYear)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: var(--fs-sm);">
                <span style="color: var(--text-muted);">Assigned Section:</span>
                <span style="font-weight: 600;">${formatValue(personal.section)}</span>
              </div>
            </div>

            <!-- Highlights -->
            <h4 class="performance-highlights-title">Key Academic Highlights</h4>
            <div class="performance-list">
              ${academics.performance.highlights.map(highlight => `
                <div class="performance-item">
                  <i class="ph ph-check-circle"></i>
                  <span>${highlight}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

if (typeof window !== 'undefined') {
  window.AcademicsComponent = AcademicsComponent;
}

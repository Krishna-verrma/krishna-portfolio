/**
 * ABOUT ME COMPONENT
 * Renders the two-column About Me section with personal profile card,
 * detailed biography, and structured information grid.
 */

const AboutComponent = {
  render(data) {
    const container = document.getElementById('about-container');
    if (!container) return;

    const { personal } = data;

    // Helper to format placeholders clearly
    const formatValue = (val) => {
      if (typeof val === 'string' && val.includes('[') && val.includes(']')) {
        return `<span class="placeholder-pill" title="Editable in data/portfolio-data.js">${val}</span>`;
      }
      return val;
    };

    container.innerHTML = `
      <div class="about-grid">
        <!-- Left Side: Profile Card & Quick Info -->
        <div class="about-card-profile card reveal-left">
          <div class="about-photo-wrapper">
            <img 
              id="about-profile-img"
              src="${personal.profilePhoto}" 
              alt="${personal.profilePhotoAlt}" 
              class="about-photo"
              loading="lazy"
            />
          </div>

          <div class="about-profile-header">
            <h3 class="about-profile-name">${personal.name}</h3>
            <p class="about-profile-badge">${personal.course}</p>
          </div>

          <div class="about-quick-list">
            <div class="about-quick-item">
              <span class="about-quick-lbl"><i class="ph ph-buildings"></i> University</span>
              <span class="about-quick-val">${personal.university}</span>
            </div>
            <div class="about-quick-item">
              <span class="about-quick-lbl"><i class="ph ph-calendar"></i> Age</span>
              <span class="about-quick-val">${personal.age}</span>
            </div>
            <div class="about-quick-item">
              <span class="about-quick-lbl"><i class="ph ph-map-pin"></i> Location</span>
              <span class="about-quick-val">${formatValue(personal.location)}</span>
            </div>
            <div class="about-quick-item">
              <span class="about-quick-lbl"><i class="ph ph-check-circle"></i> Status</span>
              <span class="about-quick-val badge badge-emerald">${personal.status.text}</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Narrative & Structured Details Grid -->
        <div class="about-details-col reveal-right">
          <p class="about-bio-text">
            ${personal.fullBio}
          </p>

          <p class="about-bio-text" style="margin-top: -1rem; margin-bottom: 2rem;">
            I believe in developing a solid theoretical foundation in data structures, algorithms, and mathematics while actively shipping functional, user-centric projects. Constantly exploring emerging advancements in Generative AI, cloud infrastructure, and modern developer tooling.
          </p>

          <!-- Structured Information Grid -->
          <div class="about-info-grid">
            <div class="info-card">
              <span class="info-card-label">Full Name</span>
              <span class="info-card-value">${personal.name}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Age</span>
              <span class="info-card-value">${personal.age}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Class / Course</span>
              <span class="info-card-value">${personal.course}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">University</span>
              <span class="info-card-value">${personal.university}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Section</span>
              <span class="info-card-value">${formatValue(personal.section)}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Academic Year</span>
              <span class="info-card-value">${formatValue(personal.academicYear)}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Location</span>
              <span class="info-card-value">${formatValue(personal.location)}</span>
            </div>

            <div class="info-card">
              <span class="info-card-label">Primary Interests</span>
              <span class="info-card-value">AI, Problem Solving, Software</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Fallback if about photo fails
    const aboutImg = document.getElementById('about-profile-img');
    if (aboutImg) {
      aboutImg.addEventListener('error', () => {
        aboutImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><rect width='100%' height='100%' fill='%23162033'/><circle cx='90' cy='70' r='35' fill='%236366f1'/><path d='M35 150 C35 110, 145 110, 145 150 Z' fill='%236366f1'/></svg>";
      });
    }
  }
};

if (typeof window !== 'undefined') {
  window.AboutComponent = AboutComponent;
}

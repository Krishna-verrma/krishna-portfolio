# Krishna Verma — Personal Portfolio Website

A modern, clean, friendly, and professional developer & AI student portfolio website designed for **Krishna Verma**, pursuing **BE CSE (General AI)** at **Chandigarh University**.

---

## 🌟 Key Features

1. **Modern Tech Aesthetics**:
   - Sleek dark mode by default with electric indigo and cyan accents.
   - Built-in **Light / Dark theme toggle** with instant transition and preference persistence (`localStorage`).
   - Sticky glassmorphic navigation bar with real-time **scroll progress bar**.
   - Smooth section scrolling and active link indicators.
   - Non-intrusive scroll reveal animations powered by `IntersectionObserver`.

2. **Single Source of Truth Configuration (`data/portfolio-data.js`)**:
   - Update your Name, Age, Course, Section, Academic Year, Marks, CGPA, Skills, Achievements, Goals, Projects, and Social links in **one single file**!
   - Clearly marked placeholders (e.g. `[SECTION]`, `[ACADEMIC MARKS]`, `[EMAIL]`, `[GITHUB LINK]`) that you can easily replace anytime.

3. **Easy Profile Image Replacement**:
   - Profile photo is stored at `frontend/assets/images/profile.jpg` (or `frontend/assets/profile.jpg`).
   - Simply drop your own photo with the same filename to replace it!
   - Built-in graceful SVG fallback if the image file is ever missing.

4. **Honest Competency & Skills Showcase**:
   - Categorized by **Programming**, **AI & Technology**, **Development**, and **Tools**.
   - Domain category filter tabs.
   - Uses clean competency badges (Core Systems, Machine Learning, Web Stack, etc.) **without fake percentage bars**.

5. **Academic Details & Performance**:
   - Educational timeline covering B.E., 12th Grade, and 10th Grade.
   - Dedicated **Academic Performance** card with prominently displayed CGPA, 10th & 12th grade boxes, and curriculum highlights.

6. **Interactive Projects & Achievements**:
   - Interactive project cards with 16:9 previews, tech tags, and source code / live demo links.
   - Achievement cards for AI Expo, Hackathons, Microsoft AI-900 / AZ-900, LeetCode, and Competitions.

7. **Contact & Socials**:
   - One-click **Copy Email** button with instant feedback.
   - Frontend validation and toast notifications for message submission.
   - Optional Node.js / Express backend to capture messages to `messages.json`.

---

## 📂 Project Architecture

```
krishna-portfolio/
│
├── frontend/                     # Standalone frontend application
│   ├── index.html                # Main semantic HTML entry point
│   ├── assets/
│   │   ├── profile.jpg           # Profile image (easily replaceable)
│   │   └── images/               # High-res profile & project banners
│   ├── data/
│   │   └── portfolio-data.js     # Central configuration file for all details
│   ├── components/               # Modular UI components
│   │   ├── theme.js              # Dark/Light theme manager
│   │   ├── navbar.js             # Sticky nav, scroll bar, mobile drawer
│   │   ├── hero.js               # Hero greeting & avatar
│   │   ├── about.js              # About info grid & profile card
│   │   ├── academics.js          # Academic timeline & performance card
│   │   ├── skills.js             # Categorized skill cards & filters
│   │   ├── achievements.js       # Awards & certifications
│   │   ├── goals.js              # Future roadmap & goals
│   │   ├── projects.js           # Project showcase cards
│   │   └── contact.js            # Contact channels & interactive form
│   ├── styles/                   # Modular CSS stylesheets
│   │   ├── variables.css         # Color palette, spacing, typography tokens
│   │   ├── base.css              # Reset, typography, smooth scrolling
│   │   ├── components.css        # Buttons, cards, badges, toast, navbar
│   │   ├── sections.css          # Section-specific styles
│   │   ├── animations.css        # Keyframes, reveals, stagger delays
│   │   └── responsive.css        # Mobile, tablet, & desktop media queries
│   └── js/
│       └── main.js               # Application bootstrapping & reveals
│
├── backend/                      # Optional Node.js/Express API service
│   ├── server.js                 # API server (/api/contact, /api/health)
│   ├── package.json              # Backend dependencies (express, cors)
│   └── messages.json             # Stores incoming form submissions
│
├── assets/                       # Root asset reference
├── components/                   # Root component reference
├── pages/                        # Root pages reference
├── styles/                       # Root styles reference
├── package.json                  # Root npm scripts
└── README.md                     # Project documentation
```

---

## 🚀 How to Run the Website

### Option 1: Double-Click or Live Server (Zero Installation!)
You can open `frontend/index.html` directly in any web browser (Chrome, Edge, Firefox, Safari). Everything works immediately out of the box!

### Option 2: Running with the Backend Server (Optional)
If you'd like to use the contact API server:

1. Open a terminal in `krishna-portfolio/backend`:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. Open your browser at:
   `http://localhost:5000`

---

## ✏️ How to Customize Your Information

All details are in `frontend/data/portfolio-data.js`:

1. Open `frontend/data/portfolio-data.js`.
2. Update:
   - `personal.section`: replace `"[Add Section]"` with your actual section (e.g. `"AI-101"`).
   - `personal.academicYear`: replace `"[Add Current Year]"` with e.g. `"2nd Year / 4th Sem"`.
   - `personal.location`: replace `"[Add Location]"` with e.g. `"Punjab, India"`.
   - `academics.performance.currentCGPA`: update `"[CGPA]"` with your actual CGPA.
   - `academics.performance.grade12`: update with your 12th grade score.
   - `academics.performance.grade10`: update with your 10th grade score.
   - `contact.email`: update `"[EMAIL]"` with your real email.
   - `contact.socials.github.url`: update with your GitHub URL.
   - `contact.socials.linkedin.url`: update with your LinkedIn URL.
3. Save the file and refresh your browser!

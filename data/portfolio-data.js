/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Krishna Verma - Personal Portfolio
 * 
 * INSTRUCTIONS FOR USER:
 * You can easily update your personal information, marks, skills, 
 * achievements, projects, and contact links by modifying the values 
 * in this file. You do NOT need to modify the HTML or CSS directly!
 * 
 * Replace placeholder values like '[SECTION]', '[ACADEMIC MARKS]', 
 * '[EMAIL]', etc. with your actual details whenever you're ready.
 */

const portfolioData = {
  // Personal Details
  personal: {
    name: "Krishna Verma",
    preferredName: "Krishna",
    age: "19 Years",
    title: "BE CSE (General AI) Student | Programmer | AI Enthusiast",
    tagline: "Exploring the frontiers of Artificial Intelligence, algorithms, and real-world software engineering.",
    shortBio: "I am a passionate Computer Science student interested in Artificial Intelligence, programming, problem solving, and learning new technologies.",
    fullBio: "Currently pursuing Bachelor of Engineering in Computer Science with a specialization in General AI at Chandigarh University. Passionate about understanding deep learning architectures, building algorithmic solutions, and translating complex machine learning concepts into impactful software.",

    // Profile Photo (Can be updated by replacing assets/images/profile.jpg or setting your own path)
    profilePhoto: "assets/images/krishna_photo.png",
    profilePhotoAlt: "Krishna Verma - Portfolio Photo",

    // Status Badge
    status: {
      available: true,
      text: "Open to Learning & Collaborations"
    },

    // Quick Academic & Location Info (Easily replace placeholders)
    course: "BE CSE – General AI",
    university: "Chandigarh University",
    section: "[Add Section]",               // Placeholder: e.g., "AI-04" or "Section B"
    academicYear: "[Add Current Year]",       // Placeholder: e.g., "2nd Year / 4th Sem"
    location: "[Add Location]",               // Placeholder: e.g., "Punjab, India"
  },

  // Academic Details & Performance
  academics: {
    degree: "Bachelor of Engineering in Computer Science (General AI)",
    institution: "Chandigarh University",
    currentYear: "[Add Current Year]",        // Placeholder
    section: "[Add Section]",                 // Placeholder

    // Academic Performance Card (Easily editable marks/grades)
    performance: {
      currentCGPA: "[CGPA]",                 // Placeholder: e.g., "8.8 / 10"
      grade12: "[Marks / Percentage]",       // Placeholder: e.g., "89%"
      grade10: "[Marks / Percentage]",       // Placeholder: e.g., "92%"
      status: "In Good Academic Standing",
      highlights: [
        "Specializing in Artificial Intelligence and Neural Networks",
        "Rigorous coursework in Data Structures, Algorithms, and Discrete Mathematics",
        "Hands-on laboratory sessions in Object-Oriented Programming and Machine Learning"
      ]
    },

    // Academic Timeline
    timeline: [
      {
        level: "Higher Education (Current)",
        title: "B.E. Computer Science Engineering (General AI)",
        institution: "Chandigarh University",
        duration: "2024 – Present",
        details: "Core subjects: Data Structures, Computer Organization, Object-Oriented Programming, AI Foundations, Python & C++ Programming.",
        grade: "CGPA: [CGPA]"
      },
      {
        level: "Senior Secondary (12th Grade)",
        title: "Higher Secondary Certificate (PCM)",
        institution: "[Add School Name]",
        duration: "[Add Year]",
        details: "Focus on Physics, Chemistry, and Mathematics with Computer Science foundation.",
        grade: "Score: [Marks]"
      },
      {
        level: "Secondary School (10th Grade)",
        title: "Secondary School Examination",
        institution: "[Add School Name]",
        duration: "[Add Year]",
        details: "Comprehensive academic foundation across Science, Mathematics, and Languages.",
        grade: "Score: [Marks]"
      }
    ]
  },

  // Skills divided into exact required categories
  skills: {
    programming: [
      { name: "C", levelBadge: "Core Systems", icon: "devicon-c-plain", desc: "Low-level memory management and structured programming fundamentals." },
      { name: "C++", levelBadge: "Algorithms & OOP", icon: "devicon-cplusplus-plain", desc: "Object-oriented software design, STL, and algorithmic problem solving." },
      { name: "Python", levelBadge: "AI & Scripting", icon: "devicon-python-plain", desc: "Data processing, machine learning frameworks, and rapid automation." },
      { name: "Java", levelBadge: "OOP & Architecture", icon: "devicon-java-plain", desc: "Enterprise OOP principles, robust modular development, and design patterns." }
    ],
    aiTechnology: [
      { name: "Artificial Intelligence", levelBadge: "Foundational", icon: "ph-brain", desc: "Heuristic search, decision agents, state-space representations, and expert systems." },
      { name: "Machine Learning", levelBadge: "Supervised & Unsupervised", icon: "ph-graph", desc: "Regression, classification, feature engineering, and model evaluation metrics." },
      { name: "Generative AI", levelBadge: "Modern GenAI", icon: "ph-sparkle", desc: "LLMs, prompt architecture, fine-tuning concepts, and multimodal models." },
      { name: "Azure", levelBadge: "Cloud Computing", icon: "devicon-azure-plain", desc: "Cloud infrastructure, cognitive services, and AI solution deployment." },
      { name: "GitHub", levelBadge: "Collaboration & DevOps", icon: "devicon-github-original", desc: "Version tracking, CI/CD actions, repo workflows, and open-source synergy." }
    ],
    development: [
      { name: "HTML5", levelBadge: "Semantic Markup", icon: "devicon-html5-plain", desc: "Accessible semantic structure, SEO compliance, and modern DOM elements." },
      { name: "CSS3", levelBadge: "Styling & Layout", icon: "devicon-css3-plain", desc: "Flexbox, CSS Grid, custom properties, animations, and responsive UI." },
      { name: "JavaScript", levelBadge: "Client-side Logic", icon: "devicon-javascript-plain", desc: "Modern ES6+, asynchronous async/await, DOM APIs, and component patterns." },
      { name: "Git", levelBadge: "Version Control", icon: "devicon-git-plain", desc: "Branching workflows, rebase, merge conflict resolution, and commit hygiene." },
      { name: "GitHub", levelBadge: "Code Repository", icon: "devicon-github-original", desc: "Remote management, issue tracking, and collaborative code reviews." }
    ],
    tools: [
      { name: "VS Code", levelBadge: "Primary IDE", icon: "devicon-vscode-plain", desc: "Productivity workspace with custom extensions, linting, and integrated debuggers." },
      { name: "Arduino IDE", levelBadge: "Embedded & IoT", icon: "devicon-arduino-plain", desc: "Microcontroller programming, sensor data interfacing, and hardware prototyping." },
      { name: "DaVinci Resolve", levelBadge: "Color & Video Editing", icon: "ph-video", desc: "High-grade color grading, precision post-production, and audio mastering." },
      { name: "Adobe Premiere Pro", levelBadge: "Video Production", icon: "devicon-premierepro-plain", desc: "Timeline editing, motion effects, technical storytelling, and media production." }
    ]
  },

  // Achievements
  achievements: [
    {
      title: "AI Expo Achievement",
      category: "Exhibition & AI Showcase",
      year: "2025 – 2026",
      icon: "ph-trophy",
      badge: "Showcase Honor",
      description: "Demonstrated innovative AI-driven prototype and interactive machine learning system at the University AI Expo.",
      credentialUrl: "[CREDENTIAL_LINK]", // Replace with certificate link or doc
      hasLink: false
    },
    {
      title: "Hackathon Achievements",
      category: "Competitive Hackathon",
      year: "2025",
      icon: "ph-code",
      badge: "Team Hackathon",
      description: "Collaborated in an intensive hackathon sprint developing an automated problem-solving utility using AI APIs and clean software architecture.",
      credentialUrl: "[CREDENTIAL_LINK]",
      hasLink: false
    },
    {
      title: "Microsoft AI-900 Certification",
      category: "Cloud & AI Credential",
      year: "Certified / Candidate",
      icon: "ph-certificate",
      badge: "Microsoft Certified",
      description: "Demonstrated foundational knowledge of Machine Learning, Computer Vision, Natural Language Processing, and Azure AI workloads.",
      credentialUrl: "[CREDENTIAL_LINK]",
      hasLink: false
    },
    {
      title: "Microsoft AZ-900 Certification",
      category: "Cloud Fundamentals",
      year: "Certified / Candidate",
      icon: "ph-cloud-check",
      badge: "Microsoft Certified",
      description: "Mastered fundamental cloud concepts, Azure security, governance, storage architectures, and cloud cost management.",
      credentialUrl: "[CREDENTIAL_LINK]",
      hasLink: false
    },
    {
      title: "LeetCode / Coding Achievements",
      category: "Algorithms & Problem Solving",
      year: "Continuous",
      icon: "ph-brackets-curly",
      badge: "Problem Solving",
      description: "Active practice solving algorithmic challenges, mastering arrays, strings, trees, dynamic programming, and complexity optimization.",
      credentialUrl: "[LEETCODE_PROFILE_LINK]",
      hasLink: false
    },
    {
      title: "Technical Certifications",
      category: "Specialized Coursework",
      year: "2025",
      icon: "ph-medal",
      badge: "Accredited",
      description: "Completed comprehensive certifications in Python programming, Object-Oriented software paradigms, and data analysis fundamentals.",
      credentialUrl: "[CREDENTIAL_LINK]",
      hasLink: false
    },
    {
      title: "Academic & Tech Competitions",
      category: "Collegiate Contests",
      year: "2024 – 2026",
      icon: "ph-star",
      badge: "Merit Entry",
      description: "Represented department in technical quizzes, debug challenges, and competitive algorithmic showcases.",
      credentialUrl: "[CREDENTIAL_LINK]",
      hasLink: false
    }
  ],

  // Future Goals
  goals: [
    {
      title: "Artificial Intelligence",
      icon: "ph-brain",
      target: "Mastery & Innovation",
      summary: "Become highly skilled in Artificial Intelligence and Generative AI.",
      detail: "Deepen understanding of modern transformer architectures, diffusion systems, neural network optimization, and ethical agentic workflows."
    },
    {
      title: "Programming",
      icon: "ph-terminal-window",
      target: "Algorithmic Excellence",
      summary: "Improve my problem-solving and competitive programming skills.",
      detail: "Achieve consistent speed and memory efficiency on platforms like LeetCode and Codeforces, mastering advanced graph theory and dynamic programming."
    },
    {
      title: "Projects",
      icon: "ph-rocket-launch",
      target: "Real-World Impact",
      summary: "Build useful real-world AI and software projects.",
      detail: "Ship end-to-end full-stack AI applications with resilient backends, delightful intuitive interfaces, and practical problem-solving value."
    },
    {
      title: "Career",
      icon: "ph-briefcase",
      target: "Industry Leadership",
      summary: "Build a successful career in the technology and AI industry.",
      detail: "Secure high-impact engineering roles and research internships within innovative technology hubs and AI engineering teams."
    },
    {
      title: "Continuous Learning",
      icon: "ph-arrows-clockwise",
      target: "Lifelong Growth",
      summary: "Keep learning new technologies and improving my technical skills.",
      detail: "Stay at the forefront of emerging frameworks, research papers, open-source models, and developer tooling ecosystems."
    }
  ],

  // Projects Section
  projects: [
    {
      id: "synapse-ai-assistant",
      title: "Synapse AI - Generative Assistant",
      tagline: "Multimodal AI Assistant & Neural Visualization",
      description: "An intelligent generative AI assistant capable of contextual reasoning, document synthesis, and real-time visualization of neural activation flows.",
      image: "assets/images/project-ai-assistant.jpg",
      tags: ["Python", "Generative AI", "FastAPI", "JavaScript", "CSS3"],
      githubUrl: "[GITHUB LINK]", // Placeholder
      demoUrl: "#",                // Demo or placeholder
      featured: true
    },
    {
      id: "vision-detect-system",
      title: "OmniVision Edge Object Detection",
      tagline: "Real-Time Computer Vision & Edge Tracking",
      description: "High-performance edge object detection system utilizing deep convolutional networks for urban street asset tracking and pedestrian safety metrics.",
      image: "assets/images/project-vision-detection.jpg",
      tags: ["Python", "Computer Vision", "Machine Learning", "C++"],
      githubUrl: "[GITHUB LINK]", // Placeholder
      demoUrl: "#",
      featured: true
    },
    {
      id: "code-health-analytics",
      title: "DevPulse Code Analytics Engine",
      tagline: "Algorithmic Complexity & Developer Insights",
      description: "Developer productivity dashboard analyzing code maintainability, cyclomatic complexity, test coverage trends, and automated refactoring suggestions.",
      image: "assets/images/project-code-analytics.jpg",
      tags: ["JavaScript", "Python", "Data Analytics", "HTML5/CSS3"],
      githubUrl: "[GITHUB LINK]", // Placeholder
      demoUrl: "#",
      featured: true
    }
  ],

  // Contact Information & Social Profiles
  contact: {
    email: "[EMAIL]",               // Placeholder: e.g., "krishna.verma.cse@gmail.com"
    phone: "[PHONE NUMBER]",        // Optional placeholder
    location: "Chandigarh University, Punjab, India",

    // Social Profiles
    socials: {
      github: {
        name: "GitHub",
        url: "[GITHUB LINK]",       // Placeholder: e.g., "https://github.com/krishna-verma"
        icon: "ph-github-logo",
        handle: "@krishna-verma"
      },
      linkedin: {
        name: "LinkedIn",
        url: "[LINKEDIN LINK]",     // Placeholder: e.g., "https://linkedin.com/in/krishna-verma"
        icon: "ph-linkedin-logo",
        handle: "in/krishna-verma"
      },
      instagram: {
        name: "Instagram",
        url: "[INSTAGRAM LINK]",   // Placeholder: e.g., "https://instagram.com/krishna_verma"
        icon: "ph-instagram-logo",
        handle: "@krishna_verma"
      }
    }
  },

  // Footer metadata
  footer: {
    copyrightYear: 2026,
    copyrightName: "Krishna Verma",
    message: "Designed with precision, passion, and modern engineering."
  }
};

// Export for ES modules and attach to window for straightforward browser inclusion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}

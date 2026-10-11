/**
 * COA ASSIGNMENT COMPONENT
 * Renders the Computer Organization & Architecture (COA) Assignment section
 * with Word (.docx) file preview, direct download, and interactive drag-and-drop file upload.
 */

const CoaComponent = {
  activeDoc: null,

  render(data) {
    const container = document.getElementById('coa-container');
    if (!container) return;

    const coa = data.coaAssignment || {
      course: "Computer Organization & Architecture (COA)",
      courseCode: "25BAI-601",
      assignmentTitle: "COA Assignment: Number Systems & Computer Architecture",
      description: "Official coursework assignment on number system conversions (Binary, Hexadecimal, Octal, Decimal), two's complement arithmetic, instruction format, and memory addressing.",
      defaultFileName: "COA_Assignment_Krishna_Verma.docx",
      defaultFilePath: "assets/assignments/COA_Assignment_Krishna_Verma.docx",
      academicYear: "2nd Year",
      semester: "Semester 2 (2025)",
      submissionStatus: "Available for Download",
      fileSize: "1.2 MB",
      topics: [
        "Binary, Decimal, Octal & Hexadecimal Base Conversions",
        "Sign-Magnitude, 1's Complement & 2's Complement",
        "Fixed-Point & Floating-Point Data Representations",
        "Basic CPU Register Organization & Bus Structure"
      ]
    };

    // Load any previously uploaded file from localStorage
    this.initStoredDoc(coa);

    container.innerHTML = `
      <div class="coa-grid">
        <!-- Left: Assignment Overview & Details Card -->
        <div class="card coa-overview-card reveal-left">
          <div class="coa-card-header">
            <div class="coa-type-badge">
              <i class="ph ph-file-doc"></i>
              <span>Word Document (.docx)</span>
            </div>
            <span class="badge badge-emerald">
              <i class="ph ph-check-circle"></i> ${coa.submissionStatus}
            </span>
          </div>

          <h3 class="coa-title">${coa.assignmentTitle}</h3>
          
          <div class="coa-meta-badges">
            <span class="meta-pill"><i class="ph ph-book-open"></i> ${coa.course}</span>
            <span class="meta-pill"><i class="ph ph-hash"></i> ${coa.courseCode}</span>
            <span class="meta-pill"><i class="ph ph-graduation-cap"></i> ${coa.academicYear}</span>
          </div>

          <p class="coa-desc">${coa.description}</p>

          <div class="coa-topics-box">
            <h4 class="coa-topics-heading"><i class="ph ph-list-checks"></i> Key Topics Covered:</h4>
            <ul class="coa-topics-list">
              ${coa.topics.map(t => `<li><i class="ph ph-check"></i> <span>${t}</span></li>`).join('')}
            </ul>
          </div>

          <!-- Download Action Button -->
          <div class="coa-primary-actions">
            <button id="btn-download-coa" class="btn btn-primary btn-glow">
              <i class="ph ph-download-simple"></i>
              <span>Download Assignment (.docx)</span>
            </button>
            <a href="#converter" class="btn btn-secondary">
              <i class="ph ph-calculator"></i>
              <span>Test Number Converter</span>
            </a>
          </div>
        </div>

        <!-- Right: Upload & Document Manager Card -->
        <div class="card coa-upload-card reveal-right">
          <div class="coa-upload-header">
            <div class="coa-header-text">
              <h4 class="coa-upload-title">Document Manager & Upload</h4>
              <p class="coa-upload-sub">Upload or replace your Word document (.docx / .doc) or PDF anytime</p>
            </div>
            <div class="word-icon-pill" title="Microsoft Word Compatible">
              <i class="ph ph-microsoft-word-logo"></i>
              <span>DOCX</span>
            </div>
          </div>

          <!-- Active File Info Display -->
          <div class="active-file-display" id="active-file-display">
            <div class="active-file-icon">
              <i class="ph ph-file-text"></i>
            </div>
            <div class="active-file-details">
              <span class="active-file-name" id="display-doc-name">${this.activeDoc.name}</span>
              <div class="active-file-meta">
                <span id="display-doc-size">${this.activeDoc.size}</span>
                <span class="bullet">•</span>
                <span id="display-doc-time">${this.activeDoc.time}</span>
              </div>
            </div>
            <div class="active-file-badge">
              <span class="badge badge-primary">Active</span>
            </div>
          </div>

          <!-- Drag and Drop Upload Area -->
          <div class="coa-dropzone" id="coa-dropzone">
            <input type="file" id="coa-file-input" accept=".docx,.doc,.pdf" class="coa-file-input" />
            <div class="dropzone-content">
              <div class="dropzone-icon-circle">
                <i class="ph ph-cloud-arrow-up"></i>
              </div>
              <p class="dropzone-title"><strong>Click to browse</strong> or drag and drop your Word file here</p>
              <p class="dropzone-hint">Supports Microsoft Word (.docx, .doc) and PDF files (Max 15MB)</p>
            </div>
          </div>

          <!-- Management Actions -->
          <div class="coa-manager-actions">
            <button id="btn-browse-file" class="btn btn-secondary btn-sm">
              <i class="ph ph-folder-open"></i>
              <span>Browse New File</span>
            </button>
            <button id="btn-reset-file" class="btn btn-ghost btn-sm" title="Restore original assignment document">
              <i class="ph ph-arrow-counter-clockwise"></i>
              <span>Reset to Default</span>
            </button>
          </div>

          <!-- Student & Assignment Security Note -->
          <div class="coa-note">
            <i class="ph ph-shield-check"></i>
            <span>Files uploaded here update immediately on your screen and are saved safely for immediate download.</span>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(coa);
  },

  initStoredDoc(coa) {
    const saved = localStorage.getItem('krishna_coa_uploaded_doc');
    if (saved) {
      try {
        this.activeDoc = JSON.parse(saved);
        return;
      } catch (e) {
        console.error('Error parsing stored assignment doc', e);
      }
    }

    // Default document fallback
    this.activeDoc = {
      name: coa.defaultFileName || "COA_Assignment_Krishna_Verma.docx",
      size: coa.fileSize || "1.2 MB",
      time: "Official Submission",
      url: coa.defaultFilePath || "assets/assignments/COA_Assignment_Krishna_Verma.docx",
      isCustom: false
    };
  },

  bindEvents(coa) {
    const dropzone = document.getElementById('coa-dropzone');
    const fileInput = document.getElementById('coa-file-input');
    const browseBtn = document.getElementById('btn-browse-file');
    const downloadBtn = document.getElementById('btn-download-coa');
    const resetBtn = document.getElementById('btn-reset-file');

    if (browseBtn && fileInput) {
      browseBtn.addEventListener('click', () => fileInput.click());
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleFileUpload(e.target.files[0], coa);
        }
      });
    }

    if (dropzone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('drag-active');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('drag-active');
        }, false);
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files[0]) {
          this.handleFileUpload(dt.files[0], coa);
        }
      });

      dropzone.addEventListener('click', (e) => {
        if (e.target !== fileInput) {
          fileInput.click();
        }
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.downloadActiveFile();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        localStorage.removeItem('krishna_coa_uploaded_doc');
        this.initStoredDoc(coa);
        this.updateDisplayUI();
        if (window.Toast) {
          window.Toast.show("Assignment reset to default document.", "info");
        }
      });
    }
  },

  handleFileUpload(file, coa) {
    // Validate file type
    const validExtensions = ['.docx', '.doc', '.pdf'];
    const fileName = file.name;
    const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

    if (!validExtensions.includes(fileExt)) {
      if (window.Toast) {
        window.Toast.show("Please upload a Microsoft Word (.docx/.doc) or PDF file.", "error");
      }
      return;
    }

    // Format file size
    const sizeStr = file.size > 1024 * 1024 
      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` 
      : `${(file.size / 1024).toFixed(1)} KB`;

    const now = new Date();
    const timeStr = `Uploaded ${now.toLocaleDateString()} at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      this.activeDoc = {
        name: fileName,
        size: sizeStr,
        time: timeStr,
        url: dataUrl,
        isCustom: true
      };

      try {
        localStorage.setItem('krishna_coa_uploaded_doc', JSON.stringify(this.activeDoc));
      } catch (err) {
        console.warn("Could not save to localStorage (file may be large)", err);
      }

      this.updateDisplayUI();

      if (window.Toast) {
        window.Toast.show(`Successfully uploaded "${fileName}"!`, "success");
      }
    };

    reader.readAsDataURL(file);
  },

  updateDisplayUI() {
    const nameEl = document.getElementById('display-doc-name');
    const sizeEl = document.getElementById('display-doc-size');
    const timeEl = document.getElementById('display-doc-time');

    if (nameEl) nameEl.textContent = this.activeDoc.name;
    if (sizeEl) sizeEl.textContent = this.activeDoc.size;
    if (timeEl) timeEl.textContent = this.activeDoc.time;
  },

  downloadActiveFile() {
    if (!this.activeDoc) return;

    const link = document.createElement('a');
    link.href = this.activeDoc.url;
    link.download = this.activeDoc.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.Toast) {
      window.Toast.show(`Downloading "${this.activeDoc.name}"...`, "success");
    }
  }
};

window.CoaComponent = CoaComponent;

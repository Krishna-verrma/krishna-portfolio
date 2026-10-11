/**
 * COA NUMBER SYSTEM CONVERTER COMPONENT
 * Interactive Computer Organization & Architecture tool for real-time base conversion
 * (Decimal, Binary, Hexadecimal, Octal) with interactive bit register and 2's complement representations.
 */

const ConverterComponent = {
  currentValue: 42, // Default interesting starter value (0010 1010)
  bitMode: 8,       // 8-bit or 16-bit register visualization

  render() {
    const container = document.getElementById('converter-container');
    if (!container) return;

    container.innerHTML = `
      <div class="converter-wrapper card reveal-up">
        <div class="converter-toolbar">
          <div class="toolbar-left">
            <span class="toolbar-badge"><i class="ph ph-cpu"></i> COA Architecture Utility</span>
            <span class="toolbar-hint">Real-Time Number System Engine</span>
          </div>
          <div class="toolbar-right">
            <div class="bit-mode-toggle" id="bit-mode-toggle">
              <button class="bit-toggle-btn active" data-bits="8">8-Bit (Byte)</button>
              <button class="bit-toggle-btn" data-bits="16">16-Bit (Word)</button>
            </div>
            <button class="btn btn-ghost btn-sm" id="btn-clear-converter" title="Reset to Zero">
              <i class="ph ph-arrow-counter-clockwise"></i> Clear
            </button>
          </div>
        </div>

        <!-- 4 Core Base Conversion Inputs -->
        <div class="converter-inputs-grid">
          <!-- Decimal Input -->
          <div class="converter-input-card" data-base="10">
            <div class="converter-card-header">
              <div class="base-badge base-dec">
                <span class="base-label">DEC</span>
                <span class="base-sub">Base 10</span>
              </div>
              <button class="btn-copy-base" data-target="conv-dec" title="Copy Decimal">
                <i class="ph ph-copy"></i>
              </button>
            </div>
            <div class="input-wrapper">
              <input type="text" id="conv-dec" class="base-input" placeholder="e.g. 42" autocomplete="off" spellcheck="false" />
            </div>
            <span class="input-hint">Standard decimal digits (0–9)</span>
          </div>

          <!-- Binary Input -->
          <div class="converter-input-card" data-base="2">
            <div class="converter-card-header">
              <div class="base-badge base-bin">
                <span class="base-label">BIN</span>
                <span class="base-sub">Base 2</span>
              </div>
              <button class="btn-copy-base" data-target="conv-bin" title="Copy Binary">
                <i class="ph ph-copy"></i>
              </button>
            </div>
            <div class="input-wrapper">
              <input type="text" id="conv-bin" class="base-input font-mono" placeholder="e.g. 00101010" autocomplete="off" spellcheck="false" />
            </div>
            <span class="input-hint">Binary machine bits (0 &amp; 1)</span>
          </div>

          <!-- Hexadecimal Input -->
          <div class="converter-input-card" data-base="16">
            <div class="converter-card-header">
              <div class="base-badge base-hex">
                <span class="base-label">HEX</span>
                <span class="base-sub">Base 16</span>
              </div>
              <button class="btn-copy-base" data-target="conv-hex" title="Copy Hexadecimal">
                <i class="ph ph-copy"></i>
              </button>
            </div>
            <div class="input-wrapper">
              <span class="input-prefix">0x</span>
              <input type="text" id="conv-hex" class="base-input font-mono" placeholder="e.g. 2A" autocomplete="off" spellcheck="false" />
            </div>
            <span class="input-hint">Hexadecimal (0–9, A–F)</span>
          </div>

          <!-- Octal Input -->
          <div class="converter-input-card" data-base="8">
            <div class="converter-card-header">
              <div class="base-badge base-oct">
                <span class="base-label">OCT</span>
                <span class="base-sub">Base 8</span>
              </div>
              <button class="btn-copy-base" data-target="conv-oct" title="Copy Octal">
                <i class="ph ph-copy"></i>
              </button>
            </div>
            <div class="input-wrapper">
              <span class="input-prefix">0o</span>
              <input type="text" id="conv-oct" class="base-input font-mono" placeholder="e.g. 52" autocomplete="off" spellcheck="false" />
            </div>
            <span class="input-hint">Octal digits (0–7)</span>
          </div>
        </div>

        <!-- Interactive Register Bit Matrix -->
        <div class="register-matrix-section">
          <div class="matrix-header">
            <div class="matrix-title">
              <i class="ph ph-circuitry"></i>
              <span>Hardware Register View (Click any bit to toggle 0 ↔ 1)</span>
            </div>
            <div class="matrix-nibble-legend">
              <span class="legend-dot dot-msb"></span> MSB (Bit ${this.bitMode - 1})
              <span class="legend-dot dot-lsb"></span> LSB (Bit 0)
            </div>
          </div>
          <div class="bit-register-grid" id="bit-register-grid">
            <!-- Dynamically generated bit switches -->
          </div>
        </div>

        <!-- COA Architecture Representations & Metrics -->
        <div class="coa-metrics-grid">
          <div class="metric-card">
            <span class="metric-label"><i class="ph ph-math-operations"></i> Signed 2's Complement</span>
            <span class="metric-value font-mono" id="metric-twos-comp">--</span>
            <span class="metric-note">Hardware signed integer arithmetic</span>
          </div>

          <div class="metric-card">
            <span class="metric-label"><i class="ph ph-swap"></i> 1's Complement (Bit Inversion)</span>
            <span class="metric-value font-mono" id="metric-ones-comp">--</span>
            <span class="metric-note">Bitwise NOT inversion (~X)</span>
          </div>

          <div class="metric-card">
            <span class="metric-label"><i class="ph ph-text-aa"></i> ASCII Character</span>
            <span class="metric-value font-mono" id="metric-ascii">--</span>
            <span class="metric-note">Standard 7-bit character map</span>
          </div>

          <div class="metric-card">
            <span class="metric-label"><i class="ph ph-memory"></i> Formatted Hex Word</span>
            <span class="metric-value font-mono" id="metric-hex-word">--</span>
            <span class="metric-note">Memory address formatting</span>
          </div>
        </div>

        <!-- COA Quick Architecture Presets -->
        <div class="converter-presets">
          <span class="presets-label"><i class="ph ph-lightning"></i> Quick COA Values:</span>
          <div class="preset-buttons">
            <button class="preset-btn" data-val="0">0 (Null)</button>
            <button class="preset-btn" data-val="15">15 (0x0F)</button>
            <button class="preset-btn" data-val="42">42 (0x2A)</button>
            <button class="preset-btn" data-val="127">127 (Max Int8)</button>
            <button class="preset-btn" data-val="255">255 (0xFF)</button>
            <button class="preset-btn" data-val="1024">1024 (1 KB)</button>
            <button class="preset-btn" data-val="65535">65535 (0xFFFF)</button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
    this.updateAllFromValue(this.currentValue);
  },

  bindEvents() {
    const decInput = document.getElementById('conv-dec');
    const binInput = document.getElementById('conv-bin');
    const hexInput = document.getElementById('conv-hex');
    const octInput = document.getElementById('conv-oct');

    // Decimal Input Listener
    if (decInput) {
      decInput.addEventListener('input', (e) => {
        let val = e.target.value.trim();
        if (val === '') {
          this.currentValue = 0;
          this.updateAllFromValue(0, 'dec');
          return;
        }
        if (/^-?\d+$/.test(val)) {
          const num = parseInt(val, 10);
          this.currentValue = num;
          this.updateAllFromValue(num, 'dec');
        }
      });
    }

    // Binary Input Listener
    if (binInput) {
      binInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^01]/g, '');
        e.target.value = val;
        if (val === '') {
          this.currentValue = 0;
          this.updateAllFromValue(0, 'bin');
          return;
        }
        const num = parseInt(val, 2);
        this.currentValue = num;
        this.updateAllFromValue(num, 'bin');
      });
    }

    // Hex Input Listener
    if (hexInput) {
      hexInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^0-9a-fA-F]/g, '').toUpperCase();
        e.target.value = val;
        if (val === '') {
          this.currentValue = 0;
          this.updateAllFromValue(0, 'hex');
          return;
        }
        const num = parseInt(val, 16);
        this.currentValue = num;
        this.updateAllFromValue(num, 'hex');
      });
    }

    // Octal Input Listener
    if (octInput) {
      octInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^0-7]/g, '');
        e.target.value = val;
        if (val === '') {
          this.currentValue = 0;
          this.updateAllFromValue(0, 'oct');
          return;
        }
        const num = parseInt(val, 8);
        this.currentValue = num;
        this.updateAllFromValue(num, 'oct');
      });
    }

    // Bit Mode Toggle (8-Bit vs 16-Bit)
    const toggleButtons = document.querySelectorAll('.bit-toggle-btn');
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.bitMode = parseInt(btn.dataset.bits, 10);
        this.renderBitGrid();
        this.updateMetrics();
      });
    });

    // Preset Buttons
    const presetBtns = document.querySelectorAll('.preset-btn');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.val, 10);
        this.currentValue = val;
        if (val > 255 && this.bitMode === 8) {
          // Auto switch to 16-bit mode if value exceeds byte
          this.bitMode = 16;
          const b16 = document.querySelector('.bit-toggle-btn[data-bits="16"]');
          if (b16) {
            document.querySelectorAll('.bit-toggle-btn').forEach(b => b.classList.remove('active'));
            b16.classList.add('active');
          }
        }
        this.updateAllFromValue(val);
      });
    });

    // Reset / Clear Button
    const clearBtn = document.getElementById('btn-clear-converter');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.currentValue = 0;
        this.updateAllFromValue(0);
      });
    }

    // Copy Buttons
    const copyBtns = document.querySelectorAll('.btn-copy-base');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (input && input.value) {
          navigator.clipboard.writeText(input.value).then(() => {
            if (window.Toast) {
              window.Toast.show(`Copied "${input.value}" to clipboard!`, 'success');
            }
          });
        }
      });
    });
  },

  updateAllFromValue(val, source = null) {
    const decInput = document.getElementById('conv-dec');
    const binInput = document.getElementById('conv-bin');
    const hexInput = document.getElementById('conv-hex');
    const octInput = document.getElementById('conv-oct');

    const maxVal = this.bitMode === 8 ? 255 : 65535;
    // Normalize unsigned for bit representations
    const unsignedVal = ((val % (maxVal + 1)) + (maxVal + 1)) % (maxVal + 1);

    if (source !== 'dec' && decInput) {
      decInput.value = val;
    }
    if (source !== 'bin' && binInput) {
      binInput.value = unsignedVal.toString(2).padStart(this.bitMode, '0');
    }
    if (source !== 'hex' && hexInput) {
      hexInput.value = unsignedVal.toString(16).toUpperCase();
    }
    if (source !== 'oct' && octInput) {
      octInput.value = unsignedVal.toString(8);
    }

    this.renderBitGrid();
    this.updateMetrics();
  },

  renderBitGrid() {
    const grid = document.getElementById('bit-register-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const numBits = this.bitMode;
    const maxVal = numBits === 8 ? 255 : 65535;
    const unsignedVal = ((this.currentValue % (maxVal + 1)) + (maxVal + 1)) % (maxVal + 1);

    for (let i = numBits - 1; i >= 0; i--) {
      const bitWeight = Math.pow(2, i);
      const isSet = (unsignedVal & bitWeight) !== 0;

      const bitBox = document.createElement('div');
      bitBox.className = `bit-box ${isSet ? 'bit-active' : ''} ${i === numBits - 1 ? 'is-msb' : ''} ${i === 0 ? 'is-lsb' : ''}`;
      bitBox.dataset.bitIndex = i;

      bitBox.innerHTML = `
        <span class="bit-index">${i}</span>
        <button class="bit-btn" type="button">${isSet ? '1' : '0'}</button>
        <span class="bit-weight">${bitWeight < 1000 ? bitWeight : (bitWeight / 1024).toFixed(0) + 'K'}</span>
      `;

      bitBox.addEventListener('click', () => {
        // Toggle bit
        let newVal = unsignedVal ^ bitWeight;
        this.currentValue = newVal;
        this.updateAllFromValue(newVal);
      });

      grid.appendChild(bitBox);

      // Add a small divider every 4 bits (nibble boundary)
      if (i > 0 && i % 4 === 0) {
        const divider = document.createElement('div');
        divider.className = 'nibble-divider';
        grid.appendChild(divider);
      }
    }
  },

  updateMetrics() {
    const twosCompEl = document.getElementById('metric-twos-comp');
    const onesCompEl = document.getElementById('metric-ones-comp');
    const asciiEl = document.getElementById('metric-ascii');
    const hexWordEl = document.getElementById('metric-hex-word');

    const numBits = this.bitMode;
    const maxVal = numBits === 8 ? 255 : 65535;
    const unsignedVal = ((this.currentValue % (maxVal + 1)) + (maxVal + 1)) % (maxVal + 1);

    // 1. Signed 2's Complement
    let signedVal = unsignedVal;
    const signThreshold = numBits === 8 ? 128 : 32768;
    if (signedVal >= signThreshold) {
      signedVal = signedVal - (maxVal + 1);
    }
    if (twosCompEl) twosCompEl.textContent = `${signedVal} (Dec)`;

    // 2. 1's Complement (Bit Inversion)
    const inverted = (~unsignedVal >>> 0) & maxVal;
    if (onesCompEl) onesCompEl.textContent = inverted.toString(2).padStart(numBits, '0');

    // 3. ASCII Character
    if (asciiEl) {
      const asciiCode = unsignedVal & 0x7F;
      if (asciiCode >= 32 && asciiCode <= 126) {
        asciiEl.textContent = `'${String.fromCharCode(asciiCode)}' (Code ${asciiCode})`;
      } else if (asciiCode === 0) {
        asciiEl.textContent = 'NUL (0x00)';
      } else if (asciiCode === 10) {
        asciiEl.textContent = '\\n (LF)';
      } else if (asciiCode === 13) {
        asciiEl.textContent = '\\r (CR)';
      } else {
        asciiEl.textContent = `Ctrl Char (${asciiCode})`;
      }
    }

    // 4. Formatted Hex Word
    if (hexWordEl) {
      const hexStr = unsignedVal.toString(16).toUpperCase().padStart(numBits === 8 ? 2 : 4, '0');
      hexWordEl.textContent = `0x${hexStr}`;
    }
  }
};

window.ConverterComponent = ConverterComponent;

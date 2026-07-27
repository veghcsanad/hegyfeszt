// ============================================================
// NOVA FEST — About Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('about.html');
  buildFooter();
  buildStory();
  buildValues();
  buildTeam();
  buildVenue();
  buildSupport();
  buildImpressum();
  initReveal();
  initCountUp();
});

function buildStory() {
  const d = ABOUT_DATA.story;

  // Text
  const textEl = document.getElementById('storyText');
  textEl.innerHTML = `
    <h2 class="story-heading reveal">${d.heading}</h2>
    ${d.paragraphs.map((p, i) =>
      `<p class="story-para reveal reveal-delay-${i + 1}">${p}</p>`
    ).join('')}
  `;

  // Stats
  const statsEl = document.getElementById('storyStats');
  statsEl.innerHTML = ABOUT_DATA.stats.map(s => `
    <div class="stat-cell">
      <div class="stat-value" data-target="${s.value}">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function buildValues() {
  const grid = document.getElementById('valuesGrid');
  if (!grid) return;
  
  grid.innerHTML = ABOUT_DATA.values.map(v => `
    <div class="value-card">
      <div class="value-icon">${v.icon}</div>
      <div class="value-title">${v.title}</div>
      <p class="value-body">${v.body}</p>
    </div>
  `).join('');
}

function buildTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  
  grid.innerHTML = ABOUT_DATA.team.map(member => {
    const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2);
    return `
      <div class="team-card">
        <div class="team-avatar">${initials}</div>
        <div class="team-info">
          <div class="team-name">${member.name}</div>
          <div class="team-role">${member.role}</div>
          <p class="team-bio">${member.bio}</p>
        </div>
      </div>
    `;
  }).join('');
}

function buildVenue() {
  const v = ABOUT_DATA.venue;

  document.getElementById('venueText').innerHTML = `
    <div class="section-label" style="margin-bottom:1rem;">A helyszín</div>
    <h2 class="venue-name">${v.name}</h2>
    <div class="venue-address">📍 ${v.address}</div>
    <p class="venue-desc">${v.description}</p>
  `;

  document.getElementById('venueTransport').innerHTML = `
    <div class="transport-heading">Megközelítés</div>
    <div class="transport-list">
      ${v.transport.map(t => `
        <div class="transport-item">
          <span class="transport-mode">${t.mode}</span>
          <div>
            <div class="transport-label">${t.label}</div>
            <div class="transport-detail">${t.detail}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function buildSupport() {
  const s = ABOUT_DATA.support;
  const container = document.getElementById('supportContent');
  if (!s || !container) return;

  container.innerHTML = `
    <p>${s.subtitle}</p>
    <div class="support-details">
      <p><strong>Név:</strong> ${s.name}</p>
      <p><strong>IBAN:</strong> ${s.iban}</p>
      <p><strong>Hivatkozás:</strong> ${s.reference}</p>
    </div>
  `;
}

function buildImpressum() {
  const data = ABOUT_DATA.impressum;
  const el = document.getElementById('impressumContent');
  if (!el) return;

  el.innerHTML = `
    <div class="impressum-block">
      <div class="impressum-block-title">Üzemeltető adatai</div>
      <div class="impressum-block-content">
        <div class="impressum-line"><strong>${data.company}</strong></div>
        <div class="impressum-line">${data.seat}</div>
        <div class="impressum-line">${data.companyNumber}</div>
        <div class="impressum-line">${data.taxNumber}</div>
        <div class="impressum-line">${data.representative}</div>
        <div class="impressum-line">${data.contact}</div>
      </div>
    </div>

    <div class="impressum-block">
      <div class="impressum-block-title">Tárhelyszolgáltató</div>
      <div class="impressum-block-content">
        <div class="impressum-line"><strong>${data.hostCompany}</strong></div>
        <div class="impressum-line">${data.hostSeat}</div>
        <div class="impressum-line">${data.hostEmail}</div>
      </div>
    </div>

    <div class="impressum-block" style="border-color: rgba(237,47,80,0.2);">
      <div class="impressum-block-title" style="color: var(--text-muted);">Szerzői jogi információ</div>
      <div class="impressum-line">${data.copyright}</div>
    </div>
  `;
}

// Animate stat numbers on scroll
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.dataset.target;

      // Only animate pure numeric values
      const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''));
      if (isNaN(numeric)) return;

      const suffix = raw.replace(/[0-9.]/g, '');
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * numeric);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    observer.observe(el);
  });
}

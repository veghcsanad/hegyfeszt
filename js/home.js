// ============================================================
// NOVA FEST — Home Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('index.html');
  buildFooter();
  buildHero();
  buildCountdown();
  buildFeatures();
  initReveal();
});

function buildHero() {
  const d = HOME_DATA;

  // Announcement
  const ann = document.getElementById('heroAnnounce');
  if (ann && d.announcement) {
    ann.innerHTML = `
      <span class="tag tag--cranberry">${d.announcement.label}</span>
      &nbsp;${d.announcement.text}
      <a href="${d.announcement.link.href}">${d.announcement.link.label}</a>
    `;
  }

  // Edition tag
  document.getElementById('heroEdition').textContent = SITE.edition;

  // Location
  document.getElementById('heroLocation').textContent = `📍 ${SITE.location}`;

  // Headline with logo
  document.getElementById('heroHeadline').innerHTML =
    `<img src="logo_red.png" alt="Hegyfeszt" class="hero-logo" />`;


  // Sub
  document.getElementById('heroSub').textContent = d.hero.subheadline;

  // CTAs
  const ctaEl = document.getElementById('heroCtas');
  ctaEl.innerHTML = `
    <a class="btn btn--primary" href="${d.hero.cta_primary.href}">${d.hero.cta_primary.label}</a>
    <a class="btn btn--secondary" href="${d.hero.cta_secondary.href}">${d.hero.cta_secondary.label}</a>
  `;
}

function buildCountdown() {
  const targetDate = new Date(HOME_DATA.countdown.targetDate);
  const container = document.getElementById('countdownUnitsInline');

  function pad(n) { return String(n).padStart(2, '0'); }

  function update() {
    const now  = new Date();
    const diff = Math.max(0, targetDate - now);

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    container.innerHTML = `
      <div class="countdown__unit">
        <div class="countdown__num">${pad(days)}</div>
        <div class="countdown__name">Nap</div>
      </div>
      <div class="countdown__sep">:</div>
      <div class="countdown__unit">
        <div class="countdown__num">${pad(hours)}</div>
        <div class="countdown__name">Óra</div>
      </div>
      <div class="countdown__sep">:</div>
      <div class="countdown__unit">
        <div class="countdown__num">${pad(minutes)}</div>
        <div class="countdown__name">Perc</div>
      </div>
      <div class="countdown__sep">:</div>
      <div class="countdown__unit">
        <div class="countdown__num">${pad(seconds)}</div>
        <div class="countdown__name">Mp</div>
      </div>
    `;
  }

  update();
  setInterval(update, 1000);
}

function buildHeadliners() {
  const grid = document.getElementById('headlinersGrid');
  if (!grid) return;
  grid.innerHTML = HOME_DATA.headliners.map(h => `
    <a class="headliner-card" href="${h.href}">
      <div class="headliner-card__name">${h.name}</div>
      <div class="headliner-card__genre">${h.genre}</div>
      <div class="headliner-card__arrow">↗</div>
    </a>
  `).join('');
}

function buildFeatures() {
  const grid = document.getElementById('featuresGrid');
  grid.innerHTML = HOME_DATA.features.map(f => `
    <div class="feature-card">
      <div class="feature-card__icon">${f.icon}</div>
      <div class="feature-card__title">${f.title}</div>
      <p class="feature-card__body">${f.body}</p>
    </div>
  `).join('');
}

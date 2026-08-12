// ============================================================
// NOVA FEST — Home Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.title = HOME_DATA.meta.title;
  buildNav('index.html');
  buildFooter();
  buildHero();
  buildCountdown();
  buildFeatures();
  buildSectionCopy();
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
  const heroLocation = document.getElementById('heroLocation');
  if (heroLocation) {
    heroLocation.innerHTML = `📍 ${buildLocationLink()}`;
  }
 
  // Headline with logo
  document.getElementById('heroHeadline').innerHTML = `
    <img src="${SITE.assets.logoLineup}" alt="Hegyfeszt" class="hero-logo" />
    <span class="hero__headline-text">${d.hero.headline.join('')}</span>
  `;
 
  // Sub
  document.getElementById('heroSub').textContent = d.hero.subheadline;

  // CTAs removed from the hero
  const ctaEl = document.getElementById('heroCtas');
  if (ctaEl) ctaEl.innerHTML = '';
}

function buildCountdown() {
  const targetDate = new Date(HOME_DATA.countdown.targetDate);
  const container = document.getElementById('countdownUnitsInline');
  const label = document.getElementById('heroCountdownLabel');
  if (label) label.textContent = HOME_DATA.hero.countdownLabel;

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

function buildSectionCopy() {
  const title = document.getElementById('featuresTitle');
  if (title) title.innerHTML = HOME_DATA.sections.featuresTitle;

  const ctaTitle = document.getElementById('ctaBandTitle');
  if (ctaTitle) ctaTitle.textContent = HOME_DATA.sections.ctaBandTitle;

  const ctaLink = document.getElementById('ctaBandLink');
  if (ctaLink) {
    ctaLink.textContent = HOME_DATA.sections.ctaBandCtaLabel;
  }

  const scrollLabel = document.getElementById('heroScrollLabel');
  if (scrollLabel) scrollLabel.textContent = HOME_DATA.hero.scrollLabel;
}

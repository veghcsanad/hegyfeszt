// ============================================================
// NOVA FEST — Global JS (nav, footer, scroll reveal)
// ============================================================

// ---------- Build Navigation ----------
function buildNav(activePage) {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const inner = document.createElement('div');
  inner.className = 'nav__inner';

  const visibleNavItems = SITE.nav.filter(item => item.visible !== false);

  inner.innerHTML = `
    <a class="nav__logo" href="index.html"><img src="${SITE.assets.logo}" alt="Hegyfeszt logo" />HEGY<span>.</span>FESZT</a>
    <ul class="nav__links" id="navLinks">
      ${visibleNavItems.map(item => {
        const isActive = item.href === activePage;
        const isCTA = item.href === 'tickets.html';
        const isExternal = item.href.startsWith('http');
        const target = isExternal ? ' target="_blank" rel="noopener"' : '';
        if (isCTA) {
          return `<li><a class="nav__cta" href="${item.href}"${target}>${item.label}</a></li>`;
        }
        return `<li><a class="nav__link${isActive ? ' active' : ''}" href="${item.href}"${target}>${item.label}</a></li>`;
      }).join('')}
    </ul>
    <button class="nav__burger" id="navBurger" aria-label="Menü">
      <span></span><span></span><span></span>
    </button>
  `;

  nav.appendChild(inner);

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  if (window.scrollY > 40) nav.classList.add('scrolled');

  // Mobile burger
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');
  burger?.addEventListener('click', () => {
    links.classList.toggle('open');
    const open = links.classList.contains('open');
    burger.setAttribute('aria-expanded', open);
    burger.querySelectorAll('span')[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
    burger.querySelectorAll('span')[1].style.opacity  = open ? '0' : '1';
    burger.querySelectorAll('span')[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });

  // Close on link click (mobile)
  links?.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

function buildLocationLink() {
  const href = SITE.locationUrl;
  if (!href) {
    return SITE.location;
  }

  return `<a class="footer__link site-location-link" href="${href}" target="_blank" rel="noopener">${SITE.location}</a>`;
}

// ---------- Build Footer ----------
function buildFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const visibleNavItems = SITE.nav.filter(item => item.visible !== false);

  footer.innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <div>
          <div class="footer__logo"><img src="${SITE.assets.logo}" alt="Hegyfeszt logo" />HEGY<span>.</span>FESZT</div>
          <p class="footer__desc">${SITE.tagline}.</p>
        </div>
        <div>
          <div class="footer__heading">Navigáció</div>
          <ul class="footer__links">
            ${visibleNavItems.map(item => {
              const isExternal = item.href.startsWith('http');
              const target = isExternal ? ' target="_blank" rel="noopener"' : '';
              return `<li><a class="footer__link" href="${item.href}"${target}>${item.label}</a></li>`;
            }).join('')}
          </ul>
        </div>
        <div>
          <div class="footer__heading">Kapcsolat</div>
          <ul class="footer__links">
            <li><a class="footer__link" href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li><span class="footer__link">${SITE.phone}</span></li>
            <li style="margin-top:0.5rem">${buildLocationLink()}</li>
          </ul>
        </div>
      </div>
      <div class="footer__sponsors">
        <div class="footer__heading">Támogatóink</div>
        <div class="footer__sponsors-grid">
          ${SITE.sponsors.map(sponsor => {
            const href = sponsor.url ? ` href="${sponsor.url}"` : '';
            const attrs = sponsor.url ? ' target="_blank" rel="noopener"' : '';
            return `
            <a${href}${attrs} title="${sponsor.name}">
              <img src="${sponsor.logo}" alt="${sponsor.name}" class="footer__sponsor-logo" />
            </a>
          `;
          }).join('')}
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copy">© 2026 Kaleidoszkóp Hegy Fesztivál.</p>
        <div class="footer__social">
          <a href="${SITE.social.instagram}">Instagram</a>
          <a href="${SITE.social.facebook}">Facebook</a>
          <a href="${SITE.social.event}">Facebook esemény</a>
        </div>
      </div>
    </div>
  `;
}

// ---------- Scroll Reveal ----------
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});

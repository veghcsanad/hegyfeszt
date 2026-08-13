// ============================================================
// NOVA FEST — Tickets Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.title = TICKETS_DATA.meta.title;
  buildNav('tickets.html');
  buildFooter();
  buildPageHeader();
  buildNotice();
  buildTickets();
  buildAddons();
  buildFAQ();
  initReveal();
});

function buildPageHeader() {
  const page = TICKETS_DATA.page;
  const sectionLabel = document.getElementById('ticketsPageSectionLabel');
  const title = document.getElementById('ticketsPageTitle');
  const subtitle = document.getElementById('ticketsPageSubtitle');
  const buyTicketsLink = document.getElementById('buyTicketsLink');
  const volunteerLink = document.getElementById('volunteerLink');
  const addonsLabel = document.getElementById('addonsSectionLabel');
  const addonsTitle = document.getElementById('addonsSectionTitle');
  const campingLabel = document.getElementById('campingSectionLabel');
  const campingTitle = document.getElementById('campingSectionTitle');
  const campingIntro = document.getElementById('campingIntro');
  const campingGrid = document.getElementById('campingGrid');
  const campingNote = document.getElementById('campingNote');
  const campingLink = document.getElementById('campingLink');
  const faqTitle = document.getElementById('faqSectionTitle');
  const faqLabel = document.getElementById('faqSectionLabel');

  if (sectionLabel) sectionLabel.textContent = page.sectionLabel;
  if (title) title.textContent = page.title;
  if (subtitle) subtitle.textContent = page.notice;
  if (buyTicketsLink) {
    buyTicketsLink.textContent = page.buyTicketsLabel;
    buyTicketsLink.href = page.buyTicketsUrl;
  }
  if (volunteerLink) {
    volunteerLink.textContent = page.volunteerLabel;
    volunteerLink.href = page.volunteerUrl;
  }
  if (addonsLabel) addonsLabel.textContent = page.addonsLabel;
  if (addonsTitle) addonsTitle.innerHTML = page.addonsTitle;
  if (campingLabel) campingLabel.textContent = page.campingLabel;
  if (campingTitle) campingTitle.textContent = page.campingTitle;
  if (campingIntro) campingIntro.textContent = TICKETS_DATA.camping.intro;
  if (campingGrid) {
    campingGrid.innerHTML = TICKETS_DATA.camping.options.map(option => `
      <div class="addon-card camping-card">
        <div class="addon-label">${option.label}</div>
        <p class="addon-desc">${option.description}</p>
        <div class="addon-price">${option.price}</div>
      </div>
    `).join('');
  }
  if (campingNote) campingNote.textContent = TICKETS_DATA.camping.info.join(' ');
  if (campingLink) {
    campingLink.href = page.campingUrl;
    campingLink.textContent = page.campingButtonLabel;
  }
  if (faqTitle) faqTitle.innerHTML = page.faqLabel;
  if (faqLabel) faqLabel.textContent = '';
}

function buildNotice() {
  const el = document.getElementById('ticketNotice');
  if (el) el.textContent = TICKETS_DATA.page.notice;
}

function buildTickets() {
  const grid = document.getElementById('ticketsGrid');

  const availMap = {
    available: 'Elérhető',
    limited:   'Korlátozott mennyiség',
    scarce:    'Gyorsan fogynak',
    soldout:   'Elfogyott',
  };

  grid.innerHTML = TICKETS_DATA.tiers.map(t => {
    const isFeatured = t.availability === 'available' && t.id === 'weekend';
    const cardClass = [
      'ticket-card',
      isFeatured ? 'ticket-card--featured' : '',
      t.availability === 'soldout' ? 'ticket-card--soldout' : '',
      t.availability === 'limited' ? 'ticket-card--limited' : '',
      t.availability === 'scarce'  ? 'ticket-card--scarce'  : '',
    ].filter(Boolean).join(' ');

    return `
      <div class="${cardClass}">
        ${t.badge ? `<span class="ticket-badge">${t.badge}</span>` : ''}
        <div class="ticket-card__header">
          <div class="ticket-label">${t.label}</div>
          <div class="ticket-price">
            <span class="ticket-currency">${t.currency}</span>
            <span class="ticket-amount">${t.price}</span>
          </div>
          <p class="ticket-desc">${t.description}</p>
          <div class="ticket-availability">${availMap[t.availability] || t.availability}</div>
        </div>
        <div class="ticket-card__perks">
          ${t.perks.map(p => `
            <div class="ticket-perk">
              <span class="perk-check">✦</span>
              <span>${p}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function buildAddons() {
  const grid = document.getElementById('addonsGrid');
  grid.innerHTML = TICKETS_DATA.addons.map(a => `
    <div class="addon-card">
      <div class="addon-label">${a.label}</div>
      <p class="addon-desc">${a.description}</p>
      <div class="addon-price">${a.price} Ft</div>
    </div>
  `).join('');
}

function buildFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = TICKETS_DATA.faq.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-${index}`);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));

  // Open clicked if it was closed
  if (!isOpen) item.classList.add('open');
}

const TIXA_URL = TICKETS_DATA.page.buyTicketsUrl;

function handleTicketClick(id, label, price) {
  window.location.href = TIXA_URL;
}

function handleAddonClick(id, label, price) {
  window.location.href = TIXA_URL;
}

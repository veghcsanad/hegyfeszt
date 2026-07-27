// ============================================================
// NOVA FEST — Tickets Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('tickets.html');
  buildFooter();
  buildNotice();
  buildTickets();
  buildAddons();
  buildFAQ();
  initReveal();
});

function buildNotice() {
  const el = document.getElementById('ticketNotice');
  if (el) el.textContent = TICKETS_DATA.notice;
}

function buildTickets() {
  const grid = document.getElementById('ticketsGrid');

  const availMap = {
    available: 'Elérhető',
    limited:   'Korlátozott mennyiség',
    scarce:    'Gyorsan fogynak',
  };

  grid.innerHTML = TICKETS_DATA.tiers.map(t => {
    const isFeatured = t.availability === 'available' && t.id === 'weekend';
    const cardClass = [
      'ticket-card',
      isFeatured ? 'ticket-card--featured' : '',
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

const TIXA_URL = 'https://www.tixa.hu/kaleidoszkop-hegy-fesztival-20260827';

function handleTicketClick(id, label, price) {
  window.location.href = TIXA_URL;
}

function handleAddonClick(id, label, price) {
  window.location.href = TIXA_URL;
}

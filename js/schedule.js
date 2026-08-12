// ============================================================
// NOVA FEST — Schedule Page JS
// ============================================================

let activeDay   = 0;
let activeStage = 'all';

document.addEventListener('DOMContentLoaded', () => {
  document.title = SCHEDULE_DATA.meta.title;
  buildNav('schedule.html');
  buildFooter();
  renderPageHeader();
  renderTabs();
  renderFilters();
  renderSlots();
});

function renderPageHeader() {
  const page = SCHEDULE_DATA.page;
  const sectionLabel = document.getElementById('schedulePageSectionLabel');
  const title = document.getElementById('schedulePageTitle');
  const subtitle = document.getElementById('schedulePageSubtitle');

  if (sectionLabel) sectionLabel.textContent = page.sectionLabel;
  if (title) title.textContent = page.title;
  if (subtitle) subtitle.textContent = page.subtitle;
}

function renderTabs() {
  const container = document.getElementById('scheduleTabs');
  container.innerHTML = SCHEDULE_DATA.days.map((day, i) => `
    <button class="schedule-tab${i === activeDay ? ' active' : ''}" data-day="${i}">
      <span>${day.label}</span>
      <span style="opacity:0.55;font-weight:400;margin-left:0.4rem;font-size:0.7rem;">${day.date}</span>
    </button>
  `).join('');

  container.querySelectorAll('.schedule-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeDay   = parseInt(btn.dataset.day);
      activeStage = 'all';
      renderTabs();
      renderFilters();
      renderSlots();
    });
  });
}

function renderFilters() {
  const day = SCHEDULE_DATA.days[activeDay];
  const container = document.getElementById('scheduleFilters');

  container.innerHTML = `
    <span class="filter-label">Színpad:</span>
    <button class="filter-btn${activeStage === 'all' ? ' active' : ''}" data-stage="all">Összes színpad</button>
    ${day.stages.map(s => `
      <button class="filter-btn${activeStage === s ? ' active' : ''}" data-stage="${s}">${s}</button>
    `).join('')}
  `;

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeStage = btn.dataset.stage;
      renderFilters();
      applyFilter();
    });
  });
}

function renderSlots() {
  const day = SCHEDULE_DATA.days[activeDay];
  const grid = document.getElementById('scheduleGrid');

  // Sort by time
  const sorted = [...day.slots].sort((a, b) => a.time.localeCompare(b.time));

  const isHeadliner = (s) => {
    const genre = s.genre.toLowerCase();
    return genre.includes('headliner') || genre.includes('főfellépő');
  };

  grid.innerHTML = sorted.map(slot => `
    <div class="schedule-slot${isHeadliner(slot) ? ' headliner' : ''}"
         data-stage="${slot.stage}">
      <div class="slot-time">${slot.time}</div>
      <div class="slot-stage">${slot.stage}</div>
      <div class="slot-artist">${slot.artist}</div>
      <div class="slot-meta">
        ${isHeadliner(slot) ? `<span class="slot-badge">Főfellépő</span>` : ''}
        <span class="slot-genre">${slot.genre.replace(/(Headliner|Főfellépő) \/ /,'')}</span>
      </div>
    </div>
  `).join('');

  applyFilter();
}

function applyFilter() {
  const slots = document.querySelectorAll('.schedule-slot');
  slots.forEach(slot => {
    const show = activeStage === 'all' || slot.dataset.stage === activeStage;
    slot.classList.toggle('hidden', !show);
  });

  // Empty state
  const visible = [...slots].some(s => !s.classList.contains('hidden'));
  let empty = document.querySelector('.schedule-empty');
  if (!visible) {
    if (!empty) {
      empty = document.createElement('div');
      empty.className = 'schedule-empty';
      empty.textContent = 'Ehhez a szűréshez nincs találat.';
      document.getElementById('scheduleGrid').appendChild(empty);
    }
  } else {
    empty?.remove();
  }
}

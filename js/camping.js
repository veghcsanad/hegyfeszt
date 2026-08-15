document.addEventListener('DOMContentLoaded', () => {
  document.title = CAMPING_DATA.meta.title;
  buildNav('camping.html');
  buildFooter();
  buildCampingPage();
  initReveal();
});

function buildCampingPage() {
  const page = CAMPING_DATA.page;
  const sectionLabel = document.getElementById('campingPageSectionLabel');
  const title = document.getElementById('campingPageTitle');
  const subtitle = document.getElementById('campingPageSubtitle');
  const intro = document.getElementById('campingIntro');
  const grid = document.getElementById('campingGrid');
  const note = document.getElementById('campingNote');
  const link = document.getElementById('campingLink');

  if (sectionLabel) sectionLabel.textContent = page.sectionLabel;
  if (title) title.textContent = page.title;
  if (subtitle) subtitle.textContent = page.subtitle;
  if (intro) intro.textContent = page.intro;

  if (grid) {
    grid.innerHTML = CAMPING_DATA.items.map(item => `
      <div class="camping-card">
        <div class="camping-card__label">${item.label}</div>
        <p class="camping-card__description">${item.description}</p>
        <div class="camping-card__price">${item.price}</div>
      </div>
    `).join('');
  }

  if (note) note.textContent = CAMPING_DATA.note;

  if (link) {
    link.href = page.buttonUrl;
    link.textContent = page.buttonLabel;
    link.target = '_blank';
    link.rel = 'noopener';
  }
}

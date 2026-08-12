// ============================================================
// Volunteer Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.title = ABOUT_DATA.volunteer.meta.title;
  buildNav('volunteers.html');
  buildFooter();
  buildPageHeader();
  buildTasks();
  initReveal();
});

function buildPageHeader() {
  const volunteer = ABOUT_DATA.volunteer;
  const sectionLabel = document.getElementById('volunteersPageSectionLabel');
  const title = document.getElementById('volunteersPageTitle');
  const subtitle = document.getElementById('volunteersPageSubtitle');
  const introText = document.getElementById('volunteerIntroText');
  const introImage = document.getElementById('volunteerIntroImage');
  const tasksTitle = document.getElementById('volunteerTasksTitle');
  const ctaTitle = document.getElementById('volunteerCtaTitle');
  const ctaSub = document.getElementById('volunteerCtaSub');
  const ctaLink = document.getElementById('volunteerCtaLink');

  if (sectionLabel) sectionLabel.textContent = volunteer.page.sectionLabel;
  if (title) title.textContent = volunteer.page.title;
  if (subtitle) subtitle.textContent = volunteer.page.subtitle;
  if (introText) introText.textContent = volunteer.intro;
  if (introImage) {
    introImage.src = volunteer.page.image.src;
    introImage.alt = volunteer.page.image.alt;
  }
  if (tasksTitle) tasksTitle.textContent = volunteer.tasks.title;
  if (ctaTitle) ctaTitle.textContent = volunteer.cta;
  if (ctaSub) ctaSub.textContent = volunteer.info;
  if (ctaLink) {
    ctaLink.href = volunteer.page.ctaUrl;
    ctaLink.textContent = volunteer.page.ctaButtonLabel;
  }
}

function buildTasks() {
  const tasksData = ABOUT_DATA.volunteer.tasks.items;
  const grid = document.getElementById('tasksGrid');
  
  if (!grid) return;
  
  const icons = ['🎨', '📋', '🎫', '📢', '🔨', '✨'];
  
  grid.innerHTML = tasksData.map((task, index) => `
    <div class="task-card">
      <div class="task-icon">${icons[index] || '⭐'}</div>
      <div class="task-title">${task}</div>
    </div>
  `).join('');
}

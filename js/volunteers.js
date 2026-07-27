// ============================================================
// Volunteer Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('volunteers.html');
  buildFooter();
  buildTasks();
  initReveal();
});

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

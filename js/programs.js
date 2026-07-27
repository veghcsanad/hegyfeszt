// ============================================================
// NOVA FEST — Programs Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('programs.html');
  buildFooter();
  buildArtists();
  buildPrograms();
  initReveal();
});

function buildArtists() {
  const grid = document.getElementById('artistsGrid');
  if (!grid || !PROGRAMS_DATA.artists || PROGRAMS_DATA.artists.length === 0) return;
  
  const artists = PROGRAMS_DATA.artists;

  grid.innerHTML = artists.map(a => {
    if (!a || !a.name) return '';
    
    const isHeadliner = a.role && (a.role.toLowerCase().includes('headliner') || a.role.toLowerCase().includes('főfellépő'));
    const accentClass = a.accent || 'gray';

    return `
      <div class="artist-card ${isHeadliner ? 'artist-card--headliner' : ''}" id="${a.id || ''}">
        <div class="artist-card__visual">
          <div class="artist-card__placeholder ${accentClass}">
            <span class="artist-card__initial">${a.name.charAt(0)}</span>
          </div>
        </div>
        <div class="artist-card__body">
          <div class="artist-card__role">
            <span class="tag tag--gray">${a.genre || ''}</span>
          </div>
          <h2 class="artist-card__name">${a.name}</h2>
          ${a.bio ? `<p class="artist-card__bio">${a.bio}</p>` : ''}
          ${a.highlights && a.highlights.length > 0 ? `
            <div class="artist-card__highlights">
              ${a.highlights.map(h => `<span class="highlight">✦ ${h}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function buildPrograms() {
  const grid = document.getElementById('programsGrid');
  grid.innerHTML = PROGRAMS_DATA.programs.map(p => {
    const sessions = Array.isArray(p.sessions) ? p.sessions.filter(Boolean) : [];
    return `
      <div class="program-card">
        <div class="program-card__icon">${p.icon}</div>
        <div class="program-card__title">${p.title}</div>
        <p class="program-card__desc">${p.description}</p>
        ${sessions.length ? `
          <div class="program-card__sessions">
            ${sessions.map(s => `<span class="program-card__session">🕐 ${s}</span>`).join('')}
          </div>
        ` : ``}
        ${p.location ? `<div class="program-card__location">📍 ${p.location}</div>` : ``}
      </div>
    `;
  }).join('');
}

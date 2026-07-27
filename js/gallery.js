// ============================================================
// HEGYFESZT — Gallery Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildNav('gallery.html');
  buildFooter();
  buildGallery();
  initReveal();
});

function buildGallery() {
  const container = document.getElementById('galleryGrid');
  const heading = document.getElementById('galleryHeading');
  const sub = document.getElementById('gallerySub');
  if (!container || !heading || !sub) return;

  heading.textContent = GALLERY_DATA.title;
  sub.textContent = GALLERY_DATA.subtitle;

  container.innerHTML = GALLERY_DATA.images.map(src => `
    <div class="gallery-card reveal">
      <img src="${src}" alt="Hegyfeszt fesztiválkép" loading="lazy">
    </div>
  `).join('');
}

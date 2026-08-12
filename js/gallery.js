// ============================================================
// HEGYFESZT — Gallery Page JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.title = GALLERY_DATA.meta.title;
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

  heading.textContent = GALLERY_DATA.page.title;
  sub.textContent = GALLERY_DATA.page.subtitle;
  
  const sectionLabel = document.getElementById('gallerySectionLabel');
  if (sectionLabel) sectionLabel.textContent = GALLERY_DATA.page.sectionLabel;

  container.innerHTML = GALLERY_DATA.images.map(src => `
    <button class="gallery-card reveal" type="button" data-src="${src}" data-alt="Hegyfeszt fesztiválkép">
      <img src="${src}" alt="Hegyfeszt fesztiválkép" loading="lazy">
    </button>
  `).join('');

  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('galleryModalImage');
  const modalClose = document.getElementById('galleryModalClose');
  if (!modal || !modalImage || !modalClose) return;

  const openModal = (src, alt) => {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    modalImage.alt = '';
    document.body.classList.remove('modal-open');
  };

  container.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.src, card.dataset.alt);
    });
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.title = PRESSROOM_DATA.meta.title;
  buildNav('pressroom.html');
  buildFooter();
  buildPressroomPage();
  initReveal();
});

function buildPressroomPage() {
  const page = PRESSROOM_DATA.page;
  const sectionLabel = document.getElementById('pressroomPageSectionLabel');
  const title = document.getElementById('pressroomPageTitle');
  const subtitle = document.getElementById('pressroomPageSubtitle');
  const pressroomTitle = document.getElementById('pressroomTitle');
  const description = document.getElementById('pressroomDescription');
  const downloadLink = document.getElementById('downloadPressroom');

  if (sectionLabel) sectionLabel.textContent = page.sectionLabel;
  if (title) title.textContent = page.title;
  if (subtitle) subtitle.textContent = page.subtitle;
  if (pressroomTitle) pressroomTitle.textContent = page.title;
  if (description) description.textContent = page.description;

  if (downloadLink) {
    downloadLink.href = page.downloadUrl;
    downloadLink.textContent = page.buttonLabel;
    downloadLink.setAttribute('download', 'hegyfeszt_sajtoanyag.zip');
  }
}

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const parentSection = header.closest('section, aside');

    parentSection.querySelectorAll('.accordion-content.active').forEach(openContent => {
      if (openContent !== content) {
        openContent.classList.remove('active');
        openContent.previousElementSibling.classList.remove('active');
      }
    });

    header.classList.toggle('active');
    content.classList.toggle('active');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const animElems = document.querySelectorAll('.animate-flow');
  animElems.forEach((el, i) => {
    const delay = el.dataset.delay || i * 400;
    el.style.animationDelay = delay + 'ms';
    el.style.animationPlayState = 'running';
  });
});

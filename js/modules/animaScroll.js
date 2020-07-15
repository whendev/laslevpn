export default function initAnimaScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const heightPorcent = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = (sectionTop - heightPorcent) < 0;
      if (isVisible) {
        section.classList.add('ativo');
      }
    });
  }

  animaScroll();
  window.addEventListener('scroll', animaScroll);
}

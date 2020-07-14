export default function initScroll() {
  // let scroll = document.querySelector('.feedback__comment');
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const offTop = section.offsetTop;
    window.scrollTo({
      top: offTop,
      behavior: 'smooth',
    });
    console.log(href);
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

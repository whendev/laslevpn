export default function initScroll() {
  const linksInternos = document.querySelectorAll(".js-menu ul li a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // console.log(section.__proto__);

    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
  // console.log(linksInternos);
}

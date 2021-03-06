import outsideClick from './outsideClick.js';

export default function initMobileMenu() {
  const btn = document.querySelector('.header__img button');

  const menu = document.querySelector('.menu__nav');
  const menuList = document.querySelector('.menu__nav ul');
  const events = ['click'];

  function dropMenu() {
    menu.classList.add('ativo');
    console.log('adicionou ativo');
    // event.stopPropagation();
    outsideClick(menuList, events, () => {
      // menu.classList.add('v');
      menu.classList.remove('ativo');

      console.log('removeu ativo');
    });
  }

  events.forEach((eventListener) => {
    btn.addEventListener(eventListener, dropMenu);
  });
}

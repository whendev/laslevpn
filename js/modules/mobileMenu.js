import outsideClick from './outsideClick.js';

export default function initMobileMenu(){
    const btn = document.querySelector('.header__img button');
    const menu = document.querySelector('.menu__nav');
    const menuList = document.querySelector('.menu__nav ul');
    const events = ['click'];

    events.forEach((eventListener) => {
        btn.addEventListener(eventListener, dropMenu);
    })

    function dropMenu(){
        menu.classList.add('ativo');
        console.log('adicionou ativo')
        // event.stopPropagation();
        outsideClick(menuList,events, () => {
            menu.classList.remove('ativo');
            console.log('removeu ativo')
        })
    }


    // console.log(menu)
    // console.log(btn)
}

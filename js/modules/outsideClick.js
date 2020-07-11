export default function initOutsideClick(elemento, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutside() {
    if (!(elemento.contains(event.target))) {
      elemento.removeAttribute(outside);
      events.forEach((eventListener) => {
        html.removeEventListener(eventListener, handleOutside);
      });
      callback();
    }
  }

  if (!(elemento.hasAttribute(outside))) {
    setTimeout(() => {
      events.forEach((eventListener) => {
        html.addEventListener(eventListener, handleOutside);
      });
    });

    elemento.setAttribute(outside, '');
  }
}

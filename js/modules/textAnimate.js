export default function initTextAnimate() {
  const texto = document.querySelector('.feature__title');

  function animatext(elemento) {
    const text = elemento;
    const textArray = text.innerHTML.split('');
    text.innerHTML = '';
    textArray.forEach((letra, i) => {
      setTimeout(() => {
        text.innerHTML += letra;
      }, 70 * i);
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      // eslint-disable-next-line no-use-before-define
      observer.disconnect();
      animatext(texto);
    }
  }
  const observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector('.features');

  observer.observe(observeTarget, { attributes: true });
}

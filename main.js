const hero = document.querySelector('.parallax-background');
hero.style.backgroundImage = "url('./assets/Layer3.png')";

document.addEventListener('DOMContentLoaded', function () {
  function changeBackground(image) {
    const hero = document.querySelector('.parallax-background');
    hero.classList.add('transition');
    hero.style.backgroundImage = `url(${image})`;
  }

  setTimeout(function () {
    changeBackground('./assets/Layer1.png');
  }, 5000);

  setTimeout(function () {
    changeBackground('./assets/Layer2.png');
  }, 10000);

  const rightElement = document.querySelector('.right-title');
  const leftElement = document.querySelector('.left-title');
  const ctaElement = document.querySelector('.img_logo');
  const textScrollElement = document.querySelector('.scroll_down_cta');
  const bannerElement = document.querySelector('.banner');

  let lastScrollPosition = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
  
    if (currentScrollPosition > lastScrollPosition) {
      // Scroll hacia abajo
      rightElement.classList.add('scrolled');
      leftElement.classList.add('scrolled');
      ctaElement.classList.add('scrolled');
      textScrollElement.classList.add('scrolled');
      bannerElement.classList.add('scrolled');
    } else {
      // Scroll hacia arriba
      rightElement.classList.remove('scrolled');
      leftElement.classList.remove('scrolled');
      ctaElement.classList.remove('scrolled');
      textScrollElement.classList.remove('scrolled');
      bannerElement.classList.remove('scrolled');
    }
  
    lastScrollPosition = currentScrollPosition;
  });
  
});

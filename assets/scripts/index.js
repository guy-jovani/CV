import '../styles/emr.css';
import '../styles/index.css';

const toggleNavBarBtn = document.querySelector('.nav-open-collapsed');
const navLinks = document.querySelector('.nav-closed-links');

if (toggleNavBarBtn) {
  toggleNavBarBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-opened-links');
    toggleNavBarBtn.firstElementChild.classList.toggle(
      'glyphicon-align-justify'
    );
    toggleNavBarBtn.firstElementChild.classList.toggle('glyphicon-remove');
  });
}

if (document.querySelector('.profession-wrapper')) {
  const supportsAnimationCSS =
    'CSS' in window &&
    window.innerWidth > 420 &&
    CSS.supports('clip-path', 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)');
  
  const firstProfession = document.querySelector('.profession-wrapper')
    .firstElementChild;
  let professionActive = document.querySelector('.profession-active');

  const developer = document.querySelector('.developer');

  const animateDeveloper = () => {
    developer.animate(
      [
        { left: '-40px', offset: 0 },
        { left: '0px', offset: 0.3 },
        { left: '0px', offset: 0.55 },
        { left: '-40px', offset: 1 }
      ],
      {
        duration: 3000,
        iterations: 1
      }
    );
  };

  supportsAnimationCSS ? animateDeveloper() : null;

  const switchActiveProfession = () => {
    professionActive.classList.replace(
      'profession-active',
      'profession-inactive'
    );

    supportsAnimationCSS ? null : professionActive.animate(
      [
        { top: '0', opacity: '1', offset: 0 },
        { top: '100%', offset: 1 },
      ],
      {
        duration: 2500,
        iterations: 1
      }
    );

    if (professionActive.nextElementSibling) {
      professionActive = professionActive.nextElementSibling;
    } else {
      professionActive = firstProfession;
    }

    professionActive.classList.replace(
      'profession-inactive',
      'profession-active'
    );
    supportsAnimationCSS ? animateDeveloper() : null;
  };

  if ( typeof(professionActive.animate) != "undefined" ) {
    document
      .querySelector('.profession-wrapper')
      .addEventListener('animationend', switchActiveProfession);
  }
}

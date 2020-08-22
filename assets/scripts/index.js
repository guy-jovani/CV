
import '../styles/emr.css';
import '../styles/index.css';


const toggleNavBarBtn = document.querySelector('.nav-open-collapsed');
const navLinks = document.querySelector('.nav-closed-links');

toggleNavBarBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-opened-links');
  toggleNavBarBtn.firstElementChild.classList.toggle('glyphicon-align-justify');
  toggleNavBarBtn.firstElementChild.classList.toggle('glyphicon-remove');
});
















































































































































// let lastScrollTop = window.pageYOffset;
// const experienceSection = document.querySelector('.experience');
// const skillsSection = document.querySelector('.skills');
// const sections = document.querySelectorAll('section');

// console.log(sections)



// const scrollHandler = event => {
//   let nextVP;
//   const currVP = Math.floor(window.pageYOffset / window.innerHeight);
//   if (window.pageYOffset < lastScrollTop) { // up
//     nextVP = Math.floor((window.pageYOffset + 100) / window.innerHeight);
//   // console.log(currVP, nextVP)
//     if (nextVP === currVP) {
//       // window.scrollTo(0, sections[currVP].offsetTop);
//       }
//   } else { // down
//     nextVP = Math.floor((window.pageYOffset - 100) / window.innerHeight);
//   // console.log(currVP, nextVP)
//     if (currVP < sections.length - 1 && nextVP === currVP) {
//       // window.scrollTo(0, sections[currVP + 1].offsetTop);
//     }
//   }
//   lastScrollTop = window.pageYOffset;
// };

// document.addEventListener('scroll', scrollHandler);





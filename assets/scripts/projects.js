

import '../scripts/index';
import '../styles/projects.css';



const carouselLeftArrows = document.querySelectorAll('.carouselLeftArrow');

const carouselRightArrows = document.querySelectorAll('.carouselRightArrow');

carouselLeftArrows.forEach(arrow => {
  const carouselImgs = arrow.closest('.project-item').getElementsByTagName('img');
  arrow.addEventListener('click', (event) => {
    const showedImgInd = 
      [...carouselImgs].find(img => {
        return img.classList.value === 'showed';
       });
    let imgCarousel = +showedImgInd.attributes['data-img'].value;
    carouselImgs[imgCarousel].classList = ['hide'];
    if (imgCarousel === 0) {
      imgCarousel = carouselImgs.length - 1;
    } else {
      imgCarousel--;
    }
    carouselImgs[imgCarousel].classList = ['showed'];
  });
});


carouselRightArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const carouselImgs = arrow.closest('.project-item').getElementsByTagName('img');
    const showedImgInd = 
      [...carouselImgs].find(img => {
        return img.classList.value === 'showed';
       });
    let imgCarousel = +showedImgInd.attributes['data-img'].value;
    carouselImgs[imgCarousel].classList = ['hide'];
    if (imgCarousel === carouselImgs.length - 1) {
      imgCarousel = 0;
    } else {
      imgCarousel++;
    }
    carouselImgs[imgCarousel].classList = ['showed'];
  });
});





const carousels = document.getElementsByClassName('carousel');
const projectInfo = document.getElementsByClassName('project-item__project-info');


const displayItems = () => {
  for (let car of carousels) {
    if (car.offsetTop < window.innerHeight + window.pageYOffset + 20) {
      car.classList.add('display-from-side')
    }
  }
  
  for (let pi of projectInfo) {
    if (pi.offsetTop < window.innerHeight + window.pageYOffset + 20) {
      pi.classList.add('display-from-side')
    }
  }

}

displayItems();

window.addEventListener('scroll', displayItems);













































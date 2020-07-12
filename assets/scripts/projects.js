


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















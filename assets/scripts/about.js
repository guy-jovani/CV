import '../scripts/index';
import '../styles/about.css';




// const aboutContent = document.querySelectorAll('.line');
// const header = document.querySelector('.header');



// const wrapLetter = (animatedElement, className, letter, lettersSpan, wrapWithWord) => {
//   let insertHtml = false;
//   if ( !wrapWithWord ) {
//     animatedElement.insertAdjacentHTML('beforeend', `<span class='${className}'>${letter === ' ' ? '\xa0' : letter}</span>`);
//   } else if ( letter === ' ' ) {
//     lettersSpan += '</span><span>\xa0</span>';
//     insertHtml = true;
//   } else {
//     lettersSpan += `<span class='${className}'>${letter}</span>`;
//   }

//   return [insertHtml, lettersSpan];
// };


// const addAnimation = (animatedElement, className, wrapWithWord = true) => {
//   let i = 0, text = animatedElement.innerText;
//   animatedElement.innerHTML = '';
//   let lettersSpan = wrapWithWord ? '<span class="word">' : '';
//   let insertHtml;
//   const inter = setInterval(() => {
//     if (i < text.length) {
//       [insertHtml, lettersSpan] = wrapLetter(animatedElement, className, text[i], lettersSpan, wrapWithWord);
//       if ( insertHtml ) {
//         animatedElement.insertAdjacentHTML('beforeend', lettersSpan);
//         lettersSpan = '<span class="word">';
//       }
//       i++;
//     }
    
//     if (i >= text.length) {
//       animatedElement.insertAdjacentHTML('beforeend', lettersSpan);
//       clearInterval(inter);
//     }
//   }, 5);
// }

// aboutContent.forEach(span => {
//   addAnimation(span, 'slide-letter');
// });

// addAnimation(header, 'wave-letter', header.clientWidth < 243);
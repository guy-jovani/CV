
import '../scripts/index';
import '../styles/resume.css';


const workItems = document.getElementsByClassName('main-work-item');
const secondaryTitle = document.getElementsByClassName('secondary-title');
const skills = document.querySelector('.skills');
const languages = document.querySelector('.languages');
const educationList = document.querySelector('.education > ul');


const displayItems = () => {
  for (let wi of workItems) {
    if (wi.offsetTop < window.innerHeight + window.pageYOffset + 20) {
      wi.classList.add('display-from-side')
    }
  }
  
  for (let st of secondaryTitle) {
    if (st.offsetTop < window.innerHeight + window.pageYOffset + 20) {
      st.classList.add('display')
    }
  }

  if (skills.offsetTop < window.innerHeight + window.pageYOffset + 20) {
    skills.classList.add('display-from-side')
  }

  if (languages.offsetTop < window.innerHeight + window.pageYOffset + 20) {
    languages.classList.add('display-from-side')
  }
  if (educationList.offsetTop < window.innerHeight + window.pageYOffset + 20) {
    educationList.classList.add('display-from-side')
  }

}

displayItems();

window.addEventListener('scroll', displayItems);




































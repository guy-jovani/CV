

import '../scripts/index';
import '../styles/contact.css';


const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const form = document.querySelector('form');
const submitBtn = document.getElementById('submit');
const formEmail = document.getElementById('email');
const emailSuccess = document.getElementById('email-success');
const emailHelper = document.querySelectorAll('.form-row > .helper-container span');


const showEmailAlerts = message => {
  emailHelper.forEach(sp => {
    sp.classList.add('show');
    if (sp.classList.contains('helper-message')) {
      sp.innerHTML = message;
    }
  });
  formEmail.classList.add('alert-border');
}

const removeEmailAlerts = () => {
  emailHelper.forEach(sp => {
    sp.classList.remove('show');
  });
  formEmail.classList.remove('alert-border');
}


submitBtn.addEventListener('click', event => {
  event.preventDefault();
  const inputs = event.target.closest('form').children;

  if (!formEmail.value) {
    return showEmailAlerts("This field is required.");
  } else if (!reEmail.test(formEmail.value.toLowerCase())) {
    return showEmailAlerts("Invalid email.");
  } else {
    removeEmailAlerts();
  }

  axios.post('https://my-email-service.herokuapp.com/', {
    name: inputs[0].lastElementChild.value,
    email: formEmail.value,
    subject: 'Interested in CV site',
    content: inputs[2].lastElementChild.value
  })
  .then(res => {
    if (res.data.type === 'success') {
      removeEmailAlerts();
      form.reset();
      emailSuccess.classList.add('show');
    }
  })
  .catch(err => {
    if (err.response.data.type === 'failure' &&
        err.response.data.messages === 'Invalid email.') {
      showEmailAlerts("Invalid email.");
    }
  });
});



















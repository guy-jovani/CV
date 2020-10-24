

import '../scripts/index';
import '../styles/contact.css';


const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const form = document.querySelector('form');
const submitBtn = document.getElementById('submit');
const formEmail = document.getElementById('email');
const emailSendSuccess = document.getElementById('email-send-success');
const emailHelperInvalidMail = document.querySelectorAll('.helper-box-invalid-mail span');
const emailHelperEmailNotSent = document.querySelectorAll('.helper-box-email-not-sent span');

const showEmailAlerts = (element, message) => {
  element.forEach(sp => {
    sp.classList.add('show');
    if (sp.classList.contains('helper-message')) {
      sp.innerHTML = message;
    }
  });
  if (element === emailHelperInvalidMail) {
    formEmail.classList.add('alert-border');
  }
}

const removeEmailAlerts = (element) => {
  element.forEach(sp => {
    sp.classList.remove('show');
  });
  if (element === emailHelperInvalidMail) {
    formEmail.classList.remove('alert-border');
  }
}


submitBtn.addEventListener('click', event => {
  event.preventDefault();
  const inputs = event.target.closest('form').children;

  if (!formEmail.value) {
    return showEmailAlerts(emailHelperInvalidMail, "This field is required.");
  } else if (!reEmail.test(formEmail.value.toLowerCase())) {
    return showEmailAlerts(emailHelperInvalidMail, "Invalid email.");
  } else {
    removeEmailAlerts(emailHelperInvalidMail);
    removeEmailAlerts(emailHelperEmailNotSent);
  }

  axios.post('https://my-email-service.herokuapp.com/', {
    name: inputs[0].lastElementChild.value,
    email: formEmail.value,
    subject: 'Interested in CV site',
    content: inputs[2].lastElementChild.value
  })
  .then(res => {
    if (res.data.type === 'success') {
      removeEmailAlerts(emailHelperInvalidMail);
      removeEmailAlerts(emailHelperEmailNotSent);
      form.reset();
      emailSendSuccess.classList.add('show');
    }
  })
  .catch(err => {
    if (err.response.data.type === 'failure') {
      if (err.response.data.messages === 'Invalid email.') {
        showEmailAlerts(emailHelperInvalidMail, "Invalid email.");
      } else {
        showEmailAlerts(emailHelperEmailNotSent,
                        err.response.data.messages.charAt(0).toUpperCase() +
                        err.response.data.messages.slice(1));
      }
    } 
  });
});



















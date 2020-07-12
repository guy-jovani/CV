


const submitBtn = document.getElementById('submit');
const formEmail = document.getElementById('email');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  const inputs = event.target.closest('form').children;

  if (!formEmail.value) {
    console.log('1111111')
  }

  axios.post('https://my-email-service.herokuapp.com/', {
    name: inputs[0].lastElementChild.value,
    email: inputs[1].lastElementChild.value,
    subject: 'Interested in CV site',
    content: inputs[2].lastElementChild.value
  })
  .then(res => {
    console.log('ssssssssssss')
    console.log(res)
  })
  .catch(err => {
    console.log('eeeeeeeeeeee')
    console.log(err)
  });
});



















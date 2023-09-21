import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formStorage =
  JSON.parse(localStorage.getItem('feedback-form-state')) ?? false;

if (formStorage) {
  form.email.value = formStorage.email;
  form.message.value = formStorage.message;
}

form.addEventListener('input', throttle(handleInput, 500));
function handleInput(event) {
  const targetName = event.target.name;
  const targetValue = event.target.value;
  if (targetName === 'email') {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: targetValue, message: form.message.value })
    );
  }
  if (targetName === 'message') {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email: form.email.value, message: targetValue })
    );
  }
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

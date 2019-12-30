const email = document.getElementById('email');
const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('password-confirm');
const signupForm = document.getElementById('signup');
const errorMessage = document.getElementById('warning');

signupForm.addEventListener('submit', (e) => {
  let messages = [];

  if (email.value === '' || email.value == null) {
      messages.push('Please enter an email');
  }

  if (pwd.value === '' || pwd.value == null) {
    messages.push('Please enter a password');
  } else if (pwdConfirm.value === '' || pwdConfirm.value == null) {
    messages.push('Please confirm the password you entered');
  } else if (pwd.value !== pwdConfirm.value) {
    messages.push('Passwords do not match');
  } else if (pwd.value.length < 6) {
        messages.push('Password must contain at least 6 characters');
  } else if (pwd.value.length > 16) {
    messages.push('Password must not have more than 16 characters');
  } else if (pwd.value.toLowerCase() === 'password') {
    messages.push('Password cannot be "password"');
  }

  if (messages.length > 0) {
    e.preventDefault();
    console.log(messages);

    errorMessage.innerText = messages.join(', ');

    errorMessage.classList.remove('d-none');
  }
});

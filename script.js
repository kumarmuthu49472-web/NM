// Get form and inputs
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email format
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Event listener
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting

  // Validate username
  if(username.value.trim() === '') {
    showError(username, 'Name is required');
  } else {
    showSuccess(username);
  }

  // Validate email
  if(email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if(!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  // Validate password
  if(password.value.trim() === '') {
    showError(password, 'Password is required');
  } else if(password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters');
  } else {
    showSuccess(password);
  }

  // Validate confirm password
  if(confirmPassword.value.trim() === '') {
    showError(confirmPassword, 'Please confirm your password');
  } else if(password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Passwords do not match');
  } else {
    showSuccess(confirmPassword);
  }
});

const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

function setError(input, message) {
  input.classList.add('error');
  const el = input.id === 'email' ? emailError : passwordError;
  el.textContent = message;
}

function clearError(input) {
  input.classList.remove('error');
  const el = input.id === 'email' ? emailError : passwordError;
  el.textContent = '';
}

function validateEmail(value) {
  if (!value.trim()) return 'Email is required';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) return 'Please enter a valid email';
  return '';
}

function validatePassword(value) {
  if (!value) return 'Password is required';
  if (value.length < 6) return 'Password must be at least 6 characters';
  return '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const emailMsg = validateEmail(email);
  const passwordMsg = validatePassword(password);

  clearError(emailInput);
  clearError(passwordInput);

  if (emailMsg) setError(emailInput, emailMsg);
  if (passwordMsg) setError(passwordInput, passwordMsg);

  if (emailMsg || passwordMsg) return;

  // Replace with your actual login logic (e.g. fetch to API)
  console.log('Submit:', { email, password, remember: form.remember.checked });
  alert('Login form submitted. Check console for data.');
});

emailInput.addEventListener('input', () => {
  clearError(emailInput);
});
emailInput.addEventListener('blur', () => {
  const msg = validateEmail(emailInput.value);
  if (msg) setError(emailInput, msg);
});

passwordInput.addEventListener('input', () => {
  clearError(passwordInput);
});
passwordInput.addEventListener('blur', () => {
  const msg = validatePassword(passwordInput.value);
  if (msg) setError(passwordInput, msg);
});

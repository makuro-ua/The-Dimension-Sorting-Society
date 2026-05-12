function go() {
  var email = document.getElementById('em').value;
  var password = document.getElementById('pw').value;
  var errorDiv = document.getElementById('err');
  
  // Check if both fields are filled
  if (email === '' || password === '') {
    errorDiv.textContent = 'fill in both fields.';
    return;
  }
  
  // Define valid credentials and their URLs
  var credentials = {
    'klara|021481': 'https://makuro-ua.github.io/The-Folier-s-Inn/',
    'maria|lairus': 'https://makuro-ua.github.io/Secrets/',
    'mauvrydelacenda@dimenmail.com|010881': 'https://makuro-ua.github.io/Main-Page/'
  };
  
  // Convert email to lowercase for case-insensitive comparison
  var emailLower = email.toLowerCase();
  var key = emailLower + '|' + password;
  
  if (credentials[key]) {
    // Valid login - redirect
    window.location.href = credentials[key];
  } else {
    // Invalid login
    errorDiv.textContent = 'invalid email or password.';
  }
}

function reset() {
  document.getElementById('em').value = '';
  document.getElementById('pw').value = '';
  document.getElementById('err').textContent = '';
}

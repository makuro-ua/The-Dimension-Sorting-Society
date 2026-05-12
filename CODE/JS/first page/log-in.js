function go() {
  var em = document.getElementById('em').value.trim().toLowerCase();
  var pw = document.getElementById('pw').value.trim();
  var err = document.getElementById('err');
  if (!em || !pw) { err.textContent = 'fill in both fields.'; return; }
  err.textContent = '';
  
  console.log('Email entered: "' + em + '"');
  console.log('Password entered: "' + pw + '"');
  
  var url = '';
  if (em === 'klara' && pw === '021481') {
    url = 'https://makuro-ua.github.io/The-Folier-s-Inn/';
  } else if (em === 'maria' && pw === 'Lairus') {
    url = 'https://makuro-ua.github.io/Secrets/';
  } else if (em === 'mauvrydelacenda@dimenmail.com' && pw === '010881') {
    url = 'https://makuro-ua.github.io/Main-Page/';
  } else {
    err.textContent = 'invalid email or password.';
    return;
  }
  
  console.log('Redirecting to: ' + url);
  window.location.href = url;  
}

function reset() {
  document.getElementById('em').value = '';
  document.getElementById('pw').value = '';
  document.getElementById('err').textContent = '';
  document.getElementById('done').style.display = 'none';
  document.getElementById('wrap').style.display = 'flex';
}

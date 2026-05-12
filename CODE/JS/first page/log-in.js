function go() {
  var em = document.getElementById('em').value.trim();
  var pw = document.getElementById('pw').value.trim();
  var err = document.getElementById('err');
  if (!em || !pw) { err.textContent = 'fill in both fields.'; return; }
  err.textContent = '';
  
  var url = '';
  if (em === 'Klara' && pw === '021481') {
    url = 'https://makuro-ua.github.io/The-Folier-s-Inn/';
  } else if (em === 'Maria' && pw === 'Lairus') {
    url = 'https://makuro-ua.github.io/Secrets/';
  } else {
    err.textContent = 'invalid email or password.';
    return;
  }
  
  window.location.href = url;
}

function reset() {
  document.getElementById('em').value = '';
  document.getElementById('pw').value = '';
  document.getElementById('err').textContent = '';
  document.getElementById('done').style.display = 'none';
  document.getElementById('wrap').style.display = 'flex';
}

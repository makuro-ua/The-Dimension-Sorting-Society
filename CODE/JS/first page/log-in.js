function go() {
  var em = document.getElementById('em').value.trim();
  var pw = document.getElementById('pw').value.trim();
  var err = document.getElementById('err');

  if (!em || !pw) { err.textContent = 'fill in both fields.'; return; }
  err.textContent = '';

  var special = em === '1111' && pw === '0000';
  document.getElementById('wrap').style.display = 'none';

  var done = document.getElementById('done');
  done.style.display = 'block';
    setTimeout(function redirectToPage() {
      window.location.href = special ? 'CODE/HTML/Hidden/easteregg.html' : 'CODE/HTML/Main/Main page.html';
    });
}

function reset() {
  document.getElementById('em').value = '';
  document.getElementById('pw').value = '';
  document.getElementById('err').textContent = '';
  document.getElementById('done').style.display = 'none';
  document.getElementById('wrap').style.display = 'flex';
}

var canClick = true; // Zmienna śledząca, czy gracz może kliknąć

function getCenterPosition() {
  var x = window.innerWidth;
  var y = window.innerHeight;
  var centerX = Math.floor(x / 2 - 50); // 50 to połowa szerokości kwadratu
  var centerY = Math.floor(y / 2 - 50); // 50 to połowa wysokości kwadratu
  return [centerX, centerY];
}

function showTarget() {
  var target = document.getElementById('target');
  var position = getCenterPosition();
  target.style.left = position[0] + 'px';
  target.style.top = position[1] + 'px';
  target.style.display = 'block';
  startTime = new Date();
  canClick = true; // Ustawia zmienną na true, aby gracz mógł kliknąć
}

function hitTarget() {
  if (!canClick) {
    return; // Jeśli nie można kliknąć, nie wykonuj reszty funkcji
  }

  var endTime = new Date();
  var timeDiff = endTime - startTime;
  alert('Twój czas reakcji wyniósł ' + timeDiff + ' milisekund.');
  document.getElementById('target').style.display = 'none';
  canClick = false; // Ustawia zmienną na false, aby gracz nie mógł kliknąć ponownie od razu
  setTimeout(showTarget, Math.random() * 5000 + 2000);
}

var startTime;
document.getElementById('target').addEventListener('click', hitTarget);
setTimeout(showTarget, Math.random() * 5000 + 2000);
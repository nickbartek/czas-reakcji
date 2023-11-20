function getRandomPosition() {
    var x = window.innerWidth - 100;
    var y = window.innerHeight - 100;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }
  
  function showTarget() {
    var target = document.getElementById('target');
    var position = getRandomPosition();
    target.style.left = position[0] + 'px';
    target.style.top = position[1] + 'px';
    target.style.display = 'block';
    startTime = new Date();
  }
  
  function hitTarget() {
    var endTime = new Date();
    var timeDiff = endTime - startTime;
    alert('Twój czas reakcji wyniósł ' + timeDiff + ' milisekund.');
    document.getElementById('target').style.display = 'none';
    setTimeout(showTarget, Math.random() * 5000 + 2000); // Uruchamia grę ponownie po zakończeniu kliknięcia.
  }
  
  var startTime;
  document.getElementById('target').addEventListener('click', hitTarget);
  setTimeout(showTarget, Math.random() * 5000 + 2000);
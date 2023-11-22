var canClick = true;


function getRandomPosition() {
  var x = window.innerWidth /2;
  var y = window.innerHeight /2;
  var randomX = Math.floor(x);
  var randomY = Math.floor(y);
  return [randomX, randomY];
}

function showTarget() {
  var target = document.getElementById('target');
  var position = getRandomPosition();
  target.style.left = position[0] + 'px';
  target.style.top = position[1] + 'px';
  target.style.display = 'block';
  startTime = new Date();
  canClick = true;
    
  randomshow= Math.random() *10
  if(randomshow>5) {
  // Pokazuje dystraktor
  var distractor = document.getElementById('distractor');
  var distractorPosition = getRandomPosition();
  distractor.style.left = distractorPosition[0] + 'px';
  distractor.style.top = distractorPosition[1] + 'px';
  distractor.style.display = 'block';
}
}

function hitTarget(event) {
  if (!canClick) {
    return;
  }

  var clickedElement = event.target;
  if (clickedElement.id === 'target') {
    var endTime = new Date();
    var timeDiff = endTime - startTime;
    alert('Twój czas reakcji wyniósł ' + timeDiff + ' milisekund.');
  } else if (clickedElement.id === 'distractor') {
    alert('Ooops! Kliknąłeś dystraktor. Gra zrestartowana.');
  }

  document.getElementById('target').style.display = 'none';
  document.getElementById('distractor').style.display = 'none';
  canClick = false;
  setTimeout(showTarget, Math.random() * 5000 + 2000);
}

var startTime;
document.addEventListener('click', hitTarget);
setTimeout(showTarget, Math.random() * 5000 + 2000);

const konamiCode = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  if (e.keyCode === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      alert('Konami Code Activated!');
      document.body.style.backgroundColor = "#0062ff" ;
      document.body.appendChild(document.createElement('img')).src = 'logo.png';
      konamiCodePosition = 0;
      const whiteBand = document.createElement('div');
        whiteBand.classList.add('white-band');
        document.body.appendChild(whiteBand);
    }
  } else {
    konamiCodePosition = 0;
  }

});


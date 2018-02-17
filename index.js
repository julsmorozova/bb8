var sphere = document.querySelector('.sphere');
var topPart = document.querySelector('.top-part');
var ground = document.querySelector('.ground');

function controlAnimation() {
  var args = [].slice.call(arguments);
  var elements = args.slice(0, -1);
  var animationSetting = args[args.length - 1];
  elements.forEach(function(elem) {
    if (animationSetting !== 'stop') {
      if (animationSetting === 'right') {
        elem.classList.add('move-right');
      }
      else elem.classList.add('move-left');
    }
    else {
      elem.classList.contains('move-right')
        ? elem.classList.remove('move-right')
        : elem.classList.remove('move-left');
    }
  });
}

function parseKeyCode(e) {
  var result = 0;
  switch (e.keyCode) {
    case 39:
      result = 'right';
      break;
    case 37:
      result = 'left';
      break;
  }
  return result;
}

function handleKeyDown(e) {
  var direction = parseKeyCode(e);
  controlAnimation(sphere, topPart, ground, direction);
}

function handleKeyUp(e) {
  controlAnimation(sphere, topPart, ground, 'stop');
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

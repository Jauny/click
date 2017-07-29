var getMousePos = function(evt, canvas) {
  var rect = canvas.getBoundingClientRect();
  return {
    y: evt.clientY - rect.top,
    x: evt.clientX - rect.left
  };
};

var handleMouseClick = function(evt, canvas, ctx) {
  var mousePos = getMousePos(evt, canvas);

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(mousePos.x, mousePos.y, 30, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
};

var setup = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white'
  ctx.fill();
  ctx.stokeStyle = 'black';
  ctx.stroke();

  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText('Click!', canvas.width / 2, 50);

  var mouseDown = false;
  canvas.addEventListener('mousedown', function(evt) {
    mouseDown = true;
    handleMouseClick(evt, canvas, ctx);
  });
  canvas.addEventListener('mouseup', function() {
    mouseDown = false;
  });

  canvas.addEventListener('mousemove', function(evt) {
    if (mouseDown) {
      handleMouseClick(evt, canvas, ctx);
    }
  });
};

setup();
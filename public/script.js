let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
let pool = document.getElementById('poolId');

pool.style.height = height + 'px';

let posX = [];
let posY = [];
let direction = [];
let ball = [];
 let id = setInterval(move, 10);

for (var i = 0; i < 100; i++) {
  direction.push(Math.random(1)*2*Math.PI);
  posY[i] = Math.sin(direction[i]);
  posX[i] = Math.cos(direction[i]);
}

for (var i = 0; i < 100; i++) {
  ball[i] = document.createElement('div');
  ball[i].className = "ball";
  ball[i].style.top = Math.floor(Math.random()*(height-10))+'px';
  ball[i].style.left = Math.floor(Math.random()*(width-10))+'px';
  poolId.append(ball[i]);
}


function move() {
  for (var i = 0; i < 100; i++) {
    if (parseFloat(ball[i].style.top) < 0||parseFloat(ball[i].style.top) > (height-10)) {
      posY[i] = -posY[i];
    }
    if (parseFloat(ball[i].style.left) < 0||parseFloat(ball[i].style.left) > (width-10)) {
      posX[i] = -posX[i]
    }
    ball[i].style.top = parseFloat(ball[i].style.top)+posY[i]+'px';
    ball[i].style.left = parseFloat(ball[i].style.left)+posX[i]+'px';
  }
}

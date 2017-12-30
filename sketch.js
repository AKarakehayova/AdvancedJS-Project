const canvasWidth = 800;
const canvasHeight = 800;
const fps = 30;
const frameCountNewPipe = 200;
const horizontalGapBetweenPipes = 300;

const immortalMode = false; //ако искаш да се рестартира играта

var bird;
var pipes = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(fps);

  newGame();
}

function draw() {
    background(0);

    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      if (pipes[i].hits(bird)) {
        bird.die();
      }

      removeOffscreenPipe(pipes[i], i);
    }
    
    bird.update();
    bird.show();
  
  if (!bird.alive && !immortalMode) {
    newGame();
  // } else if (frameCount % frameCountNewPipe == 0) { //на всеки 200 фрейма добавя тръба
  } else if (pipes[pipes.length - 1].getRightPoint() < canvasWidth - horizontalGapBetweenPipes) { //като последната тръба е на N пиксела от края
    pipes.push(new Pipe());
  }
}

function newGame() {
  bird = new Bird();
  pipes = [];
  pipes.push(new Pipe());
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}

function removeOffscreenPipe(pipe, index) {
  if (pipe.offscreen()) {
    pipes.splice(index, 1);
  }
}

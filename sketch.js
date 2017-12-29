var immortalMode = true; //ако искаш да се рестартира играта

var bird;
var pipes = [];

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  
  //тва е малко имбаво нз що
  if(!bird.alive && !immortalMode) {
    bird = new Bird();
    pipes = [];
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      // console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  
  //на всеки 200 фрейма добавя тръба
  if (frameCount % 200 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}

const size = 32; //диаметър на пилето
const birdStartPoin = 90 //да се намира винаги на 90 пиксел

const gravity = 0.9;
const lift = -15; //пиксели с които пилето ще се измести нагоре при flap();
const velocity = 0; //скорост на пилето
const airResistance = 0.8;

// const speed = 3; //todo get from sketchjs

function Bird() {
  this.y = height / 2; //да почва от средата на екрана 
  this.x = birdStartPoin;
  this.velocity = velocity;
  this.alive = true;
  this.totalTravelledDistance = 0;

  //todo add total travelled distance

  this.show = function() {
    fill(255);
    rect(this.x, this.y, size, size);
    // ellipse(this.x, this.y, size, size);
  }

  this.flap = function() {
    this.velocity += lift;
  }

  this.update = function() {
    this.fall();
    this.updateBirdPosition();
    
    if(!this.isInGameField()) {
      this.die();
    }
  }

  this.die = function() {
    this.alive = false;
  }

  this.updateBirdPosition = function() {
    this.top = this.y;
    this.bottom = this.y + size;
    this.left = this.x;
    this.right = this.x + size;
  }

  this.fall = function() {
    this.calculateVelocity();
    this.y += this.velocity;
    this.totalTravelledDistance += 3;//todo get from speed
  }

  this.calculateVelocity = function() {
    this.velocity = (this.velocity + gravity) * airResistance;
  }

  this.isInGameField = function() {
    if (this.bottom > height || this.top < 0) {
      return false;
    }

    return true;
  }

  this.debug = function() {
    console.log("Bird Top:"  + this.top);
    console.log("Bird Bottom:" + this.bottom);
    console.log("Bird Left:" + this.left);
    console.log("Bird Right:" + this.right);
  }

  //ai

  this.horizontalDistance = function(pipe) {
    return pipe.x - this.right;
  }

  this.verticalDistance = function(pipe) {
    return Math.min(abs(this.bottom - pipe.bottom), abs(this.top - pipe.top));
  }
}

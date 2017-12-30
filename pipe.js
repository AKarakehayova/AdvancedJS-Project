const pipeWidth = 90;
const speed = 3; //пиксели с които тръбата ще се измести при следващ кадър (По Х) //move it to sketch.js
const gapBetweenPipes = 130;
const minPipeSize = 150;

function Pipe() {
  this.top = random(gapBetweenPipes + minPipeSize, height - gapBetweenPipes - minPipeSize); 
  this.x = width;
  this.width = pipeWidth;
  this.bottom = this.top + gapBetweenPipes;
  
  this.hit = false;
  this.highlight = false;

  this.hits = function(bird) {
    if (this.hit) {
      return true;
    }

    if (bird.top < this.top || bird.bottom > this.bottom) {
      if (bird.right > this.x && bird.left < this.x + this.width) {
        this.highlight = true;
        this.hit = true;
        
        return true;
      }
    }
    
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.bottom, this.width, height);
  }

  this.update = function() {
    this.x -= speed;
  }

  this.offscreen = function() {
    if (this.x < -this.width) {
      return true;
    } else {
      return false;
    }
  }

  this.getRightPoint = function() {
    return this.x + this.width;
  }
}

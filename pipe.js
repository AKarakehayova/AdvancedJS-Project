function Pipe() {
  //взима точка за горната тръба (от 20-80% от цялата дължина на екрана, за да няма прекалено ниски или прекалено високи тръби) 
  this.top = random(height*20/100, height*80/100); // По Y
  this.x = width; //стартова точка на тръбата (По Х) width и height са глобални променливи от библиотеката за рендене
  this.width = 80; //ширина на тръбата (По Х)
  this.speed = 3; //пиксели с които тръбата ще се измести при следващ кадър (По Х)
  this.gapBetweenPipes = 130; //растояние между двете тръби (по Y)
  this.bottom = this.top + this.gapBetweenPipes; //начална точка на долната тръба (по Y)
  
  this.hit = false;
  this.highlight = false; //оцветява тръбите

  this.hits = function(bird) {

    if (this.hit) {
      return true;
    }
    //най-горната точка на пилето < начална точка на горната тръба по У
    //най-долна точка на пилето > началната точка на долната тръба по У
    //най-дясната точка на пилето е между началото и края на тръбата (по Х)
    if (bird.top < this.top || bird.bottom > this.bottom) { 

      console.log("##############")
      console.log(bird.top + " " + this.top)
      console.log(bird.bottom + " " + this.x)
      console.log(bird.right + " " + this.x + this.width)
      
      if (bird.right > this.x && bird.right < this.x + this.width) {
        this.hit = true;
        this.highlight = true;
        bird.alive = false;

        console.log(bird.top + " " + this.top)
        console.log(bird.bottom + " " + this.x)
        console.log(bird.right + " " + this.x + this.width)
        
        return true;
      }
    }
    this.highlight = false;
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
    this.x -= this.speed;
  }

  this.offscreen = function() {
    // console.log(this.x, this.width)
    if (this.x < -this.width) {
      return true;
    } else {
      return false;
    }
  }
}

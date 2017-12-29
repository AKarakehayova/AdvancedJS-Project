function Bird() {
  this.size = 32; //диаметър на пилето
  this.y = height / 2; //да почва от средата на екрана 
  this.x = 90; //да се намира винаги на 90 пиксел ## (май трябва да е константа)

  this.alive = true;

  //тия могат да се туийкват, ама така са чок гюзел
  this.gravity = 0.9; 
  this.lift = -15; //пиксели с които пилето ще се измести нагоре при flap();
  this.velocity = 0; //скорост на пилето
  this.airResistance = 0.8;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);
    // ellipse(this.x, this.y, this.size, this.size);
  }

  this.flap = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    // на всеки кадър пилето пада заради гравитацията
    // air resistance-a е за да не излита пилето извън екрана с 3 flap()-a, колкото по-ниско число, толкова по стабилно пиле
    this.velocity += this.gravity;
    this.velocity *= this.airResistance;
    this.y += this.velocity;

    //3те крайни точки на пилето, които ни интересуват
    this.top = this.y - this.size / 2;
    this.bottom = this.y + this.size / 2;
    this.right = this.x + this.size / 2;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
      this.alive = false;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
      this.alive = false;
    }
  }


}

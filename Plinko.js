class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      //this.color = color(255, 255, 255);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      //noStroke();
      //fill(this.color);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };
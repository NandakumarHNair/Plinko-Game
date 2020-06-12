const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,595,480,10);

  
  for (var k = 0; k <= 480; k = k + 80){
    divisions.push(new Division(k, 600 - divisionHeight/2, 5, divisionHeight));
  }

  for (var j = 40; j <= 480; j = j + 50){
    plinkos.push(new Plinko(j, 60));
  }

  for (var j = 15; j <= 480 - 10; j = j + 50){
    plinkos.push(new Plinko(j, 120));
  }

  for (var j = 40; j <= 480; j = j + 50){
    plinkos.push(new Plinko(j, 180));
  }

  for (var j = 15; j <= 480 - 10; j = j + 50){
    plinkos.push(new Plinko(j, 240));
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  if(frameCount % 90 === 0){
    particles.push(new Particle(random(480/2 - 10, 480/2 + 10), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  //plinkos.display();

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object
var ball

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

   var ob_option = {
     isStatic : true
   }

  object = Bodies.rectangle(200,375,400,20,ob_option);
  World.add(world, object);
  
  // console.log(object);
  
  var ball_option = {
    restitution : 0.8
  }

ball = Bodies.circle(200,200,40,ball_option);
  World.add(world,ball);

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  // console.log(object.position.y);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}
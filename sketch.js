
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var box1 = createSprite(600,650, 200, 20);
	var box2 = createSprite(700, 610, 20,100);
	var box3 = createSprite(500, 610, 20, 100);


	ground = createSprite(400, 660, 800, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(56, 624,)
  
  drawSprites();

  function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ellipseObject.body,ellipseObject.body.position,{x:85,y:-85});
	  
	}
}
 
}



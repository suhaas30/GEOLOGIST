
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var edges;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(400,350,15);
	ball2 = new Ball(380,350,15);
	ball3 = new Ball(360,350,15);
	ball4 = new Ball(340,350,15);
	ground = new Ground(400,660,800,40);
	hammer = new Hammer(300,350,100,30);
	square = new Square(280,350,60,60);
	rubber = new Rubber(440,315,40,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);



  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  
  ground.display();

  hammer.display();

  square.display();

  rubber.display();
  
  
 
 
 
 
 
 
 
 
 
 
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(hammer.body,{x:mouseX,y:mouseY});
}




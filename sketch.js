
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
	ground=new Ground(400,650,800,10)
ball=new Ball(100,600,10)
left = new Dustbin(550, 620, 20, 100);
 bottom = new Dustbin(610, 660, 100, 20);
  right = new Dustbin(670, 620, 20, 100);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display()
  ball.display()
	  left.display()
  right.display()
  bottom.display()

  drawSprites();
 
}
function keyPressed()
{ if(keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball.body, ball.body.position, {x:20, y: -20}) } }




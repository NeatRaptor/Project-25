const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground, dustbinImg, dustbin;

function preload()
{
	dustbinImg = loadImage("sprite/dustbingreen.png")
}

function setup() {
	createCanvas(1500,700);
	engine = Engine.create();
	world = engine.world;
	dustbin = createSprite(1075,570);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.8
	//Create the Bodies Here.
	paper = new Paper(120,690,70);
	dustbin1 = new Dustbin(985,570,20,220);
	dustbin2 = new Dustbin(1165,570,20,220);
	dustbin3 = new Dustbin(1075,680,200,20);
	ground = new Ground(750,height,1500,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255)

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:270,y:-270});
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var dustbin
var world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,690);
	paperObject=new Paper(200,500,40);
	groundObject=new Ground(width/2,690,width,20);
	
	
  }

function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine)
  
  groundObject.display();
  paperObject.display();
  dustbinObj.display();

  drawSprites()
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:105,y:-90});
    }}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;
var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	roof = new Roof(300,100,400,30);

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	//bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	/*bob1 = new Bob(stratBobPositionX,50);
	bob2 = new Bob(340,300,50);
	bob3 = new Bob(360,300,50);
	bob4 = new Bob(380,300,50);*/

    rope1 = new Rope (bob1.body,roof.body,-80,0);
	rope2 = new Rope (bob2.body,roof.body,-40,0);
	rope3 = new Rope (bob3.body,roof.body,0,0);
	rope4 = new Rope (bob4.body,roof.body,40,0);
    
	//Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);

  rectMode(CENTER);
  background(255);
  
  roof.display();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		bob1.force();
	}

}


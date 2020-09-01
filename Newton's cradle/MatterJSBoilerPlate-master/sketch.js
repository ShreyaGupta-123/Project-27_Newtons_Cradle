
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;
var c1,c2,c3,c4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  bobDiameter=30
	roof=new Roof(400,200,600,20);
	bob3=new Bob(400,500,bobDiameter);
	bob2=new Bob(370,500,bobDiameter);
	bob4=new Bob(430,500,bobDiameter);
	bob1=new Bob(340,500,bobDiameter);
	bob5=new Bob(460,500,bobDiameter);

	rope=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0);
    rope3=new Rope(bob3.body,roof.body,0,0);
    rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0);
    rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);

	
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:30});

	}


}

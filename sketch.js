
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd ;
var boxBottom, boxLeft, boxRight;
var paper ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grnd = new Ground (width/2, height-40, width, 20, "red");
	
	//create landing box for package
	fill ("red");
	boxBottom = new Ground (width/2,height-40-15,200,20,"grey");
	//create left landing box for package
	var boxLeftX = boxBottom.body.position.x - 90 ;
	var boxLeftY = boxBottom.body.position.y-60 ;
	boxLeft = new Ground (boxLeftX, boxLeftY,20,100, "grey");
	//create Right landing box for package
	var boxRightX = boxBottom.body.position.x + 90 ;
	var boxRightY = boxBottom.body.position.y-60 ;
	boxRight = new Ground (boxRightX, boxRightY,20,100,"grey");

	// paper
	paper = new Paper (100,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  grnd.display ();
  boxBottom.display ();
  boxLeft.display ();
  boxRight.display ();
  paper.display ();
 
}



function keyPressed () {
	if (keyCode == RIGHT_ARROW) {
		console.warn ("RIGHT ARROW");
		Matter.Body.applyForce(paper.body, paper.body.position,{x:7,y:-15});
	}
}
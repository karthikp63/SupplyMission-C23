var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var boxPart1, boxPart2, boxPart3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;


	boxPart1=new box(330,595,20,100)
	boxPart2=new box(420,650,200,20)
	boxPart3=new box(510,590,20,100)

	packageBody = Bodies.rectangle(width/2 , 200 , 20 ,54, {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	Engine.run(engine);
   packageSprite.debug=true;
}


function draw() {

  background(0);
  Engine.update(engine)

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  boxPart1.display();
  boxPart2.display();
  boxPart3.display();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
  }
}	
/*
function drawSprites(){
	var pos = body.positions;
	var angle = body.angle;
	push();
	trasnlate(pos.x,pos.y);
	rotate(angle);
	imageMode(CENTER);
	image(img,0,0)
	pop();
}
*/


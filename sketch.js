var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine=Matter.Engine;
const Render=Matter.Render;
var paper1,distbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper1=new Paper();
dustbin1=new Dustbin(400,600,200,20);
//dustbin2=new Dustbin(300,630,20,100);
//dustbin3=new Dustbin(500,630,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:800,
		height:700,
		wireframes:false
	}
});
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	


	keyPressed();
  Render.run(render);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  rect(ground.position.x,ground.position.y,width,20);
  paper1.display();
  dustbin1.display();

  //dustbin2.display();
  //dustbin3.display();

  //drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		
		Body.applyForce(paper1.paper,paper1.paper.position,{x:40,y:-50})
	}}
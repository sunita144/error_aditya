var ground1,box1,paper1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1400, 600);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(1200,500,150,150);
	box2 = new Box(1200,300,20,150);
	box3 = new Box(1200,700,20,150);
	paper1 = new Paper(200,500,30);
	ground1 = new Ground(700,530,1400,30);
	 
	Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
	
	box1.display();
	box2.display();
	box3.display();
	//box4.dispaly();
	
	ground1.display();
	paper1.display();

  drawSprites();
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-200});

		}
	}




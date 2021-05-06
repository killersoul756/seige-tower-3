const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40)
  
  ball = new Ball(0,0,50);
 

  spring = new Projectile(ball.body,{x:100,y:200});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(400,300,300,20);
  
}

function draw() {
  background(0);
  Engine.update(engine);  

  if((box1.speed)>3){
    World.remove(world,box1)
  }
  if((box2.speed)>3){
    World.remove(world,box2)
  }
  if((box3.speed)>3){
    World.remove(world,box3)
  }
  if((box4.speed)>3){
    World.remove(world,box4)
  }
  if((box5.speed)>3){
    World.remove(world,box5)
  }
  if((box6.speed)>3){
    World.remove(world,box6)
  }
  if((box7.speed)>3){
    World.remove(world,box7)
  }
  if((box8.speed)>3){
    World.remove(world,box8)
  }
  if((box9.speed)>3){
    World.remove(world,box9)
  }


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode===32){
      spring.attach(ball.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      background("yellow");
  }
  else{
      background("black");
  }

}
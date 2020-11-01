const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,polygonImg;
var slingshot;


function preload(){
polygonImg = loadImage("polygon.png");
}
function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(1000,400,400,10);
  polygon = Bodies.circle(200,400,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:200,y:400});

 // 1 layer  
box1 = new Box(820,300,40,50);
box2 = new Box(865,300,40,50);
box3 = new Box(910,300,40,50);
box4 = new Box(955,300,40,50);
box5 = new Box(1000,300,40,50);
box6 = new Box(1045,300,40,50);
box7 = new Box(1090,300,40,50);
box8 = new Box(1135,300,40,50);

//2 layer
box9 = new Box(865,200,40,50);
box10 = new Box(910,200,40,50);
box11 = new Box(955,200,40,50);
box12 = new Box(1000,200,40,50);
box13 = new Box(1045,200,40,50);  
box14 = new Box(1090,200,40,50);  

//3 layer
box15 = new Box(910,100,40,50);
box16 = new Box(955,100,40,50);
box17 = new Box(1000,100,40,50);
box18 = new Box(1045,100,40,50);

//4 layer
box19 = new Box(955,45,40,50);
box20 = new Box(1000,45,40,50);


}

function draw() {
  background("yellow");  
  Engine.update(engine);
  strokeWeight(1);
ground1.display();
imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);
slingshot.display();
fill("lightblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();

fill("pink");
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();

fill("lightgreen");
box15.display();
box16.display();
box17.display();
box18.display();

fill(183,132,167);
box19.display();
box20.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon , {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
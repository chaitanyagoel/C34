//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Matter.Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(700,160,70,70);
    
   ball = new Ball(500,100,20);

  //log6 = new Log(230,180,80, PI/2);
    sling = new SlingShot(ball.body,{x: 500, y: 100});
}

function draw(){
    background(0);

    Matter.Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
   

    box5.display();
    

    ball.display();
   
   // log6.display();
    sling.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}
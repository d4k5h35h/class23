const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320);
    box2 = new Box(920,320);
    pig1 = new Pig(810,350);
    log1 = new log(810,260,400,PI/2);
    bird1 = new Bird(100,100);
    box3 = new Box(700,240);
    box4 = new Box(920,240);
    pig2 = new Pig(810,220);
    log2 = new log(810,180,400,PI/2);
    box5 = new Box(810,160);
    log3 = new log(760,130,135,PI/7);
    log4 = new log(870,130,135, - PI / 7);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    ground.display();
}
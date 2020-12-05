const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var dustbinImage;

function preload() {
    dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,480,200,20);
    box2 = new Box(500,450,20,200);
    box3 = new Box(700,450,20,200);
    ground = new Ground(500,500,1000,20);
    paper = new Paper(100,480,70); 
}

function draw() {
    background("cream");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    paper.display();
    imageMode(CENTER);
    image(dustbinImage, 600, 370, 250, 250);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y:-70});
    }
}
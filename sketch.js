const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var bg,engine,world;

var Snow1,Snow_1,SnowImg;
var Snow2,Snow_2,Snow2Img;
var Snow_3,Snow_4,Snow_5,Snow_6,Snow_7;
function preload(){
  bg = loadImage("snow3.jpg");
  SnowImg = loadImage("snow4.webp");
  Snow2Img = loadImage("Snow5.webp");
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  //World.add(world,ground_1);
  var option_1 = {
    density:1,
    frictionAir:0.1
  }
  Snow1 = Bodies.rectangle(0,0,10,10,option_1);
  World.add(world,Snow1);
  Snow2 = Bodies.rectangle(0,-50,10,10,option_1);
  World.add(world,Snow2);

  Snow_1 = createSprite(400,0);
  Snow_1.addImage(SnowImg);
  Snow_1.scale = 0.1;

  Snow_2 = createSprite(600,0);
  Snow_2.addImage(Snow2Img);
  Snow_2.scale = 0.1;

  Snow_3 = createSprite(200,0);
  Snow_3.addImage(Snow2Img);
  Snow_3.scale = 0.1;

  Snow_4 = createSprite(800,0);
  Snow_4.addImage(SnowImg);
  Snow_4.scale = 0.1;

  Snow_5 = createSprite(50,0);
  Snow_5.addImage(SnowImg);
  Snow_5.scale = 0.1;

  Snow_6 = createSprite(1000,0);
  Snow_6.addImage(Snow2Img);
  Snow_6.scale = 0.1;

  Snow_7 = createSprite(1150,0);
  Snow_7.addImage(SnowImg);
  Snow_7.scale = 0.1;

}

function draw() {
  background(bg);  
  Engine.update(engine);
  Snow_1.y=Snow1.position.y;

  Snow_2.y=Snow2.position.y;

  Snow_3.y=Snow2.position.y;

  Snow_4.y=Snow1.position.y;

  Snow_5.y=Snow1.position.y;

  Snow_6.y=Snow2.position.y;

  Snow_7.y=Snow1.position.y;

  //console.log(Snow1.position.y);

  drawSprites();
}
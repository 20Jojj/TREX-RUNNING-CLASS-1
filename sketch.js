
var trex ,trex_running;
var ground;
var groundimg;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png");


}

function setup(){
  createCanvas(600,200)
  
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 trex.x = 50;
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundimg);

}

function draw(){
  background("white")

  if(keyDown("SPACE")) {
    trex.velocityY = -10;
  }
trex.velocityY = trex.velocityY+0.5;
trex.collide(ground);
  drawSprites();
  

}

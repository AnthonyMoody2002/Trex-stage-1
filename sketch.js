var trex, trex_running;
var ground, ground_image;
var edges;

function preload(){
  //loading trex animation
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  //loading the ground image
  ground_image = loadImage("ground2.png");
}


function setup(){
  //creating canvas
  createCanvas(600,200);

  //using the console.log
  console.log("Trex Runner Game")

  //create a trex sprite
  trex =  createSprite(50, 160, 20, 50);
  trex.addAnimation("running",trex_running);

  //scale  and position the trex sprite
  trex.scale = 0.5;
  trex.x = 50;

  //creating a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage(ground_image);
  //position the ground to be symmetrically placed on the screen
  ground.x = ground.width/2;

  //create edges
  edges = createEdgeSprites();

}

function draw(){
  //setting the background color to white
  background("white");

  //logging the y position of the trex
  console.log(trex.y);
  
  ground.velocityX = -2;

  //infinitely scrolling ground
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //making the trex jump on pressing space
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //adding gravity
  trex.velocityY = trex.velocityY + 0.5;

  //make the Trex collide with the ground so that it does not fall off the ground
  trex.collide(ground);

  drawSprites();
}
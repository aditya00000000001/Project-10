    var ship_running ; 
    var sea ; 
    var seaImg ; 
    var ship  ;
function preload(){
  seaImg = loadImage("sea.png") ;
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png") ;
  


}

function setup(){
  createCanvas(400,400);
 sea = createSprite (200,150,400,200) ; 
 ship = createSprite(200,210,30,30) ; 
 sea.addImage(seaImg) ; 
 ship.addAnimation("running",ship_running) ;
ship.scale = 0.3 ;
sea.velocityX = -4 ;


}

function draw() {
  background("red");
if(sea.x < 0) {
  sea.x = sea.width/2 ;
}
  drawSprites (); 
 
}

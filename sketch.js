var car,wall;
var speed,weight;

function setup() {
  
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX = speed;
  car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)

}
function draw() {
  background(0);  
  console.log("hello");
  drawSprites();
}
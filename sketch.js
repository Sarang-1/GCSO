var car,wall;
var speed,weight;

function setup() {
  createCanvas(1100,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  car.shapeColor="white";
}

function draw() {
  background("black");  
   drawSprites();

  if(wall.x - car.x <= (car.width + wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    } else if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0);
    }else if (deformation>180) {
      car.shapeColor=color(255,0,0);
    }
  }
 
}
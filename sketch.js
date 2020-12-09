 var wall,thickness;
 var bullet,speed,weight;

   
   
   
function setup() {
  createCanvas(800,400);

thickness=random(22,83);
weight=random(223,321);
speed=random(30,52);

  bullet=createSprite(50, 200, 20, 10);
  bullet.velocityX = speed;
  wall=createSprite(700, 200, thickness, height/2);
  
}

function draw() {
  background("lightblue");
  
  if(hascollided(bullet,wall))
  {
      bullet.velocityX=0;
      var damage=05 * weight * speed * speed/(thickness * thickness * thickness);
   
    if(damage>10)  
  {

      wall.shapeColor="red";
  }

    if(damage<10)
     {
       wall.shapeColor="green";
     }
  }

  drawSprites();
}

function hascollided(bullet1,wall1)
{
   bulletRightEdge=bullet1.x +bullet1.width;
   wallLeftEdge=wall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
        return true;
   }
      return false;
}

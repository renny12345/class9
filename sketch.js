var ball ;

function setup() {
  createCanvas(600,400);
  ball = createSprite (200,200,100,100)
}

function draw() 
{
  background("green");
  if (keyIsDown(RIGHT_ARROW)){
   ball.x += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    ball.x -= 5;
  }
  if (keyIsDown(UP_ARROW)){
    ball.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    ball.y += 5;
  }
drawSprites ();
}





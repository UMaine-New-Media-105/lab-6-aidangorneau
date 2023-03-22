let spriteY //defining sprite variables
let spriteX 
function setup() {
  createCanvas(400, 400);
  spriteY = 50//setting sprite variables
  spriteX = 50
  coinX = random(400)//making random spawn point for coin each time
  coinY = random(400)
  coinAlive = true
  // noLoop()
}

function draw() {
  background(220);
  collector(spriteX, spriteY, "blue")//call sprite
  if (!coinAlive){
    collector(spriteX, spriteY, "red")//call sprite red if coin is dead
  }
  coin(coinX, coinY)//call coin
  // for (let counter = 0; counter < 5; counter++) {
  //   coin(random(400), random(400))
  // }
  let d = dist(spriteX, spriteY, coinX, coinY);//calculates distance from center of both ellipses
  if (d < 33){//if ellipses are within 33 pixels, change coinAlive status
    coinAlive = false;
  }else{
    coinAlive = true;
  }
  
}

function keyPressed(){//if certain key is pressed, change sprite X or Y to move it in that direction
  if (keyCode == RIGHT_ARROW){
    spriteX += 10
  }
  if (keyCode == UP_ARROW){ 
    spriteY -= 10
  }  
  if (keyCode == DOWN_ARROW){ 
    spriteY += 10
  }
  if (keyCode == LEFT_ARROW){
    spriteX -= 10
  }
}

function collector(spriteX, spriteY, color){//draw sprite
  push()
  translate(spriteX, spriteY)//set position to sprite X and Y
  fill(color)
  ellipse(0, 0, 50, 50)
  pop()
}

function coin(coinX, coinY){//draws the coin
  translate(coinX, coinY)
  if (coinAlive){//if coin alive, coin yellow
  fill("yellow")
  ellipse(0, 0, 20, 20)
  }
  if (!coinAlive){//if coin not alive, make coin disapear
    ellipse(1000, 1000, 0, 0)
  }
}

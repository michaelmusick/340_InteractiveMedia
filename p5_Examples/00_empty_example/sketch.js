var circleheight = 2
var circlewidth = 2
var col = {
  r:255,
  g:255,
  b:255
}
function setup() {
  createCanvas(600,400);
  background(0);
  fill(255);
  text("HOLD BUTTON TO RECEIVE ART",205,190)

}

function draw() {
  rectMode(CENTER);
  // making my button
  rect(300,200, 4,4);
  // defining perimeters of my very small button
  if(mouseX >296 & mouseX < 304 & mouseY > 196 & mouseY < 204){
  // if my mouse is within the perimeter of my button then the statement is true which allows my second if statement to work
  if(mouseIsPressed){
    //randomizing the rgb colors of my growing ellipse
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);
    stroke(col.r, col.g, col.b);
    // ellipse appears where my mouse is
    ellipse(mouseX,mouseY,circlewidth,circleheight);
    noFill(1);
    // my ellipse's diameter will grow continuosly by 1 pixel
    circleheight = circleheight + 1
    circlewidth = circlewidth + 1

  }
  }
  }

var b=[];
function setup() {
	// define a canvas
	createCanvas(800,400);

	for (var y= 0;  y< height; y+=22) {
		for (var x = 0; x < width; x+=42) {
			b.push ( new Brick(x,y,40,20,0));
		}
	}
}

function draw() {
	background(0);
	for (var i = 0; i < b.length; i++) {
		b[i].draw();
		if (mouseX >= b[i].x && mouseX<=b[i].x+b[i].w &&
			mouseY >= b[i].y && mouseY<=b[i].y+b[i].h){
				b[i].visible=false;
			}


		}
	}

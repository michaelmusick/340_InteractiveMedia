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
	for (var i = 0; i < b.length; i++) {
		if (mouseX >= b[i].xpos && mouseX<=b[i].xpos+b[i].w &&
	 		mouseY >= b[i].ypos && mouseY<=b[i].ypos+b[i].h)
		then ()
		b[i].draw();
	}
}

var sadFace = {
	faceDiam: 300,
	posX: 400,
	posY: 200,
	eyeY: 0,
	eyeX: 0,
	eyeXDiam: 0,
	eyeYDiam: 0,
	mouthX: 0,
	mouthY: 0,
	mouthWidth: 0,
	mouthHeight: 0,
	mouthOffset: 0,

	defineFace: function(){
		this.eyeY = 0 - this.faceDiam * (1/6);
		this.eyeX = this.faceDiam * (1/6);
		this.eyeXDiam = this.faceDiam/10;
		this.eyeYDiam = this.faceDiam/5;
		this.mouthY = this.faceDiam * (1/6);
		this.mouthWidth = this.faceDiam * (2/3);
		this.mouthHeight = this.faceDiam * (0.2);
	},

	drawFace: function(){
		stroke(0);
		// Sad face drawing
		translate(this.posX,this.posY);
		// Face
		ellipse(0,0,this.faceDiam,this.faceDiam);
		ellipse(-this.eyeX,this.eyeY,this.eyeXDiam,this.eyeYDiam);
		ellipse(this.eyeX,this.eyeY,this.eyeXDiam,this.eyeYDiam);
		arc(this.mouthX, this.mouthY, this.mouthWidth, this.mouthHeight, PI + this.mouthOffset, 0 + this.mouthOffset);
		arc(this.mouthX, this.mouthY, this.mouthWidth, this.mouthHeight * (0.5), PI + this.mouthOffset, 0 + this.mouthOffset);



	},

	move: function(){
		this.posX += 1;
	},

	flipMouth: function() {
		this.mouthOffset = (this.mouthOffset + PI) % TWO_PI;
	}
};





function setup() {
	createCanvas(800,400);
	sadFace.defineFace();
}

function draw() {
	background(0);

	sadFace.drawFace();
	sadFace.move();

}

function mousePressed(){
	sadFace.flipMouth();
}

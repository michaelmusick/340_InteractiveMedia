//makin boxes(aka bricks)

// Constructor
function Brick (xpos,ypos,w,h,color){
	this.x=xpos;
	this.y=ypos;
	this.w=w;
	this.h=h;
	this.color=color;
	this.visible=true;
}

Brick.prototype.draw = function () {
	if (this.visible){
		var c = color('hsl('+this.color + ', 100%, 50%)');
		fill(c);
		rect(this.x,this.y,this.w,this.h);

	}
};

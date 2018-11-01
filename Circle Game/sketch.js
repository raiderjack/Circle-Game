//create a variable to hold one ball
let b;
let k;
let balls = [];

function setup() {
  createCanvas(800,800);
  b = new Ball(800,400,20,20,random(2,5),random(2,5));
  k = new Ball(700,300,20,20,random(2,5),random(2.5)); //make a new ball from the Ball class and call it b.
}

for (let i = 0; i < balls.length; i++) {
	 	balls[i].drawBall();
       	    	balls[i].moveBall();
        	balls[i].bounceBall();
	  }

function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    k.drawBall();
    k.moveBall();
    b.bounceBall();
    k.bounceBall();
}

function keyPressed(){
    let  b = new Ball(random(0,800),random(0,800),random(2,5));
    balls.push(b);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,height,width,speedx,speedy){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.height = height;
        this.width = width;
        this.speedx = speedx;
        this.speedy = speedy;
	}

  drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(random(0,256),random(0,256), random(0,256));
		    ellipse(this.x,this.y,this.height,this.width);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x-this.speedx;
		this.y = this.y-this.speedy;
  }
  bounceBall(){
    if (this.x >= 800)   {
        this.speedx = -this.speedx;
    }

    if (this.x <= 5) {
      this.speedx = -this.speedx;
    }
    if (this.y >= 800) {
      this.speedy = -this.speedy;
    }

    if (this.y <= 5) {
      this.speedy = -this.speedy;
    }


  }

}

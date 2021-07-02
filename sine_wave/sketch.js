let pos = []
let r = 200
let num = 30


function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let x = 0; x < num; x++) {
		pos[x] = map(x, 0, num, 0, 2 * TWO_PI); //這句很精華
		
	}
}
let inc = 1

function draw() {
	background(0);
	stroke(255)
	translate(50, height / 2);
	for (let x = 0; x < num; x++) {
		
		circle((width/num)*x, sin(pos[x] + inc) * r,20)
		line((width/num)*x,0,(width/num)*x, sin(pos[x] + inc) * r,5)
		
	}
	inc += 0.1
}
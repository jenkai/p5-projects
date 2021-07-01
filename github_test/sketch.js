function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100)
}

function draw() {
	textAlign(CENTER)
	fill(255)
	textSize(20)
	text('This is first version', width/2, height/2);
	text('This is second version', width/2, height/2+20);
	text('This is third version', width/2, height/2+40);
	text('This is fifth version', width/2, height/2+60);
}

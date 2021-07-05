let slider 
let slider2 
let par

function setup() {
	createCanvas(400, 400);
	// put setup code here
	slider = createSlider(0,100,50)
	slider2 = createSlider(0,100,50)
	par = createP("asdasdasdasd")
}

function draw() {
	background(255)
	ellipse(200,200,slider.value(),slider2.value())
}

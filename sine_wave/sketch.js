function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
}

let r = 100
let inc = 0
let y = 0
let xoff = 0

function draw() {
	//normal

	translate(0, height / 2)
	// y = sin(inc) * r
	// strokeWeight(3)
	// stroke(0)
	// point(inc*10, y)
	// inc += 0.1

	//advanced運用每次的xoff讓y變化使人以為畫布像右

	background(255)
	fill(100)
	noStroke()
	rect(0,0,width,height)
	strokeWeight(2)
	for (let i = 0; i < width-500; i++) {
		y =  sin(i*0.1+xoff)*r
		if (y>0) {
			stroke(255)
			point(i,y)
		} else {
			stroke(0)
			point(i,y)
		}
	}
	strokeWeight(5)
	point(width-500, sin(500*0.1+xoff)*r)
	xoff +=0.1

}
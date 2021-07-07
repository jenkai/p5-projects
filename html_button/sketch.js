let buttons = []

function setup() {
	createCanvas(500, 500);
	background(0);
	for (let i = 0; i < 10; i++) {
		buttons.push(createButton('button')) 
		buttons[i].mousePressed(() => background(random(255)))
	}
} 
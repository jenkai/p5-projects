let buttons = []

function setup() {
	createCanvas(500, 500);
	background(0);
	for (let i = 0; i < 10; i++) {
		buttons.push(createButton('button')) 
		buttons[i].mousePressed(changeBG)
	}
}

function changeBG() {
	let val = random(255);
	background(val);
}
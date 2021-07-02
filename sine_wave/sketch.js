class Wave {
	constructor(amp, per, pha) {
		this.amplitude = amp
		this.period = per
		this.phase = pha
	}
	caculate(x) {
		return (sin(this.phase + TWO_PI * x / this.period) * this.amplitude)
	}
}

let wave = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 10; i++) {
		wave[i] = new Wave(random(100,300), random(200,800), random(TWO_PI))
	}
	
}

function draw() {
	background(0);
	for (let x = 0; x < width; x += 10) {
		for (const iterator of wave) {
			noStroke()
			let y = iterator.caculate(x)
			ellipse(x, y + height / 2, 10)
		}
		
	}
}
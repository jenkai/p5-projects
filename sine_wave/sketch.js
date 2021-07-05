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
	for (let i = 0; i < 5; i++) {
		wave[i] = new Wave(random(20,80), random(300,800), random(TWO_PI))
	}
	noStroke()
	
}

function draw() {
	background(0);
	for (let x = 0; x < width; x += 20) {
		let y =0
		for (const iterator of wave) {
			y += iterator.caculate(x)
		}
		ellipse(x, y + height / 2, 10)
	}
	for (const iterator of wave) {
		iterator.phase += 0.1 
	}
}


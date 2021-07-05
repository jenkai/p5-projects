let sunRise
let sunSet
let today
let lenth = 500

function preload() {
	loadJSON("https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=CWB-F739ECEB-698F-4DA2-BB8E-D5A590A7FEFD&format=JSON&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3&timeFrom=2021-07-05&timeTo=2021-07-06&sort=", analyze)
}


function analyze(data) {
	sunRise = data.records.locations.location[0].time[0].parameter[1].parameterValue
	sunMid = data.records.locations.location[0].time[0].parameter[3].parameterValue
	sunSet = data.records.locations.location[0].time[0].parameter[5].parameterValue
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100)
	lenth = width/2
}


function draw() {
	let x1 = -lenth / 2
	let x2 = -lenth / 4
	let x3 = -lenth / 3
	let x4 = 0
	let y1 = 0
	let y2 = 0
	let y3 = -lenth / 2 - 20
	let y4 = -lenth / 2 - 20
	let pos = []
	today = new Date();
	background(200)
	translate(width / 2, height / 1.5)


	noFill()
	strokeWeight(2)
	stroke(255)
	bezier(x1, y1, x2, y2, x3, y3, x4, y4);


	let steps = 100;
	for (let i = 0; i < steps; i++) {
		let t = i / steps;
		let x = bezierPoint(x1, x2, x3, x4, t);
		let y = bezierPoint(y1, y2, y3, y4, t);
		pos.push([x, y])
	}

	noFill()
	strokeWeight(2)
	stroke(255)
	bezier(-x1, y1, -x2, y2, -x3, y3, -x4, y4);


	for (let i = 0; i < steps; i++) {
		let ta = i / steps;
		let xa = bezierPoint(x4, -x3, -x2, -x1, ta);
		let ya = bezierPoint(y4, y3, y2, y1, ta);
		pos.push([xa, ya])
	}

	let sunRiseTime = parseInt(sunRise.substr(0, 2)) * 60 + parseInt(sunRise.substr(3, 2))
	let sunSetTime = parseInt(sunSet.substr(0, 2)) * 60 + parseInt(sunSet.substr(3, 2))


	let dayLenth = sunSetTime - sunRiseTime
	let currentT = floor(map((abs((today.getHours() * 60 + today.getMinutes()) - sunRiseTime)), 0, dayLenth, 0, steps * 2))


	noStroke()
	fill(250, 250, 0)
	ellipse(pos[currentT][0], pos[currentT][1], 20, 20)

	showText()
}

function showText() {

	fill(255)
	noStroke()
	textAlign(CENTER)
	textSize(30)
	text(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(), 0, 100)



	fill(255)
	textAlign(LEFT);
	textFont('Optima')
	textSize(20)
	text(sunRise, -lenth / 2, 20)


	textAlign(RIGHT);
	text(sunSet, lenth / 2, 20)

}
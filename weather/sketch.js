let sunRise;
let sunSet;
let today;
let lenth = 500;
let bgCol;
let textBW;
let moon;
let date;
let month;
let tomorrow;
let todayapi;
function preload() {
  today = new Date();
  console.log();
  if (today.getDate() <= 10) {
    date = "0" + today.getDate();
    tomorrow = "0" + (today.getDate() + 1);
  } else {
    date = today.getDate();
    tomorrow = today.getDate() + 1;
  }
  if (today.getMonth() <= 10) {
    month = "0" + (today.getMonth() + 1);
  } else {
    month = "" + today.getMonth() + 1;
  }

  todayapi =
    month +
    "-" +
    date +
    "&timeTo=2021-" +
    month +
    "-" +
    tomorrow +
    1 +
    "&sort=";

  moon = loadImage("moon.png");
  loadJSON(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=CWB-F739ECEB-698F-4DA2-BB8E-D5A590A7FEFD&format=JSON&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3&timeFrom=2021-" +
      todayapi,
    analyze
  );
}

function analyze(data) {
  sunRise =
    data.records.locations.location[0].time[0].parameter[1].parameterValue;
  sunMid =
    data.records.locations.location[0].time[0].parameter[3].parameterValue;
  sunSet =
    data.records.locations.location[0].time[0].parameter[5].parameterValue;
}

function setup() {
  var canv = createCanvas(windowWidth * 0.9, windowHeight / 1.3);
  canv.parent("p5pos");
  background(0, 0);
  console.log(width);
  if (width <= 524) {
    lenth = width;
  } else {
    lenth = width / 1.7;
  }
}

function draw() {
  let adjust = 0;
  if (width <= 524) {
    translate(width / 2, height / 1.8);
    adjust = 1.8;
  } else {
    translate(width / 2, height / 1.2);
    adjust = 2;
  }
  let x1 = -lenth / 2;
  let x2 = -lenth / 4;
  let x3 = -lenth / 3;
  let x4 = 0;
  let y1 = 0;
  let y2 = 0;
  let y3 = -lenth / adjust;
  let y4 = -lenth / adjust;
  let pos = [];
  let steps = 100;
  today = new Date();
  clear();

  let sunRiseTime =
    parseInt(sunRise.substr(0, 2)) * 60 + parseInt(sunRise.substr(3, 2));
  let sunSetTime =
    parseInt(sunSet.substr(0, 2)) * 60 + parseInt(sunSet.substr(3, 2));

  let dayLenth = sunSetTime - sunRiseTime;
  let currentT = floor(
    map(
      abs(today.getHours() * 60 + today.getMinutes() - sunRiseTime),
      0,
      dayLenth,
      0,
      steps * 2
    )
  );
  if (currentT < 100) {
    bgCol = map(currentT, 0, 100, 50, 255);
  } else {
    bgCol = map(currentT, 100, 200, 255, 50);
  }
  if (bgCol < 150) {
    textBW = 255;
  } else {
    textBW = 0;
  }
  noFill();
  strokeWeight(2);
  stroke(textBW);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  for (let i = 0; i < steps; i++) {
    let t = i / steps;
    let x = bezierPoint(x1, x2, x3, x4, t);
    let y = bezierPoint(y1, y2, y3, y4, t);
    pos.push([x, y]);
  }

  noFill();
  strokeWeight(2);
  stroke(textBW);
  bezier(-x1, y1, -x2, y2, -x3, y3, -x4, y4);

  for (let i = 0; i < steps; i++) {
    let ta = i / steps;
    let xa = bezierPoint(x4, -x3, -x2, -x1, ta);
    let ya = bezierPoint(y4, y3, y2, y1, ta);
    pos.push([xa, ya]);
  }

  let c = select("body");
  c.style(
    "background-color",
    "rgb(" + str(bgCol) + "," + str(bgCol) + "," + str(bgCol) + ")"
  );
  c.style(
    "color",
    "rgb(" + str(textBW) + "," + str(textBW) + "," + str(textBW) + ")"
  );
  showText();

  fill(255, 226, 0);
  if (today.getHours() * 60 + today.getMinutes() < sunSetTime) {
    stroke(0);
    ellipse(pos[currentT][0], pos[currentT][1], 30, 30);
  } else {
    // image(moon,lenth/2,-lenth/1.4,100,100)
  }
}

let a, b;

function showText() {
  if (width <= 524) {
    a = 20;
    b = 15;
  } else {
    a = 30;
    b = 25;
  }
  fill(textBW);
  textFont("Josefin Sans");
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textStyle();
  textSize(a);

  if (today.getSeconds() < 10 && today.getMinutes() < 10) {
    text(
      today.getHours() + ":0" + today.getMinutes() + ":0" + today.getSeconds(),
      0,
      40
    );
  } else if (today.getSeconds() < 10) {
    text(
      today.getHours() + ":" + today.getMinutes() + ":0" + today.getSeconds(),
      0,
      40
    );
  } else if (today.getMinutes() < 10) {
    text(
      today.getHours() + ":0" + today.getMinutes() + ":" + today.getSeconds(),
      0,
      40
    );
  } else {
    text(
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      0,
      40
    );
  }

  fill(textBW);
  textAlign(LEFT);
  textSize(b);
  text(sunRise, -lenth / 2, 40);

  textAlign(RIGHT);
  text(sunSet, lenth / 2, 40);
}

let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  pixelDensity(1)
  video.size(1000, 500)
  // video.hide();
}
let x  =0
function draw() {
  video.loadPixels()
  copy(video, video.width / 2, 0, 1, video.height, x, 0, 1, video.height / 2)
  x++
}
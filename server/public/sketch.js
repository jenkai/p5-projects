let socket

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	socket = io.connect('http://localhost:3000')
	socket.on('mouse', newDrawing)
	console.log(socket)
	background(100)

}
function newDrawing(data){
	
	ellipse(data.x, data.y, 20, 20)
}


function mouseDragged() {
	ellipse(mouseX, mouseY, 20, 20)
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data)
}



function draw() {
	// put drawing code here,10
}
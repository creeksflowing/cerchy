var socket;



function setup() {
  createCanvas(2000,2000);
  socket= io();
  socket.on('mouse',newdrawing);
}
function newdrawing(data){
  stroke(255);
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(data.x,data.y,50,50 ); 
}

function mouseDragged(){

var data={
  x: mouseX,
  y: mouseY
}

socket.emit('mouse',data);


 //background(712,0,0);
 stroke(0);
 fill(random(0,255));
 ellipse(mouseX,mouseY,50,50 ); 
}

function draw() {
}
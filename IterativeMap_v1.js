

function setup() {
  createCanvas(400, 400);
	noLoop();
}

function draw() {
  background('bisque');
	var interval = 25
		for (let i=0;i<400; i=i+interval) {
			for (var q=0;q<400;q=q+interval){
				drawRandomLine(i,q,interval);
		}
	}
}
function drawRandomLine(i,q, interval){
  strokeWeight(3);
  if (random()>0.5){
  line(i,q,i+interval,q+interval)
  }
  else{
  line(i+interval, q, i, q+interval)
  }
}

//uses the p5 library and Processing to create simple generative mazes.
//not guaranteed to be solvable

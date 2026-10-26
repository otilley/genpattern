function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
  stroke("red");

}

function draw() {
  background("black");

 
  orbitControl();

 
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
  
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

    
       rotateZ(zAngle + frameCount * 0.4);
      rotateX(xAngle + frameCount * 0.2);

     translate(0, 300, 0); 

push();
translate(-1000, 0, 0);

box(35);
pop();
rotateY(frameCount * 0.3);
push();
sphere(18);

pop();

     if (xAngle % 60 === 0) {
  sphere(20);
} else {
  box(30);
}
      pop();
    }
  }
}


// reference: https://p5js.org/examples/3D-Orbit-Control/
let sphereColorPicker;
let boxColorPicker;
let backgroundColorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();
  sphereColorPicker = createColorPicker("#ff1100");
  sphereColorPicker.attribute("aria-label", "Sphere color");
  createSpan(" Sphere color ");
  boxColorPicker = createColorPicker("#e1ff00");
  boxColorPicker.attribute("aria-label", "Box color");
  createSpan(" Box color ");
  backgroundColorPicker = createColorPicker("#000000");
  backgroundColorPicker.attribute("aria-label", "Background color");
  createSpan(" Background color");
}

function draw() {
  background(backgroundColorPicker.value());

 
  orbitControl();

 
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
  
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

    
       rotateZ(zAngle + frameCount * 0.4);
      rotateX(xAngle + frameCount * 0.2);

     translate(0, 300, 0); 

push();
translate(-1000, 0, 0);
stroke(boxColorPicker.value());
box(35);
pop();
rotateY(frameCount * 0.3);
push();
stroke(sphereColorPicker.value());
sphere(18);

pop();

     if (xAngle % 60 === 0) {
  stroke(sphereColorPicker.value());
  sphere(20);
} else {
  stroke(boxColorPicker.value());
  box(30);
}
      pop();
    }
  }
}


// reference: https://p5js.org/examples/3D-Orbit-Control/
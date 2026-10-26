let circleNumSlider
let circleGapSlider
let circleColorPicker
let fromColorPicker
let toColorPicker
let lines1NumSlider
let lines1LenSlider
let lines1DistSlider
let lines1ColorPicker
let lines1SpinSlider
let lines1StrokeWeightSlider
let showLines1Checkbox
let lines2NumSlider
let lines2LenSlider
let lines2DistSlider
let lines2ColorPicker
let lines2SpinSlider
let lines2StrokeWeightSlider
let showLines2Checkbox




function setup() {
    createCanvas(1000, 1000);
    noFill();
    strokeWeight(2);
    circleNumSlider = createSlider(1, 100, 20,);
    circleGapSlider = createSlider(5, 100, 5,);
    // circleColorPicker = createColorPicker('#ff0000');
    fromColorPicker = createColorPicker('rgb(255, 0, 0)');
    toColorPicker = createColorPicker('#000000');
    lines1NumSlider = createSlider(1, 30, 3);
    lines1LenSlider = createSlider(10, 1000, 100);
    lines1DistSlider = createSlider(10, 500, 100);
    lines1ColorPicker = createColorPicker('#ff9100');
    lines1StrokeWeightSlider = createSlider(1, 10, 2);
    lines1SpinSlider = createSlider(0, 60, 15);
    showLines1Checkbox = createCheckbox('Show Lines 1', true);

    lines2NumSlider = createSlider(1, 30, 3);
    lines2LenSlider = createSlider(10, 1000, 100);
    lines2DistSlider = createSlider(10, 500, 100);
    lines2ColorPicker = createColorPicker('#ff0000');
    lines2StrokeWeightSlider = createSlider(1, 10, 2);
    lines2SpinSlider = createSlider(0, 60, 15);
    showLines2Checkbox = createCheckbox('Show Lines 2', true);
}

function draw() {
    background(0);
    translate (width/2, height/2);
   
    drawCircles();
    if (showLines1Checkbox.checked()) {
        drawLines1();
    }
    if (showLines2Checkbox.checked()) {
        drawLines2();
    }
    // let num = lines1NumSlider.value();
    // let len = lines1LenSlider.value();
    // let dist = lines1DistSlider.value();
    // push();
    //  stroke(lines1ColorPicker.value());
    //  for (let i = 0; i < num; i++) {
    //     line(-1 * len / 2, 0, 1 * len / 2, 0);
    //  }
    //  translate(lines1DistSlider.value(), 0);
    //  rotate(i/num * TWO_PI);
    //   line(-len/2,0,len/2,0);
    // pop();
    
}


function drawLines1() {
  let num = lines1NumSlider.value()  
  let len = lines1LenSlider.value() 
  let c = color(lines1ColorPicker.value())
  for(let i = 0; i < num; i++) {
    push()
    strokeWeight(lines1StrokeWeightSlider.value())
    stroke(c) 
    rotate(i/num * TWO_PI)
    translate(lines1DistSlider.value() ,0) 
    rotate(radians(lines1SpinSlider.value())) 
    line(-len/2,0,len/2,0)
    
    pop()
  }
  
}

function drawLines2() {
  let num = lines2NumSlider.value()  
  let len = lines2LenSlider.value() 
  let c = color(lines2ColorPicker.value())
  for(let i = 0; i < num; i++) {
    push()
    strokeWeight(lines2StrokeWeightSlider.value())
    stroke(c) 
    scale(-1, 1)
    rotate(i/num * TWO_PI)
    translate(lines2DistSlider.value() ,0) 
    rotate(radians(lines2SpinSlider.value())) 
    line(-len/2,0,len/2,0)
    
    pop()
  }
  
}

function drawCircles() {
     let num = circleNumSlider.value();
    let gap = circleGapSlider.value();
    let from = color(fromColorPicker.value());
    let to = color(toColorPicker.value());

    for (let i = 0; i < num; i++) {
        // circle(0 + i * 20, 0, 200);
     
         stroke(lerpColor(from, to, i / num));
         circle(0, 0,(i +1) * gap, 100);
        // rotate(frameCount * 0.01);
    }
}
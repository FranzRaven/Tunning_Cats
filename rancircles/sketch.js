let w = innerWidth;
let h = innerHeight;

function setup() {
  createCanvas(w, h);
}

function draw() {
  //background(2);
  
  fill(random(0,255),random(0,255),random(0,255));
  ellipse(random(0,w), random(0,h),random(0, w/3), random(0, h/3));
}
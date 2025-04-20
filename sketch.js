let els = 30;
let s = 50;
let prevY = [];   // Store previous Y positions
let colors = [];  // Store each circle's color

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  for (let i = 0; i < els; i++) {
    colors[i] = randomColor();
    prevY[i] = 0; // Start with dummy value
  }
}

function draw() {
  background(210, 0, 100);

  let elw = width / els;
  let mag = height * 0.3;

  push();
  translate(elw / 2, height / 2);

  for (let i = 0; i < els; i++) {
    let wave = map(Math.tan(radians(frameCount + i * 50)), -1, 1, -mag / 2, mag / 2);

    if ((prevY[i] < -height / 2 || prevY[i] > height / 2) &&
        (wave >= -height / 2 && wave <= height / 2)) {
      colors[i] = randomColor();
    }

    prevY[i] = wave;

    fill(colors[i]);
    push();
    translate(i * elw, wave);
    ellipse(0, 0, s, s);
    pop();
  }

  pop();
}

function randomColor() {
  let h = random(360);
  let s = random(80, 100);
  let b = random(90, 100);
  return color(h, s, b);
}

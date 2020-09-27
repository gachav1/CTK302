let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(27);
}

function draw() {
  switch (state) {
    case 0:
      background('purple');
      text("I normally knock on the fridge\nbefore I open it...", 250, 250);
      break;

    case 1:
      background('orange');
      text("Just in case there's a salad dressing.", 250, 250);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}

let x = 0 ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect(x, 100, 50, 25);
  x = x + 1;
  if (x > width) x = 0;

  rect(x1, 100, 50, 25);
  x1 = x1 + 1;
  if (x1 > width) x1 = 0;

  rect(x2, 100, 50, 25);
  x2 = x2 + 1;
  if (x2 > width) x2 = 0;

}

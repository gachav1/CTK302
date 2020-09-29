var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //change to text
  //rect(x, 250, 50, 50);
  textSize(35);
  text("HELLO", x, 250);
  x += 5;

  if (x > width) {
// try -500
    x = 0;
  }

}

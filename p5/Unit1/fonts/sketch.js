var f ;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/bat.ttf")
  textAlign(CENTER);

}

function draw() {
  background(100) ;

  textFont(f);
  textSize(600);

  text("hello", width/2, height/2);

}

var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/bat.ttf");
  f1 = loadFont("assets/blade.ttf");
  textAlign(CENTER);

}

function draw() {
  background(100) ;

  fill('white');
  textFont(f);
  textSize(60);
  text("hello", width/2, height/2);

  fill('red');
  textFont(f1);
  textSize(30);
  text("hello", width/2, height/2 + 80);

}

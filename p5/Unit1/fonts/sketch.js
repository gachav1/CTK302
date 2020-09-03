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
  textSize(20);
  text("when life gives you lemons, don't make lemonade!", width/2, height/2);

  fill('yellow');
  textFont(f1);
  textSize(30);
  text("Make life take the lemons back!", width/2, height/2 + 80);

}

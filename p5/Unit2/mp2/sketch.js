let ipod;
let state = 0;
let song1, song2, song3;

let timer = 0;

function preload() {
  ipod = loadImage('assets/ipod.jpg');
  red = loadImage('assets/red.jpg')
  beast = loadImage('assets/beast.jpg')
  torches = loadImage('assets/torches.jpg')

  song1 = loadSound("assets/snow.mp3");
  song2 = loadSound("assets/sabatage.mp3");
  song3 = loadSound("assets/pumped.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}


function setup() {
textFont(20);
  createCanvas(500, 500);
  rectMode(CENTER);
  image(ipod, 10, 10);
}

function draw() {
  background(100);

  fill('black');


  switch (state) {

    case 0:
      text("1", 100, 100);
      song1.play();
      state = 1;

      break;

    case 1:
      image(ipod, 10, 10);
      image(red, 60, 75, 100, 100);
      text('1/3', 50, 65);
      text("Snow", 163, 100);
      text('Red Hot Chili Peppers', 163, 125);
      text('Stadium Arcadium', 163, 150);


      break;

    case 2:
      image(ipod, 10, 10);
      song2.play();
      state = 3;

      break;

    case 3:
      image(ipod, 10, 10);
      image(beast, 60, 75, 100, 100);

      text('2/3', 50, 65);

      text("Sabatoge", 175, 100);
      text('Beastie Boys', 175, 125);
      text('Stadium Arcadium', 175, 150);

      break;

    case 4:
      image(ipod, 10, 10);
      song3.play();
      state = 5;

      break;

    case 5:
      image(ipod, 10, 10);
      image(torches, 60, 75, 100, 100);
      text('3/3', 50, 65);
      text("Pumped up Kids", 175, 100);
      text('Foster the People', 175, 125);
      text('Torches', 175, 150);

      break;



  }

  timer = timer + 1;
  if (timer > 10 * 60) {
    timer = 0 ;
    state++;
    if (state > 5) state = 0;

    song1.pause();
    song2.pause();
    song3.pause();
  }

}



function mouseReleased() {
  state++
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();

}

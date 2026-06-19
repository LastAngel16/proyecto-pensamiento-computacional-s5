// Avance 12/6/2026

//testing de reproductor de musica

let mySound;

function preload() {
  soundFormats('mp3');
  rooster = loadSound('NetDriver.mp3');
}

function setup() {
  createCanvas(300, 300);
  background(220);
}

function mousePressed() {
  rooster.play();
}

// Avcance 19/6/2026

let huevo
let posX = 0
let dino
let lizard
let croc
let lab1
let lab2
let lab3
//let crack
function preload() {
  soundFormats('mp3');
  rooster = loadSound('NetDriver.mp3');
huevo = loadImage ("./egg.gif")
dino = loadImage("/dino.gif")
lizard = loadImage("/lizard.gif")
  croc = loadImage ("/croc.gif")
  lab1 = loadImage ("/tube1.png")
  //lab2 = loadImage ("/lab2.png")  
    lab2 = loadImage ("/lab2v3.png")
  lab3 = loadImage ("/lab3.png")
 //crack = loadImage() 
}

function setup() {
  createCanvas(700, 400);


}



function draw() {
  background(lab2);
image(dino, width/2, height/2,100,100)
// Mantener croc a 200x100
  image(croc, width/5, height/2,200,100)
image(lizard, width/2, height/3,100,100)
image(huevo, 200, 300,100,100)

}

function mousePressed() {
  rooster.play();
}

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

// Avance 25/6/2026

let huevo
let posX 
let dino
let lizard
let croc
let lab1
let lab2
let lab3
let dirX = 1
let speed =3 //Variable para moverse
let anchoDino = 100
let altoDino = 100
//let crack

let limiteIzquierdo = 150; 
let limiteDerecho = 550;
function preload() {
  soundFormats('mp3');
  rooster = loadSound('NetDriver.mp3');
huevo = loadImage ("./egg.gif")
dino = loadImage("/dino.gif")
lizard = loadImage("/lizard.gif")
  croc = loadImage ("/croc.gif")
  crack = loadImage ("/crack.png")
  lab1 = loadImage ("/tube1.png")
  //lab2 = loadImage ("/lab2.png")  
    lab2 = loadImage ("/lab2v3.png")
  lab3 = loadImage ("/lab3.png")
 //crack = loadImage() 

}

function setup() {
  createCanvas(700, 400);

 posX = (limiteIzquierdo + limiteDerecho) / 2 - (anchoDino / 2);
  //Movimiento del personaje

}



function draw() {
  background(lab1);
 
  posX += speed * dirX;
  if (posX > limiteDerecho - anchoDino || posX < limiteIzquierdo) {
    dirX = dirX * -1;
  }

push(); 
   //Define la posicion del objeto 
    translate(posX + anchoDino / 2, (height / 2) + (altoDino / 2));
    
    // Si dirX es 1 se queda igual, si es -1 se invierte horizontalmente
    scale(dirX, 1);
    
   //Aqui se define el 0,0 de la imagen
    image(dino, -anchoDino / 2, -altoDino / 2 - 40, anchoDino, altoDino);
  pop();
  

// Mantener croc a 200x100
//  image(croc, width/5, height/2,200,100)
//image(lizard, width/2, height/3,100,100)
//image(huevo, 300, height/2,100,100)

}

function mousePressed() {
  rooster.play();
}

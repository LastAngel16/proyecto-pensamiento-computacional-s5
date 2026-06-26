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

// Avance 25/6/2026 mañana- tarde / antes de clases

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

//Avance 25 junio 2026 tarde-noche/ despues de clases

let huevo;
let posX; 
let dino;
let lizard;
let croc;
let crack; 
let rooster; 
//La verdad me olvide de quitar rooster para la musica, ya que rooster es el nombre original de la funcion que use de base para la musica
let lab1;
let lab2;
let lab3;
let dirX = 1;
let speed = 3; //Velocidad de el dino
let anchoDino = 100;
let altoDino = 100;

// Aqui la funcion de definir actos para las 3 imagenes de fondo
const E = { LAB1: 0, LAB2: 1, LAB3: 2 };
const NOMBRE = ['LABORATORIO 1', 'LABORATORIO 2', 'LABORATORIO 3'];
let estado;

//La verdad no me esperaba que tanta cosa se tuviera que cargar aqui dentro en preload
function preload() {
  soundFormats('mp3');
  rooster = loadSound('NetDriver.mp3'); //Musica extra por añadir ambiente
  huevo = loadImage("./egg.gif");
  dino = loadImage("/dino.gif");
  lizard = loadImage("/lizard.gif");
  croc = loadImage("/croc.gif");
  crack = loadImage("/crack.png");
  lab1 = loadImage("/lab1v3.png");  
  lab2 = loadImage("/lab2v3.png");
  lab3 = loadImage("/lab3.png");

//Ninguna de las imagenes fueron hechos con IA, todas son hechas por mi 100% originales en pixel art
}

function setup() {
  createCanvas(700, 400);
  
  // Inicio acto 1 (LAB1)
  estado = E.LAB1;
  
  // posicion inicial como el standar
  posX = (150 + 550) / 2 - (anchoDino / 2);
  
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Solucion porque pasa que los png dejan el rastro de los anteriores, para cambiarlo use un fondo negro para poder mantener el aspecto
  background(0); 


  // switch de actos para los fondos lab
  switch (estado) {
    case E.LAB1:
      dibujar_lab1();
      break;  
      
    case E.LAB2:
      dibujar_lab2();
      break;  
      
    case E.LAB3:
      dibujar_lab3();
      break;  
  }
  
  // Aqui se define el movimiento del dino con moverYeditardino, este sirve para ajustar 3 variables: ajuste Y, limiteizquierdo y limitedrecho
  moverYEditarDino();

  // Para hacer el texto que representa al estado (aun viedo si es necesario)
  fill(255); 
  text('Estado actual: ' + NOMBRE[estado], width / 2, 30);
}

// Aqui va el cambio de los fondos por actos

function dibujar_lab1() {
  background(lab1);
  fill(255);
  text('Haz click para ir al LAB 2', width / 2, height - 30);
}

function dibujar_lab2() {
  background(lab2);
  fill(255);
  text('Haz Scroll hacia ARRIBA para ir al LAB 3', width / 2, height - 30);
}

function dibujar_lab3() {
  background(lab3);
  fill(255);
  text('Presiona LEFT_ARROW + SHIFT para reiniciar', width / 2, height - 30);
}
//Aun la funcion no se soluciona porque necesita de un fondo negro para que no se note pero ya vere como arreglarlo



// Aqui los parametros del dino dentro de la funcion 
function moverYEditarDino() {
  let ajusteY = -40;       
  let limIzquierdo = 150;  
  let limDerecho = 550;    

  if (estado === E.LAB1) {
    ajusteY = -40; 
    limIzquierdo = 150;
    limDerecho = 550;
  } 
  else if (estado === E.LAB2) {
    ajusteY = -40;        
    limIzquierdo = 150;   
    limDerecho = 550;     
  } 
  else if (estado === E.LAB3) {
    ajusteY = -40;        
    limIzquierdo = 150;   
    limDerecho = 550;
  }

  posX += speed * dirX;
  if (posX > limDerecho - anchoDino || posX < limIzquierdo) {
    dirX = dirX * -1;
  }
//funcion esta basado en mi experiencia con entrega 06, aunque fue complicado ya que como p5js corre cada segundo al no ser un video, cada fotograma que se movia seguia en su lugar lo cual hacia un efecto de rastro 

  //La verdad el efecto de rastro podria usarse para hacer como la entrada de batalla de FFVII o el rastro que deja commander video en bit trip runner..... lo tendre en mente
  push(); 
    translate(posX + anchoDino / 2, (height / 2) + (altoDino / 2));
//Scale sirve para aportar a que la imagen se de vuelta al chocar contra algo
    scale(dirX, 1);
    image(dino, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
  pop();
}

// aqui se ejecuta el cambio al hacer las acciones pre definidas por los Let

function mousePressed() {
  if (rooster.isLoaded()) { 
    rooster.play();
  }
  if (estado == E.LAB1) {
    estado = E.LAB2;
  }
}

function mouseWheel(event) {
  if (estado == E.LAB2 && event.delta < 0) {
    estado = E.LAB3;
  }
  return false; 
}
//Aun estoy viendo lo de la funcion para ver si funciona bien lo de la R
function keyPressed() {
  if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) { 
    estado = E.LAB1;
  } 
}

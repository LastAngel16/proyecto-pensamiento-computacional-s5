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
let speed = 3; 

let anchoDino = 100; 
let altoDino = 100;

// Aqui la funcion de definir actos 1, 2 y 3 desde antes
const E = { LAB1: 0, LAB2: 1, LAB3: 2 };
const NOMBRE = ['LABORATORIO 1', 'LABORATORIO 2', 'LABORATORIO 3'];
let estado;

// Aqui se podria decir que es el Acto 0 para poder funcionar
//al cambiar el valor a 1 se salta la fase correspondiente
let faseDino = 0;            
let contadorNacimiento = 0;  

//La verdad no me esperaba que tanta cosa se tuviera que cargar aqui dentro en preload
function preload() {
  soundFormats('mp3');
  rooster = loadSound('NetDriver.mp3'); 
  huevo = loadImage("./egg.gif");
  dino = loadImage("./dino.gif");
  lizard = loadImage("./lizard.gif");
  croc = loadImage("./croc.gif");
  crack = loadImage("./crackv2.png");
  //Solo los archivos Lab y crack tuvieron que ser cambiados por inconveniencias de tamaños y/o tranparencia, no todos estan incluidos porque hize multiples copias en el proceso para no perder mis anotaciones ya que al usar Ia en la cosa borraba toda mi anotacion
  lab1 = loadImage("./lab1v3.png");  
  lab2 = loadImage("./lab2v3.png");
  lab3 = loadImage("./lab3.png");
//Ninguna de las imagenes fueron hechos con IA, todas son hechas por mi 100% originales en pixel art
}

//El canvas no fue puesto para que se alterara con el tamaño de preview ya que al final la funcion no se adapta al tamaño de la ventana, podria hacerse pero seria demasiado

function setup() {
  createCanvas(700, 400);
  
  //Antes la musica se ubicaba hasta el final pero ahora esta aqui para poder funcionar desde el principio
  if (rooster.isLoaded()) {
    rooster.loop(); // loop para que asi se pueda repetir todo el tiempo sim problemas
  }
  //Inicio Acto 1 con lab 1, egg, crack y dino
  estado = E.LAB1;
  posX = (150 + 550) / 2 - (anchoDino / 2);
  
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); 
// Solucion porque pasa que los png dejan el rastro de los anteriores, para cambiarlo use un fondo negro para poder mantener el aspecto
  
  
   // switch de actos para los fondos lab, aunque las imagenes por alguna razon no estan 100% alineadas por un error o algo, la verdad a la proxima las hago todas al mismo tiempo
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
  // Aqui se define el movimiento del dino con moverYeditardino, este sirve para ajustar 3 variables: ajuste Y, limiteizquierdo y limitedrecho, que tambien afecta a los demas textos, 
  moverYEditarDino();
//aqui se ve como se cambia el
  if (estado !== E.LAB1 || faseDino === 2) {
    fill(255); 
    //Originalmente decia cual lab estabas pero lo cambie para que asi pudiera decir un numero haciendo parecer el paso del tiempo
    text('Estado actual: ' + [estado] +'000 ' , width / 2, 30);
  }
}
//Usando de inspiracion la solemne anterior puse texto para incentivar el cambio
function dibujar_lab1() {
  background(lab1);
  if (faseDino === 2) {
    fill(255);
    text('Haz click para avanzar', width / 2, height - 30);
  }
}

function dibujar_lab2() {
  background(lab2);
  fill(255);
  text('Haz mouse wheel up para avanzar aun mas', width / 2, height - 30);
}

function dibujar_lab3() {
  background(lab3);
  fill(255);
  text('Presiona presiona left + arrow para regresar en el tiempo', width / 2, height - 30);
}
//Aqui esta lo que define los limites y el cambio junto al reset del dino, si se cambia causa o que se pnga en diferente posicion o que se estire
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

  if (estado === E.LAB1 && faseDino < 2) {
    contadorNacimiento++;
    if (faseDino === 0 && contadorNacimiento > 90) {
      faseDino = 1;
      contadorNacimiento = 0; 
    }
    else if (faseDino === 1 && contadorNacimiento > 90) {
      faseDino = 2;
    }
  }

  if (estado !== E.LAB1 || faseDino === 2) {
    posX += speed * dirX;
    if (posX > limDerecho - anchoDino || posX < limIzquierdo) {
      dirX = dirX * -1;
    }
  }
//Casi todos los gif tienen similar programacion al ser todos del mismo tamaño de 100x100
  push(); 
    translate(posX + anchoDino / 2, (height / 2) + (altoDino / 2));
    scale(dirX, 1);
    
    if (estado === E.LAB1) {
      if (faseDino === 0) {
        image(huevo, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
      } 
      else if (faseDino === 1) {
        image(crack, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
      } 
      else {
        image(dino, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
      }
    } 
    else if (estado === E.LAB2) {
      image(lizard, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
    } 
    
    //Solo croc tiene valores independientes ya que es de un tamaño diferente a los de los anteriores
    else if (estado === E.LAB3) {
      let anchoVisualCroc = 200; 
      image(croc, -anchoVisualCroc / 2, -altoDino / 2 + ajusteY, anchoVisualCroc, altoDino);
    }
  pop();
}

//Aqui esta el cambio de lab 1 a lab 2, el mayor cambio fue que ya no esta el reproducir musica al click

function mousePressed() {
 //Solo quedo el cambio de estado al final
  if (estado == E.LAB1 && faseDino === 2) {
    estado = E.LAB2;
  }
}

function mouseWheel(event) {
  if (estado == E.LAB2 && event.delta < 0) {
    estado = E.LAB3;
  }
  return false; 
}
//al ya no depender de un key is down la musica no se vuelve molestia, o no mucha
function keyPressed() {
  
  if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) { 
    estado = E.LAB1;
    faseDino = 0;               
    contadorNacimiento = 0;     
    posX = (150 + 550) / 2 - (anchoDino / 2); 
    //funcion esta basado en mi experiencia con entrega 06, aunque fue complicado ya que como p5js corre cada segundo al no ser un video, cada fotograma que se movia seguia en su lugar lo cual hacia un efecto de rastro 

  //La verdad el efecto de rastro podria usarse para hacer como la entrada de batalla de FFVII o el rastro que deja commander video en bit trip runner..... lo tendre en mente para proyectos personales
  } 
}
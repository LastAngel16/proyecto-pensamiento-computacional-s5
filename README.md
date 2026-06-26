# EXAMEN

## Link de web pública (github pages)

<[https://link.com>](https://github.com/LastAngel16/proyecto-pensamiento-computacional-s5/tree/main)>

## Título del proyecto

### Jurassic Evolution

### Referencia de origen / bibliografía

Jurassic park "Si algo nos a enseñado la historia de la evolucion no puede contenerse, la vida se libera y se extiende a nuevos territorios, peligrosa y dolorosamente la vida se abre camino

### Imagen de referencia de proyecto



### Integrantes

Roberto Silva E. [usuarioGithub]([https://github.com/usuarioGithub](https://github.com/LastAngel16))


### Enlace de p5.js 

<[https://editor.p5js.org>](https://editor.p5js.org/LastSamuel5/sketches/kjPJQdCHZ)>

### Relato inicial

Cuenta acá el relato de origen de tu proyecto. Ej, Alicia está con un conejo, luego va a un viaje psicodélico

### Storyboard

proyecto-pensamiento-computacional-s5
/Boceto Actos.png

### Estados

Son 3 estados descritos en el codigo como Lab1, lab2 y lab3 junto a sus imagenes correspondientes

#### Estado 1

En el primer estado, el huevo aparece en un tubo para abrirse mostrando un dinosaurio adentro
```js
//Estando en laboratorio 1 si el dino no se pone en fase 2, no termina de nacer
if (estado === E.LAB1 && faseDino < 2) {
  contadorNacimiento++; 

  // Si es egg/ fase 0, con el tiempo pasa a Crack/fase2 
  if (faseDino === 0 && contadorNacimiento > 90) {
    faseDino = 1;
    contadorNacimiento = 0; // Se reinicia el tiempo para Fase 2
  }
  // Si se volvio Crack/fase 1, el tiempo pasa mucho menos que egg/fase 1 hasta que se vuelve dino/fase 2
  else if (faseDino === 1 && contadorNacimiento > 90) {
    faseDino = 2;
  }
}
//ese codigo sirve para temporizar las fases mientas que este sirve para cargar las imagenes 

if (estado === E.LAB1) {
  if (faseDino === 0) {
    // Se ejecuta al principio loadImage egg
    image(huevo, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
  } 
  else if (faseDino === 1) {
    // Se ejecuta tras los primeros 90 frames loadimagecrack
    image(crack, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
  } 
  else {
    // Y al final se ejecuta  load image dino text click para avanzar 
    image(dino, -anchoDino / 2, -altoDino / 2 + ajusteY, anchoDino, altoDino);
  }
}
```


#### Estado 2 

al hacer click, el dinosaurio evoluciona a un lagarto y se rompe el tubo, cambiando el aspecto

```js
//Aqui esta el cambio de lab 1 a lab 2, el mayor cambio fue que ya no esta el reproducir musica al click pero primero se establece
function dibujar_lab2() {
  background(lab2);
  fill(255);
  text('Haz mouse wheel up para avanzar aun mas', width / 2, height - 30);
}
//Al ejecutarse esta funcion, dino pasara a lizard pero al estar puestos como igual no se tarda mucho en cargar
function mousePressed() {

  if (estado == E.LAB1 && faseDino === 2) {
    estado = E.LAB2;
  }
}

```


#### Estado 3

La hacer mouse wheel up, el lab2 cambiara a Lab3 y lizard cambiara a Croc


```js
//Al igual que lab 2 se pre carga
function dibujar_lab3() {
  background(lab3);
  fill(255);
  text('Presiona presiona left + arrow para regresar en el tiempo', width / 2, height - 30);
}
//para luego ejecutarse en function
function mouseWheel(event) {
  if (estado == E.LAB2 && event.delta < 0) {
    estado = E.LAB3;
  }
  return false; 
}
//y por ultimo la funcion de reseteo para poder iniciar desde el principio
function keyPressed() {
  
  if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) { 
    estado = E.LAB1;
    faseDino = 0;               
    contadorNacimiento = 0;     
    posX = (150 + 550) / 2 - (anchoDino / 2); 
      }
    }
```

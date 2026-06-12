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

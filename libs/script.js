console.log('I WORK!!!');
var A1 = document.getElementById("age");
var birthday = new Date("December 15, 1990");
var today = new Date();
A1.innerHTML = Math.floor((today - birthday) / 31536000000);

let t1 = new TimelineMax();
t1 


  .from(('.DHeader'), 2, {
  y: -100})
  .from(('.main-wrapper'), 2, {
      y: -300
    },'-=2')

  .from(('.Idname'), 2, {
      y: -300
    },'-=2')

    .from(('.img-rad'), 2, {
      x: -900
    },'-=0')

    .from(('.block1'), 2, {
      y: 1000
    },'-=2');


block1       
console.log('To be contined!');    
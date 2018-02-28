import "gsap";

let A1 = document.getElementById("age");
let birthday = new Date("December 15, 1990");
var today = new Date();

A1.innerHTML = Math.floor((today - birthday) / 31536000000);

let t1 = new TimelineMax();
t1
  .from(".DHeader", 2, {y: -100})
  .from(".main-wrapper",2,{y: -300},"-=2")
  .from(".Idname",2,{y: -300},"-=2")
  .from(".img-rad",2,{x: -900},"-=0")
  .from(".block1",2,{y: 1000},"-=2");

import './app'
import '../sass/main.sass'
// import '../sass/media.css'
import "gsap";


let t1 = new TimelineMax();
t1
  // .from(".DHeader", 2, {y: -100})
  .from(".main-wrapper",2,{y: -300},"-=2")
  .from(".Idname",2,{y: -300},"-=2")
  .from(".img-rad",2,{x: -900},"-=0")
  // .from(".div-txt",2,{y: 1000},"-=2")
  // .to(bg2.scale, 1.5, { x: "+=0.018", y: "+=0.018" }, 1);
  console.log('window',window);
  console.log("location", window.location);
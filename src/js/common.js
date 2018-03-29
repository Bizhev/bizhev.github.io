import './app'
import '../sass/main.sass'
// import '../sass/media.css'
import "gsap";


let t1 = new TimelineMax();
t1
  // .from(".DHeader", 2, {y: -100})
  // .from(".text-content",2,{y: -300},"-=2")
  .from(".ava-div",2,{y: -500},"-=0")
  .from(".Idname",2.5,{y: -300},"-=1.7")
  .from(".contact-list",4,{y: 900},"-=2")
  .from(".social-list",4,{y: 1200},"-=4")

  // .from(".div-txt",2,{y: 1000},"-=2")
  // .to(bg2.scale, 1.5, { x: "+=0.018", y: "+=0.018" }, 1);
  console.log('window',window);
  console.log("location", window.location);
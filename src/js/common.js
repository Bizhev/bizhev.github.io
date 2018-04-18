import './app'
import '../sass/main.sass'
// import '../sass/media.css'
import "gsap";


let t1 = new TimelineMax();
t1
  // .from(".DHeader", 2, {y: -100})
  // .from(".text-content",2,{y: -300},"-=2")
  .from(".ava-div",4,{y: -350},"-=-2")
  .from(".Idname",4,{y: -150},"-=4")
  .from(".contact-list",2,{y: 200},"-=2")
  .from(".social-list",2,{y: 200},"-=3")

  // .from(".div-txt",2,{y: 1000},"-=2")
  // .to(bg2.scale, 1.5, { x: "+=0.018", y: "+=0.018" }, 1);
  console.log('window',window);
  console.log("location", window.location);
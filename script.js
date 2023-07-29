
gsap.registerPlugin(ScrollTrigger);

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
 
  

function navScroll() {
    gsap.to("#nav", {
      scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 40%",
       
        scrub: 1,
      },
      //    y:100,
      backgroundColor: "#111",
      borderBottom: "2px solid #bdb3b1",
      ease: Expo.easeInout,
    })
      
}
  
navScroll();

  

var tl1 = gsap.timeline();

tl1

.to("#fs img",{
  delay:2,
    opacity:0,
    ease:Expo.easeInout,
    duration:1
})

.to("#fs",{
  delay:-1,
  height:"0vh",
  ease:Expo.easeInout,
  duration:1
})


  
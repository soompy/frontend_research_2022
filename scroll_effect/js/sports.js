var $sections = document.querySelectorAll(".horizon_box");
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section3",
        pin: true,
        scrub: 0.3,
        start: "top top",
        end: "+=300%",
    }
});
tl.from($sections, { x: '300%', autoAlpha: 0, duration: 2, ease: "none", stagger: 3 })
    .to($sections, { duration: 3 });






gsap.registerPlugin(ScrollTrigger);
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.inner-cat',
        start: 'top top',
        end: 'bottom center',
        pin: true,
        // markers: true,
        pinSpacing: false,
        scrub: true,
    }
})
tl2.to('.imgBox', {
    scale: 1
})

.to('img', {
    scale: 0.5,        
    translateX: -300,
}, 0)
.to(['.imgBox', 'img'], {
    // opacity: 0        
})


const text = document.querySelector('.textBox');

gsap.set(text, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    overwrite: 'auto',
});

ScrollTrigger.create({
    trigger: '.text-target',
    start: 'top 60%',
    end: 'bottom 30%',
    markers: true,
    onEnter: () => gsap.to(text, {
      y: 0,
      opacity: 0,
      stagger: 0.2,
    }),
    onLeave: () => gsap.to(text, {
      y: -50,
      opacity: 1,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to(text, {
      y: 0,
      opacity: 0,
      stagger: -0.2,
    }),
    onLeaveBack: () => gsap.to(text, {
      y: 50,
      opacity: 1,
      stagger: -0.2,
    }),
  });
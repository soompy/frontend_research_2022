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
// var $toptextBox = document.querySelectorAll(".textBox");
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.digitalTransformation',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        // markers: true,
        pinSpacing: false,
        scrub: true,
    }
})
tl2.to('.circle', {
    scale: 1
})

.to('img', {
    scale: 0.5,        
    translateX: -300,
}, 0)
.to(['.circle', 'img'], {
    opacity: 0        
})


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.digitalTransformation',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        // markers: true,
        pinSpacing: false,
        scrub: true,
    }
})
tl3.to('.textBox', {
    display: none
})

.to('img', {
    display: block
}, 0)
.to(['.circle', 'img'], {
    display: none    
})


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
        trigger: '.digitalTransformation',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        markers: true,
        pinSpacing: false,
        scrub: true,
    }
})
tl2.to('.circle', {
    scale: 1
})
    .to('img', {
        scale: 0.5,        
        left: -50,
    }, 0)
    .to(['.circle', 'img'], {
        opacity: 0
        // transform: translateY(-50%)
    })
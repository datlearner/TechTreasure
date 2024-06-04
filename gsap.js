gsap.registerPlugin(ScrollTrigger);

gsap.from('.one', {
    y: -100,
    opacity: 0,
    duration: .5,
    delay: .5
});

gsap.to('.two', {
    x: -31,
    duration: .9,
    delay: 1.3,
    opacity: 1
});


gsap.to('.card1', {
    x: 20,
    opacity: 1,
    duration: .5,
    delay: .3,
    scrollTrigger: {
        trigger: '.card1',
        start: 'top center'
    }
});


gsap.to('.anim2', {
    x: 25,
    opacity: 1,
    duration: .5,
    delay: .7,
    scrollTrigger: {
        trigger: '.anim2',
        start: 'top center'
    }
});

gsap.to('.anim3', {
    x: 30,
    opacity: 1,
    duration: .5,
    delay: 1,
    scrollTrigger: {
        trigger: '.anim3',
        start: 'top center'
    }
});

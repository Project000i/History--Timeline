gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects:true
    
    }) 

    gsap.fromTo('.main' , { opacity:1 } , {
        opacity:1,
        ScrollTrigger: {
            trigger: '.main',
            scrub:true
        }
    })

    gsap.FromTo('.Barsbek .Jusup', { x:-50, opacity: 0}, {
        opacity: 1, x:0,
        scrollTrigger: {
            trigger:'.Jusup',
            scrub: true
        }
    } )
}
gsap.from("#box1" ,{
    scrollTrigger:{
        trigger:"#box1",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"bottom 50%",
        scrub:2,
    },
    scale:1.5,
    duration:2,
    delay:1,
})
gsap.to("#box2" ,{
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:2,
        // pin:true,
        // picSpacing:true,
    },
    x:360,
    duration:2,
})
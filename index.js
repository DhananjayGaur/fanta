
var tll = gsap.timeline();

tll.from("nav div",{
    y:-200,
    backgroundColor:"transparent",
    opacity:0,
    duration:1,
    stagger: 0.5,
   
},'head')
tll.from(".page1 h1,.page1 img",{
    y:200,
    backgroundColor:"transparent",
    opacity:0,
    scale:0,
    duration:1,
    stagger: 0.5,
   
},'head')

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})



tl.to("#fanta",{
    top: "125%",
    left: "-2%"
},'first')
tl.to("#orange2",{
    top:"190%",
    left: "23%"
}, 'first')
tl.to("#orange",{
    // width: "15%",
    top:"140%",
    left: "75%"
}, 'first')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'first')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'first')
tl.from(".right h2, p",{
    opacity:0,
    y:200
})



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "20% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from("#lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'second')
tl2.from(".coco-cola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'second')

tl2.from("#lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'second')
tl2.from(".pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'second')

tl2.to("#orange2",{
    // width:"22%",
    scale:"1.5",
    left: "41%",
    top: "230%"
}, 'second')
tl2.to("#fanta",{
    width:"38%",
    top: "206%",
    left: "30%",
}, 'second')
tl2.to("#leaf",{
    top:"270%",
    rotate: "130deg",
    left: "0%"
}, 'second')
tl2.to("#leaf2",{
    top:"200%",
    rotate: "360deg",
    left: "80%"
}, 'second')

var navtl = gsap.timeline()



navtl.from("nav", {
    y: -200,
    duration: 1,
    delay: 1.5,
})
navtl.from(".navlogo", {
    y: 300,
    duration: 0.5,
})
navtl.from(".navlinks ul li", {
    y: -200,
    stagger: 0.2,
})

gsap.from("nav", {
    backgroundColor: "rgb(11, 11, 113,0)",
    // opacity:0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body",
        start: "30% 10%",
        end: "90% 40%",
        scrub: 2,
        // once: true
        
         
    }
});



// animation for front bg-team image 


gsap.to(".bg-team",{
    duration:1.5, // Duration of the scale animation
    scale: 1.2, // Slightly scale up
    ease: "power2.out", // Smooth easing
    filter:"brightness(0.6)"
})



















// for team animation
var member_cart = gsap.timeline()

gsap.from(".trigger-1",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".President",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})


gsap.from(".trigger-2",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".VicePresident",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-3",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".general",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})

gsap.from(".trigger-4",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".technical",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
    }



})
gsap.from(".trigger-5",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".desgin",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})

gsap.from(".trigger-11",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".adviser",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-12",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".content",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-6",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".pr",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-7",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".sponsor",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-8",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".publicity",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-9",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".evm",
        start: "30% 80%",
        end: "40% 40%",
        scrub: 2,
        once: true
         
    }



})
gsap.from(".trigger-10",{
    y: -100,
    duration: .1,
    opacity:0,
    scrollTrigger:{
        trigger: ".incubation",
        start: "10% 70%",
        end: "9% 40%",
        scrub: 2,
        once: true,

         
    }



})


let head = document.querySelector(".heading-title")
let text = "GET IN TOUCH WITH US"
let text2 = text.split("")
section4head(text2);


function section4head(text) {
    text.forEach(e => {
        let elems = document.createElement("span")
        elems.classList.add("gsap")
        elems.innerText = e
        head.appendChild(elems)
    });
}


var herotl = gsap.timeline()




herotl.from(".gsap", {
    delay:.7,
    opacity:0,
    y:100,
    stagger: 0.1,
    duration: .1,
})




// <-----------HamMenu--------------->
let ham = document.querySelector('.ham');
var htl = gsap.timeline()
htl.to(".hmenu", {
    left: 0,
    duration: 0.1,
})
htl.from(".head .hlogo", {
    y: 100,
    duration: 0.2,
    delay: 0.2,
    opacity: 0,
})
htl.from(".hbody ul li", {
    y: 80,
    stagger: 0.1,
    opacity: 0,
})
htl.pause()
ham.addEventListener('click', function () {
    htl.timeScale(1)
    htl.play()
});
let sham = document.querySelector(".cross");
sham.addEventListener('click', function () {
    htl.timeScale(3)
    htl.reverse()
});

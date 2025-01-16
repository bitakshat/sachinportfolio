import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline
    .from('.header-logo', { opacity: 0, y: -50 })
    .from('.header-link', { opacity: 0, y: -50, stagger: 0.2 })


gsap.from('.landing-page-image', {
    duration: 1,
    opacity: 0,
    x: -150
})

gsap.from('.landing-heading', {
    duration: 1,
    opacity: 0,
    y: -150
})

gsap.from('.landing-content', {
    duration: 1,
    opacity: 0,
    y: 150,
    delay: .5
})


// Select the section and image
const scrollSection = document.querySelector('.beautifulscroll');
const scrollImage = document.querySelector('.beautifulscrollingimage');
const scrollText = document.querySelector('.beautifulscrollingtext');

// // GSAP Animation
// gsap.to(scrollImage, {
//     scale: 1, // Final scale value
//     ease: "power1.in", // Easing for smooth scaling
//     opacity: 1,
//     scrollTrigger: {
//         trigger: scrollSection, // The section that triggers the animation
//         start: "top top", // Trigger animation when section hits the top of the viewport
//         end: "bottom+=200 top", // End the animation after scrolling 200px past the section
//         scrub: true, // Synchronize animation with scroll
//         pin: true, // Pin the section to the viewport
//         markers: false, // Set to true to see debugging markers
//     },
// });

// GSAP Animation for beautiful scrolling section
gsap.timeline({
    scrollTrigger: {
        trigger: scrollSection, // The section to trigger the animation
        start: "top top", // Animation starts when section touches the top of the viewport
        // end: "+=1500", // Animation runs for 1500px of scrolling
        // scrub: true, // Synchronize with scroll
        // pin: true, // Pin the section while animating
        toggleActions: "play none restart reverse",
        markers: false, // Debugging markers
    },
})
    .to(scrollImage, {
        scale: 1, // Image zooms to 3x its size
        ease: "power1.in", // Smooth scaling
    })
    .to(scrollSection, {
        backgroundColor: "#000",
    })
    .to(scrollText, {
        opacity: 1,
    })


// timeline for projects section 
gsap.timeline({
    scrollTrigger: {
        trigger: '.projectsection',
        start: "top top",
        end: "bottom bottom",
        // scrub: true,
        toggleActions: "play none none none",
        pin: true,
        markers: false
    }
}).to('.projectsheading', {
    fontSize: "40px",
    duration: 1,
}).from('.projectshowcaseleft', {
    x: "-100vw",
    duration: 1
}).from('.projectshowcaseright', {
    x: "100vw",
    duration: 1
}).to('.projectsection', {
    backgroundColor: "#fff"
}).to('.projectsheading', {
    color: "#fff"
})

// timeline for recommendation section
// gsap.timeline({
//     scrollTrigger: {
//         trigger: '.recommendationsection',
//         start: "-500px",
//         end: "bottom bottom",
//         // scrub: true,
//         toggleActions: "play none none none",
//         pin: false,
//         markers: false
//     }
// }).to('.recommendationsection', {
//     backgroundColor: "#000",
//     duration: .5
// }).to('.recommendataionsectionheading', {
//     color: "#fff",
//     duration: .5
// })

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'


// // intro animation 
// gsap.to('.loading-text', {
//     fontSize: "25px",
//     duration: 1
// })
// gsap.to('.loading-line', {
//     width: '100%',
//     duration: 3,
//     ease: "power1.inOut"
// }, 1);
// gsap.to('.loading-text', {
//     opacity: 0
// }, 3)

// // Timeline for other animations
// const loadingtimeline = gsap.timeline();

// loadingtimeline
//     // Line animation completes first, so start the section animations after 3 seconds
//     .to('.upper-loading-section', {
//         y: "-100vh",
//         ease: "power3.in",
//         duration: 3
//     }, 3) // Start after 3 seconds
//     .to('.lower-loading-section', {
//         y: "100vh",
//         ease: "power3.in",
//         duration: 3,
//     }, 3) // Start after 3 seconds
//     .to('.loading-text', {
//         color: "#000",
//         duration: 3,
//         textDecoration: "strikethrough",
//     }, 3)
//     .to('.loading-line', {
//         opacity: 0
//     })
//     .to('.loading-screen-container', {
//         opacity: 0,
//         duration: 1.5,
//     }, 5)
//     .to('.loading-screen-container', {
//         opacity: 0,
//         duration: 1.5,
//     }, 5)


// gsap.registerPlugin(ScrollTrigger)

// const timeline = gsap.timeline({ defaults: { duration: .5 } });
// timeline
//     .from('.header-logo', { opacity: 0, y: -50 })
//     .from('.header-link', { opacity: 0, y: -50, stagger: 0.2 })


// gsap.from('.landing-page-image', {
//     duration: 1,
//     opacity: 0,
//     x: -150
// })

// gsap.from('.landing-heading', {
//     duration: 1,
//     opacity: 0,
//     y: -150
// })

// gsap.from('.landing-content', {
//     duration: 1,
//     opacity: 0,
//     y: 150,
//     delay: .5
// })


// // Select the section and image
// const scrollSection = document.querySelector('.beautifulscroll');
// const scrollImage = document.querySelector('.beautifulscrollingimage');
// const scrollText = document.querySelector('.beautifulscrollingtext');

// // // GSAP Animation
// // gsap.to(scrollImage, {
// //     scale: 1, // Final scale value
// //     ease: "power1.in", // Easing for smooth scaling
// //     opacity: 1,
// //     scrollTrigger: {
// //         trigger: scrollSection, // The section that triggers the animation
// //         start: "top top", // Trigger animation when section hits the top of the viewport
// //         end: "bottom+=200 top", // End the animation after scrolling 200px past the section
// //         scrub: true, // Synchronize animation with scroll
// //         pin: true, // Pin the section to the viewport
// //         markers: false, // Set to true to see debugging markers
// //     },
// // });

// // GSAP Animation for beautiful scrolling section
// gsap.timeline({
//     scrollTrigger: {
//         trigger: scrollSection, // The section to trigger the animation
//         start: "top top", // Animation starts when section touches the top of the viewport
//         // end: "+=1500", // Animation runs for 1500px of scrolling
//         // scrub: true, // Synchronize with scroll
//         // pin: true, // Pin the section while animating
//         toggleActions: "play none restart reverse",
//         markers: true, // Debugging markers
//     },
// })
//     .to(scrollImage, {
//         scale: 1, // Image zooms to 3x its size
//         ease: "power1.in", // Smooth scaling
//     })
//     .to(scrollSection, {
//         backgroundColor: "#000",
//     })
//     .to(scrollText, {
//         opacity: 1,
//     })


// // timeline for projects section 
// gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projectsection',
//         start: "top top",
//         end: "bottom bottom",
//         // scrub: true,
//         toggleActions: "play none none none",
//         pin: true,
//         // markers: false
//     }
// }).to('.projectsheading', {
//     fontSize: "40px",
//     duration: 1,
// }).from('.projectshowcaseleft', {
//     x: "-100vw",
//     duration: 1
// }).from('.projectshowcaseright', {
//     x: "100vw",
//     duration: 1
// }).to('.projectsection', {
//     backgroundColor: "#fff"
// }).to('.projectsheading', {
//     color: "#fff"
// })

// First, modify your HTML to properly hide the main content

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// First, modify your HTML to properly hide the main content
const style = document.createElement('style');
style.textContent = `
  .hidden-content {
    display: none;
    opacity: 0;
  }
  
  body {
    overflow: hidden;
  }
  
  .loading-screen-container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
`;
document.head.appendChild(style);

// Pre-load main content animations
const mainTimeline = gsap.timeline({ paused: true });

// Your existing GSAP code with modifications
gsap.to('.loading-text', {
    fontSize: "25px",
    duration: 1
});

gsap.to('.loading-line', {
    width: '100%',
    duration: 3,
    ease: "power1.inOut"
}, 1);

gsap.to('.loading-text', {
    opacity: 0
}, 3);

// Modified timeline for loading animation
const loadingTimeline = gsap.timeline({
    onComplete: () => {
        // Show main content first but keep it invisible
        const mainContent = document.querySelector('.hidden-content');
        mainContent.style.display = 'block';

        // Create a smooth transition timeline
        const transitionTimeline = gsap.timeline();

        transitionTimeline
            .to('.loading-screen-container', {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    document.querySelector('.loading-screen-container').style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            })
            .to('.hidden-content', {
                opacity: 1,
                duration: 0.5,
                onStart: () => {
                    // Initialize main animations right before fade-in starts
                    initializeMainAnimations();
                }
            });
    }
});

loadingTimeline
    .to('.upper-loading-section', {
        y: "-100vh",
        ease: "power3.in",
        duration: 2
    }, 3)
    .to('.lower-loading-section', {
        y: "100vh",
        ease: "power3.in",
        duration: 2,
    }, 3)
    .to('.loading-text', {
        color: "#000",
        duration: 2,
        textDecoration: "strikethrough",
    }, 3)
    .to('.loading-line', {
        opacity: 0
    });

function initializeMainAnimations() {

    // Add a slight delay before starting main animations
    gsap.delayedCall(0, () => {
        const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

        timeline
            .from('.header-logo', {
                opacity: 0,
                y: -50,
                clearProps: "all" // Clear properties after animation
            })
            .from('.header-link', {
                opacity: 0,
                y: -50,
                stagger: 0.2,
                clearProps: "all"
            }, "-=0.3") // Slightly overlap with previous animation
            .from('.landing-image-background', {
                scale: .2,
                duartion: 4
            })

        gsap.from('.landing-page-image', {
            duration: 1,
            opacity: 0,
            x: -150,
            ease: "power2.out",
            clearProps: "all"
        });

        gsap.from('.landing-heading', {
            duration: 1,
            opacity: 0,
            y: -150,
            ease: "power2.out",
            clearProps: "all"
        });

        gsap.from('.landing-content', {
            duration: 1,
            opacity: 0,
            y: 150,
            delay: 0.3,
            ease: "power2.out",
            clearProps: "all"
        })

        gsap.to(".animated-text::before", {
            clipPath: "inset(0 0 0 0)", // Reveal the black background
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
                // Once the black background has covered the text, slide it off to the right
                gsap.to(".animated-text::before", {
                    clipPath: "inset(0 0 0 100%)",
                    duration: 2,
                    ease: "power2.in",
                });
            },
        });

        gsap.to(".animated-text::before", {
            clipPath: "inset(0 0 0 0)", // Reveal the black background
            duration: 2,
            ease: "power2.out",
            onComplete: () => {
                // Once the black background has covered the text, slide it off to the right
                gsap.to(".animated-text::before", {
                    clipPath: "inset(0 0 0 100%)",
                    duration: 15,
                    ease: "power2.in",
                });
            },
        });
    });

    // Beautiful scroll section animations
    const scrollSection = document.querySelector('.beautifulscroll');
    const scrollImage = document.querySelector('.beautifulscrollingimage');
    const scrollText = document.querySelector('.beautifulscrollingtext');

    gsap.timeline({
        scrollTrigger: {
            trigger: scrollSection,
            start: "top top",
            toggleActions: "play none restart reverse",
            markers: false,
        }
    })
        .to(scrollImage, {
            scale: 1,
            ease: "power2.inOut",
        })
        .to(scrollSection, {
            backgroundColor: "#000",
        })
        .to(scrollText, {
            opacity: 1,
        });

    // Projects section timeline
    gsap.timeline({
        scrollTrigger: {
            trigger: '.projectsection',
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play none none none",
            pin: true,
        }
    })
        .to('.projectsheading', {
            fontSize: "40px",
            duration: 1,
        })
        .from('.projectshowcaseleft', {
            x: "-100vw",
            duration: 1,
            ease: "power2.out"
        }, 0)
        .from('.projectshowcaseright', {
            x: "100vw",
            duration: 1,
            ease: "power2.out"
        }, 0)
        .to('.projectsection', {
            backgroundColor: "#fff"
        })
        .to('.projectsheading', {
            color: "#fff"
        });
}
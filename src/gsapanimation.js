import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Aos from 'aos';

gsap.registerPlugin(ScrollTrigger)

Aos.init({
    duration: 1200,
    once: false,
});

// First, modify your HTML to properly hide the main content
// const style = document.createElement('style');
// style.textContent = `
//   .hidden-content {
//     display: none;
//     opacity: 0;
//   }

//   body {
//     overflow: hidden;
//   }

//   .loading-screen-container {
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     z-index: 1000;
//   }
// `;
// document.head.appendChild(style);

// Pre-load main content animations
// const mainTimeline = gsap.timeline({ paused: true });

// // Your existing GSAP code with modifications
// gsap.to('.loading-text', {
//     fontSize: "15px",
//     duration: 1
// });

// gsap.to('.loading-line', {
//     width: '100%',
//     duration: 3,
//     ease: "power1.inOut"
// }, 1);

// gsap.to('.loading-text', {
//     opacity: 0
// }, 3);

// // // Modified timeline for loading animation
// const loadingTimeline = gsap.timeline({
//     onComplete: () => {
//         // Show main content first but keep it invisible
//         const mainContent = document.querySelector('.hidden-content');
//         mainContent.style.display = 'block';

//         // Create a smooth transition timeline
//         const transitionTimeline = gsap.timeline();

//         transitionTimeline
//             .to('.loading-screen-container', {
//                 opacity: 0,
//                 duration: 0.5,
//                 onComplete: () => {
//                     document.querySelector('.loading-screen-container').style.display = 'none';
//                     document.body.style.overflow = 'auto';
//                     Aos.init({
//                         duration: 1200,
//                         once: false,
//                     });
//                 }
//             })
//             .to('.hidden-content', {
//                 opacity: 1,
//                 duration: 0.5,
//                 onStart: () => {
//                     // Initialize main animations right before fade-in starts
//                     initializeMainAnimations();
//                 }
//             });
//     }
// });

// loadingTimeline
//     .to('.upper-loading-section', {
//         y: "-100vh",
//         ease: "power3.in",
//         duration: 2
//     }, 3)
//     .to('.lower-loading-section', {
//         y: "100vh",
//         ease: "power3.in",
//         duration: 2,
//     }, 3)
//     .to('.loading-text', {
//         color: "#000",
//         duration: 2,
//         textDecoration: "strikethrough",
//     }, 3)
//     .to('.loading-line', {
//         opacity: 0
//     });

function initializeMainAnimations() {

    // Add a slight delay before starting main animations
    gsap.delayedCall(0, () => {
        const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

        timeline
            .from('.header-link', {
                opacity: 0,
                y: -50,
                stagger: 0.2,
                clearProps: "all"
            }, "-=0.3") // Slightly overlap with previous animation
            .from('.landing-image-background', {
                scale: .2,
                duration: 1
            }, 1)

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

        const tl = gsap.timeline();

        // Animate the overlay and text
        tl.to(".reveal-text", {
            opacity: 1,
            duration: 0,
            left: "0%"
        })
            .to(".reveal-overlay", {
                left: "100%",
                duration: 1.5,
                ease: "power2.inOut"
            })
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
            pin: true,
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
        })
        .to('.beautifulscrollelementone', {
            width: "80%",
            opacity: 1,
        })
        .to('.beautifulscrollelementone', {
            opacity: 0,
            duration: 1.5
        })
        .to('.beautifulscrollelementtwo', {
            rotation: 180,
            duration: 1.5,
            ease: "power2.inOut",
            height: "30px"
            // x: "100vw"
        }, 2)
        .to('.beautifulscrollelementthree', {
            rotation: -180,
            duration: 1.5,
            ease: "power2.inOut",
            height: "30px"
            // x: "-100vw"
        }, 2)
        .to('.beautifulscrollelementtwo', {
            width: "100%"
        }, 3)
        .to('.beautifulscrollelementthree', {
            width: "100%"
        }, 3)
        .to(scrollText, {
            color: "#000"
        }, 3)



    // work experience timeline
    gsap.timeline({
        scrollTrigger: {
            trigger: '.workexperience-trigger',
            start: "top bottom",
            toggleActions: "play none restart none",
        }
    }).to(".reveal-text", {
        opacity: 1,
        duration: 0,
    })
        .fromTo(".trigger-reveal-overlay", {
            left: "0%",
            opacity: 1
        },
            {
                left: "100%",
                duration: 1,
                opacity: 1,
                ease: "power2.inOut"
            })

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
            fontSize: "30px",
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

    function scrambleTextByWords(element) {
        // Clone the element to measure dimensions before manipulation
        const clone = element.cloneNode(true);
        clone.style.visibility = 'hidden';
        element.parentNode.insertBefore(clone, element);

        // Measure and set exact dimensions
        const computedStyle = window.getComputedStyle(clone);
        element.style.width = `${clone.offsetWidth}px`;
        element.style.height = `${clone.offsetHeight}px`;
        element.style.overflow = 'hidden';
        element.style.display = 'flex';

        // Remove clone
        clone.parentNode.removeChild(clone);

        const originalText = element.textContent;
        const words = originalText.split(/\s+/);

        const generateRandomWord = (word) =>
            Array.from(
                { length: word.length },
                () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
            ).join('');

        const scrambledWords = words.map(word => generateRandomWord(word));

        // Initial scramble
        element.textContent = scrambledWords.join(' ');

        // Animate back to original text
        gsap.to(element, {
            duration: 3,
            onUpdate: function () {
                const progress = this.progress();
                const currentWords = words.map((word, index) => {
                    if (progress * words.length > index) return word;
                    return scrambledWords[index];
                });
                element.textContent = currentWords.join(' ');
            },
            onComplete: () => {
                element.textContent = originalText;
                element.style.width = '';
                element.style.height = '';
                element.style.overflow = '';
                element.style.display = '';
            }
        });
    }

    function initWorkExperienceScramble() {
        const section = document.querySelector('.workexperience-trigger');
        const textElements = section.querySelectorAll(
            '.text-slate-500, .text-sm:not(.text-6xl), .text-slate-900:not(.text-6xl)'
        );

        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                console.log("Entered the viewport");

                textElements.forEach(element => {
                    scrambleTextByWords(element);
                });
            },
            once: true
        });
    }

    // document.addEventListener('DOMContentLoaded', initWorkExperienceScramble);
    initWorkExperienceScramble()

    // footer elements timeline 
    gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            start: "top center",
            toggleActions: "play none reset none"
        }
    }).from('.footer-square-element', {
        scale: 0,
        duration: .8,
        opacity: 0,
    }, 1).to('.footer-square2-element', {
        scale: 0,
        duration: 2,
        opacity: 0,
    }, 1)
        .from('.footer-circle-element', {
            scale: 0,
            duration: 1
        }, 1)
}

initializeMainAnimations()
import gsap from 'gsap';

// gsap.from('.header-link', {
//     duration: 1,
//     opacity: 0,
//     y: -50,
//     stagger: 0.2
// });

// gsap.from('.header-logo', {
//     duration: 1,
//     opacity: 0,
//     y: -50
// })

const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline
    .from('.header-logo', { opacity: 0, y: -50 })
    .from('.header-link', { opacity: 0, y: -50, stagger: 0.2 })
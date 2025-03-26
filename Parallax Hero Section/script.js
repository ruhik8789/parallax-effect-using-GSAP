// // Register ScrollTrigger plugin with GSAP
// gsap.registerPlugin(ScrollTrigger);

// Parallax Animation for Hero Section
gsap.to(".hero-background", {
    y: 200,
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});
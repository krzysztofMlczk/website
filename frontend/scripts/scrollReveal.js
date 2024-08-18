const setupAnimations = () => {
  // HERO SECTION
  ScrollReveal().reveal(".hero-img", { delay: 200, distance: "20px" });
  ScrollReveal().reveal(".social-media-row i", {
    delay: 160,
    distance: "10px",
    origin: "top",
    interval: 100,
  });
  ScrollReveal().reveal(".page-title", { distance: "30px", origin: "left" });
  ScrollReveal().reveal(".from-right", { distance: "30px", origin: "right" });
};

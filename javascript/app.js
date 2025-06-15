gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.card').forEach(card => {
  gsap.fromTo(card,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
});

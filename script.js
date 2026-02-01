gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

function animatePage() {
  gsap.from(".hero-section", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1.5,
  });
  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1.5,
  });

  // gsap card animations

  gsap.from(".card", {
    opacity: 0,
    duration: 1,
    filter: "blur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".card",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
  });

  gsap.from(".thanks-city-section ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".thanks-city-section ul",
      start: "top 80%",
      end: "bottom 50%",
      scrub: 2,
    },
  });

  gsap.from("footer", {
    y: -400,
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "bottom bottom",
    },
  });

  const splitTextElements = document.querySelectorAll(".split-text");
  splitTextElements.forEach((element) => {
    const splitText = SplitText.create(element, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(splitText.chars, {
      opacity: 0,
      y: 40,
      stagger: 0.05,
      duration: 0.3,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 70%",
      },
    });
  });
}

const tl = gsap.timeline({
  onComplete() {
    animatePage();
    gsap.to("#preloader", {
      opacity: 0,
      duration: 0.5,
      display: "none",
    });
  },
});

tl.to("#preloader path", {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power1.inOut",
});
tl.to("#preloader path", {
  fill: "rgb(154, 0, 0)",
  duration: 1,
  ease: "power1.inOut",
});

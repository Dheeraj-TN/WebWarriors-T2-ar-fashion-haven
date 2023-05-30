import gsap from "gsap";
export const scrollAnimation = (position, target, isMobile, onUpdate) => {
  const tl = gsap.timeline();
  tl.to(position, {
    x: !isMobile ? 6.97 : -7.0,
    y: !isMobile ? 2.03 : -12.2,
    z: !isMobile ? 9.67 : -6.9,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: !isMobile ? 0.0 : 0.7,
      y: !isMobile ? 0.0 : 1.9,
      z: !isMobile ? 0.0 : 0.7,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".LaunchPage1", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(".sound-section-content", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(position, {
      x: !isMobile ? 0.497 : 9.36,
      y: !isMobile ? 0.517 : 10.95,
      z: !isMobile ? -12.08 : 0.09,
      scrollTrigger: {
        trigger: ".LaunchPage3-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: !isMobile ? 0.0 : -1.62,
      y: !isMobile ? 0.0 : 0.02,
      z: !isMobile ? 0.0 : -0.06,
      scrollTrigger: {
        trigger: ".LaunchPage3-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".LaunchPage3-section", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".LaunchPage3-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};

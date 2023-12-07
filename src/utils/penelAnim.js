
import { gsap } from 'gsap';
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

const penelAnim = () => {
  // if (typeof window !== 'undefined') {
    const panelsSections = gsap.utils.toArray(".panels");
    for (let i = 0; i < panelsSections.length; i++) {
      const thePanelsSection = panelsSections[i];
      const panels = gsap.utils.toArray(".panels-container .panel", thePanelsSection);
      const panelsContainer = thePanelsSection.querySelector(".panels-container");

      gsap.set(panelsContainer, { height: window.innerHeight });
      gsap.set(panels, { height: window.innerHeight });

      let totalPanelsWidth = 0;

      panels.forEach((panel) => {
        totalPanelsWidth += panel.offsetWidth;
      });

      gsap.set(panelsContainer, { width: totalPanelsWidth });
      
      gsap.to(panels, {
        x: -totalPanelsWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          end: (st) => `+=${st.vars.trigger.offsetWidth - window.innerWidth}`,
        },
      });
    }
  // }
};

export default penelAnim;

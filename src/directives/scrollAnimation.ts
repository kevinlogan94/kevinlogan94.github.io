import { Directive } from "vue";

const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // triggers when the entry is shown in the user's viewport.
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export const scrollAnimation: Directive = {
  beforeMount: (element) => {
    element.classList.add("before-enter");
    animatedScrollObserver.observe(element);
  },
};

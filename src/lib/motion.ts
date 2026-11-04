import { DURATION, EASE, STAGGER } from "@/constants/motion";

export const staggeredEnter = (step: number, baseDelay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.slow, ease: EASE.outExpo, delay: baseDelay + step * STAGGER.items },
});

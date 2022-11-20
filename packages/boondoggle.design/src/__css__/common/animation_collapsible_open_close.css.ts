import { keyframes, style } from "@vanilla-extract/css";
import { varsTransitionDuration } from "~styles/vars/vars_transition_duration";

const TRANSITION_TIMING = varsTransitionDuration.medium;

/** Shared styles used for collapsible open/close in places like
 * - "~components/search_job_posts/job_search_results_collapsible.css.ts
 * - ~components/coverage_page/coverage_page_search/coverage_page_results_collapsible.css.ts
 * - src/components/domain/sections/section_frequently_asked_questions/section_frequently_asked_questions.css.ts
 */

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 },
});

export const collapsibleContentAnimation = style({
  overflow: "hidden",
  selectors: {
    '&[data-state="open"]': {
      animation: `${open} ${TRANSITION_TIMING} ease forwards`,
    },
    '&[data-state="closed"]': {
      animation: `${close} ${TRANSITION_TIMING} ease forwards`,
    },
  },
});

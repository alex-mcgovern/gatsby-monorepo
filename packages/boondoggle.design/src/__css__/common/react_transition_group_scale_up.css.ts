import type { StyleRule } from "@vanilla-extract/css";
import { createReactTransitionGroupClassnames } from "~styles/css_preprocessing_utils/create_react_transition_group_classnames";
import { varsTransitionDuration } from "~styles/vars/vars_transition_duration";

const transitionedProperties = "opacity, transform, max-height";
const transitionTiming = varsTransitionDuration.short;
const transitionScaleValue = "scale(0.96)";

const transitionedInProps: StyleRule = {
  maxHeight: "100vh",
  opacity: 1,
  transform: "none",
};
const transitionedOutProps: StyleRule = {
  maxHeight: 0,
  opacity: 0,
  transform: transitionScaleValue,
};

const { enter, enterActive, enterDone, exit, exitActive, exitDone } =
  createReactTransitionGroupClassnames({
    transitionedInProps,
    transitionedOutProps,
    transitionedProperties,
    transitionTiming,
  });

export { enter, enterActive, enterDone, exit, exitActive, exitDone };

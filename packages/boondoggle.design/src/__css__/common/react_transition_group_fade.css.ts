import type { StyleRule } from "@vanilla-extract/css";
import { createReactTransitionGroupClassnames } from "~styles/css_preprocessing_utils/create_react_transition_group_classnames";
import { varsTransitionDuration } from "~styles/vars/vars_transition_duration";

const transitionedProperties = "opacity";
const transitionTiming = varsTransitionDuration.extraShort;

const transitionedInProps: StyleRule = {
  opacity: 1,
};
const transitionedOutProps: StyleRule = {
  opacity: 0,
};

const { enter, enterActive, enterDone, exit, exitActive, exitDone } =
  createReactTransitionGroupClassnames({
    transitionedInProps,
    transitionedOutProps,
    transitionedProperties,
    transitionTiming,
  });

export { enter, enterActive, enterDone, exit, exitActive, exitDone };

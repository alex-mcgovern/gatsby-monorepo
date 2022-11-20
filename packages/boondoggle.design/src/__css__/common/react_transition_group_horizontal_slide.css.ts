import type { StyleRule } from "@vanilla-extract/css";
import { createReactTransitionGroupClassnames } from "~styles/css_preprocessing_utils/create_react_transition_group_classnames";
import { varsTransitionDuration } from "~styles/vars/vars_transition_duration";

/**
 * COMMON PROPS
 */
const transitionedProperties = "opacity, transform";

const TRANSITION_TIMING = varsTransitionDuration.long;

const transitionScaleValue_left = "translateX(-100%)";
const transitionScaleValue_right = "translateX(100%)";

const transitionedInProps: StyleRule = {
  opacity: 1,
  zIndex: 1,
  transform: "none",
};

/**
 * DIRECTIONAL PROPS
 */

/** Moving right */
const transitionBeforeProps_right: StyleRule = {
  opacity: 0,
  transform: transitionScaleValue_right,
};
const transitionedOutProps_right: StyleRule = {
  opacity: 0,
  transform: transitionScaleValue_left,
};

/**
 * SLIDE RIGHT
 */

export const reactTransitionGroupHorizontalSlide_right =
  createReactTransitionGroupClassnames({
    transitionBeforeProps: transitionBeforeProps_right,
    transitionedInProps,
    transitionedOutProps: transitionedOutProps_right,
    transitionedProperties,
    transitionTiming: TRANSITION_TIMING,
    isPositionAbsoluteDuringMotion: true,
  });

/**
 * SLIDE LEFT
 */

/** Moving left */
const transitionBeforeProps_left: StyleRule = {
  opacity: 0,
  transform: transitionScaleValue_left,
};
const transitionedOutProps_left: StyleRule = {
  opacity: 0,
  transform: transitionScaleValue_right,
};

export const reactTransitionGroupHorizontalSlide_left =
  createReactTransitionGroupClassnames({
    transitionBeforeProps: transitionBeforeProps_left,
    transitionedInProps,
    transitionedOutProps: transitionedOutProps_left,
    transitionedProperties,
    transitionTiming: TRANSITION_TIMING,

    isPositionAbsoluteDuringMotion: true,
  });

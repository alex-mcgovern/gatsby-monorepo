import { vars } from "../theme.css";

export const varsShadow = {
  shadowDark: `-4px 4px 12px #00000015`,
  shadowDarkBottomOnly: `-4px 4px 12px -4px #00000015,`,
  shadowExtraDark: `-4px 4px 16px #00000040, 0px 0px 2px #00000020`,
  shadowExtraLight: `-4px 4px 4px #00000010`,
  shadowLight: `-4px 4px 8px #00000010`,
  shadowLightBottomOnly: `-4px 4px 8px -4px #00000010`,
  inset_md: `inset 2px 2px 4px ${vars.color.accent_ui_2}, 
          inset 0 0 4px ${vars.color.accent_bg_1}, 
          inset -4px -4px 4px 0px ${vars.color.accent_ui_2}`,
  inset_sm: `inset 1px 1px 2px ${vars.color.accent_ui_2}, 
          inset 0 0 2px ${vars.color.accent_bg_1}, 
          inset -2px -2px 4px 0px ${vars.color.accent_ui_2}`,
};

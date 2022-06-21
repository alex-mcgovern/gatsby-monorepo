import { vars } from "../theme.css";

export const varsShadow = {
  shadowDark: `-4px 4px 24px #00000030`,
  shadowDarkBottomOnly: `-4px 4px 12px -4px #00000010,`,
  shadowExtraDark: `-4px 4px 32px #00000040, 0px 0px 2px #00000020`,
  shadowExtraLight: `-4px 4px 12px #00000010`,
  shadowLight: `-4px 4px 16px #00000020`,
  shadowLightBottomOnly: `-4px 4px 12px -4px #00000010`,
  inset_md: `inset 2px 2px 4px ${vars.color.primary_ui_selected}, 
          inset 0 0 4px ${vars.color.primary_background}, 
          inset -4px -4px 4px 0px ${vars.color.accent_ui_selected}`,
  inset_sm: `inset 1px 1px 2px ${vars.color.primary_ui_selected}, 
          inset 0 0 2px ${vars.color.primary_background}, 
          inset -2px -2px 4px 0px ${vars.color.accent_ui_selected}`,
};

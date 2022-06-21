import { vars } from "../theme.css";

export const varsBackgroundImage = {
  gradient_primary: `
            radial-gradient(600px circle at 66% 50%, ${vars.color.primary_ui_base} 0px, transparent 100%),
            radial-gradient(600px circle at 80% 100%, ${vars.color.accent_ui_hover} 0px, transparent 100%)`,
  gradient_secondary: ` 
            radial-gradient(600px circle at 33% 75%, ${vars.color.primary_background_dark} 0px, transparent 100%),
            radial-gradient(600px circle at 80% 100%, ${vars.color.accent_ui_base} 0px, transparent 100%)`,
};

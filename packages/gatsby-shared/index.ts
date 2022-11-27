/** -----------------------------------------------------------------------------
 * Shared components
 * ------------------------------------------------------------------------------- */

export { AuthenticatedRoute } from "./src/shared-components/AuthenticatedRoute";
export { CountdownWithCallback } from "./src/shared-components/CountdownWithCallback";
export { Footer } from "./src/shared-components/Footer";
export { Header } from "./src/shared-components/Header";
export { Layout } from "./src/shared-components/Layout";
export { Pagination } from "./src/shared-components/Pagination";
export { Seo } from "./src/shared-components/Seo";

/** -----------------------------------------------------------------------------
 * Gatsby APIs
 * ------------------------------------------------------------------------------- */

export { wrapPageElement } from "./src/gatsby-apis/wrapPageElement";
export { wrapRootElement } from "./src/gatsby-apis/wrapRootElement";

/** -----------------------------------------------------------------------------
 * Misc
 * ------------------------------------------------------------------------------- */

export { siteMetadata } from "./src/site-metadata";

/** -----------------------------------------------------------------------------
 * React hook form
 * ------------------------------------------------------------------------------- */

export { Form } from "./src/shared-components/Form/index";
export type { FormProps } from "./src/shared-components/Form/index";

export { FormInput } from "./src/shared-components/Form/components/FormInput";
export { FormSingleSelect } from "./src/shared-components/Form/components/FormSingleSelect";
export { FormTextArea } from "./src/shared-components/Form/components/FormTextArea";
export { FormSingleSelectCreatable } from "./src/shared-components/Form/components/FormSingleSelectCreatable";
export { getHookFormButtonIconProps } from "./src/shared-components/Form/utils/getHookFormButtonIcon";

/** -----------------------------------------------------------------------------
 * Shared pages
 * ------------------------------------------------------------------------------- */

export { SharedPage404 } from "./src/shared-pages/SharedPage404";
export { SharedPageLogin } from "./src/shared-pages/SharedPageLogin";
export { SharedPageRegister } from "./src/shared-pages/SharedPageRegister";

/** -----------------------------------------------------------------------------
 * Testing
 * ------------------------------------------------------------------------------- */

export { renderTestComponent } from "./src/shared-testing/TestComponentRenderer";

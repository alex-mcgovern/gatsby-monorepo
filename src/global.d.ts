declare module "*.svg" {
  const content: any;
  export default content;
}

type TSizeProp = "lg" | "sm" | "sm";

interface IDownshiftItem {
  label: string;
  value: string;
  link?: string;
}

type TDataSal =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down"
  | "flip-left"
  | "flip-right";

interface IMarkdownRemarkBlogPost {
  fields: { slug: string };
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
    description?: string | undefined;
    cover: ImageDataLike;
  };
}
interface IBlogCategory {
  categoryTitle: string;
  categorySlug: string;
}

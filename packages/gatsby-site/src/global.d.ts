declare module "*.svg" {
  const content: any;
  export default content;
}

type TSizeProp = "lg" | "sm" | "xs";

interface IMarkdownRemarkBlogPost {
  fields: { slug: string };
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
    description?: string | undefined;
  };
}
interface IBlogCategory {
  categoryTitle: string;
  categorySlug: string;
}

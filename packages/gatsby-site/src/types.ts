export interface MarkdownRemarkBlogPostShape {
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
export interface BlogCategoryShape {
  categoryTitle: string;
  categorySlug: string;
}

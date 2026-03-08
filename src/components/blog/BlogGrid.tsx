import type { Article } from "@/content/blog/articles";
import { BlogCard } from "@/components/blog/BlogCard";

type BlogGridProps = {
  articles: Article[];
  locale: string;
};

export function BlogGrid({ articles, locale }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} locale={locale} />
      ))}
    </div>
  );
}

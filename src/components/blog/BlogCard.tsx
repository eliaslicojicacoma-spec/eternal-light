import Link from "next/link";
import type { Article } from "@/content/blog/articles";

type BlogCardProps = {
  article: Article;
  locale: string;
};

export function BlogCard({ article, locale }: BlogCardProps) {
  return (
    <Link
      href={`/${locale}/blog/${article.slug}`}
      className="premium-card group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-8">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-premium-gold">
          {article.category}
        </div>

        <h3 className="mb-4 text-2xl font-serif leading-snug">
          {article.title}
        </h3>

        <p className="mb-6 text-premium-dark/60">{article.excerpt}</p>

        <span className="border-b border-premium-gold pb-1 text-xs font-bold uppercase tracking-widest">
          {locale === "pt" ? "Ler artigo" : "Read Article"}
        </span>
      </div>
    </Link>
  );
}

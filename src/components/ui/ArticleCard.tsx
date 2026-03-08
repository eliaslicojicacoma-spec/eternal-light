import Link from "next/link";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  hrefBase: string;
  locale: string;
  category?: string;
};

export function ArticleCard({
  title,
  excerpt,
  image,
  slug,
  hrefBase,
  locale,
  category,
}: ArticleCardProps) {
  return (
    <Link
      href={`/${locale}/${hrefBase}/${slug}`}
      className="premium-card group overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-8">
        {category ? (
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-premium-gold">
            {category}
          </div>
        ) : null}

        <h3 className="mb-4 text-2xl font-serif">{title}</h3>

        <p className="mb-6 text-premium-dark/60">{excerpt}</p>

        <span className="border-b border-premium-gold pb-1 text-xs font-bold uppercase tracking-widest">
          {locale === "pt" ? "Ler mais" : "Read More"}
        </span>
      </div>
    </Link>
  );
}

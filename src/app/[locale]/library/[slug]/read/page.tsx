import { notFound } from "next/navigation";
import { getBookBySlug } from "@/content/books/books";

export default async function ReadBookPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const book = getBookBySlug(locale, slug);

  if (!book) {
    notFound();
  }

  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "40px" }}>
      <h1>{book.title}</h1>

      {book.chapters.map((chapter) => (
        <div key={chapter.id} style={{ marginTop: "40px" }}>
          <h2>{chapter.title}</h2>

          {chapter.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}
    </main>
  );
}

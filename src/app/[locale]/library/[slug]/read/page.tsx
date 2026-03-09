import { notFound } from "next/navigation";
import { getBookBySlug } from "@/content/books/books";

export default async function ReadBookPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  const book = getBookBySlug(locale, slug);

  if (!book) {
    notFound();
  }

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>{book.title}</h1>

      <p>
        {locale === "pt"
          ? "Leitura online do livro."
          : "Reading the book online."}
      </p>

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

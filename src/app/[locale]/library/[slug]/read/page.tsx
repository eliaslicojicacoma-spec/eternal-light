import { notFound } from "next/navigation";
import { books } from "@/content/library/books";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function ReadBookPage({ params }: Props) {
  const book = books.find((b) => b.slug === params.slug);

  if (!book) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "60px 20px",
        lineHeight: "1.8",
        fontSize: "18px",
      }}
    >
      <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
        {book.title}
      </h1>

      <p style={{ opacity: 0.6, marginBottom: "40px" }}>
        {book.author} • {book.year}
      </p>

      <p>
        Este livro pode ser lido online no futuro.  
        Por enquanto utilize o botão **Baixar PDF** na página do livro.
      </p>
    </main>
  );
}

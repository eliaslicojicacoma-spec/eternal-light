export interface BookItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  description: string;
  image: string;
  category: string;
  year?: string;
}

const booksData = {
  en: [
    {
      id: "b1",
      slug: "steps-to-christ",
      title: "Steps to Christ",
      author: "Ellen G. White",
      excerpt: "A classic Christian work on repentance, faith, prayer and daily surrender.",
      description: `
Steps to Christ is one of the most beloved devotional books in Christian literature. It presents the way of salvation with simplicity, warmth and biblical clarity.

The book leads the reader through themes such as God’s love, repentance, confession, faith, consecration, prayer and joyful obedience. Its strength lies in the fact that it is both deeply spiritual and remarkably accessible.

For new believers, it offers a clear introduction to the Christian life. For mature believers, it serves as a refreshing return to the heart of the gospel. It does not focus on empty religion, but on a living relationship with Jesus Christ.

Its pages call the soul away from fear, self-reliance and formalism, and toward confidence in the grace of God. It remains a powerful invitation to know Christ personally and walk with Him daily.
      `,
      image: "https://picsum.photos/seed/steps-to-christ/1200/1600",
      category: "Devotional",
      year: "1892",
    },
    {
      id: "b2",
      slug: "the-great-controversy",
      title: "The Great Controversy",
      author: "Ellen G. White",
      excerpt: "A sweeping view of the conflict between truth and error from early Christianity to the end of time.",
      description: `
The Great Controversy is one of the central works of Adventist thought. It traces the struggle between Christ and Satan through history and prophecy.

The book explores major moments in the history of the church, the Reformation, the authority of Scripture, the final crisis of worship and the return of Christ. It combines history, theology and prophecy in a compelling narrative.

Its central burden is to reveal the character of God, expose the methods of deception and call believers to faithfulness in the last days. It remains one of the most influential books for understanding the Adventist worldview.

This is not merely a historical work. It is a spiritual appeal to stand on the side of truth with courage, humility and hope.
      `,
      image: "https://picsum.photos/seed/great-controversy-book/1200/1600",
      category: "Prophecy",
      year: "1888",
    },
    {
      id: "b3",
      slug: "the-desire-of-ages",
      title: "The Desire of Ages",
      author: "Ellen G. White",
      excerpt: "A Christ-centered portrait of the life, ministry, sacrifice and victory of Jesus.",
      description: `
The Desire of Ages is a deeply Christ-centered work that reflects on the earthly life of Jesus with reverence, tenderness and doctrinal depth.

From Bethlehem to Calvary and beyond, the book contemplates the words, actions and mission of Christ in a way that warms the heart and sharpens understanding. It emphasizes divine compassion, redemptive love and the beauty of Christ’s character.

Many readers treasure this book because it lifts Jesus above all noise and places Him again at the center of faith. It is both devotional and theological, accessible and profound.

It is especially valuable for those who want to meditate more deeply on the gospel story and grow in love for the Savior.
      `,
      image: "https://picsum.photos/seed/desire-of-ages/1200/1600",
      category: "Christology",
      year: "1898",
    },
    {
      id: "b4",
      slug: "patriarchs-and-prophets",
      title: "Patriarchs and Prophets",
      author: "Ellen G. White",
      excerpt: "From creation to the reign of David, this volume explores the foundations of biblical history.",
      description: `
Patriarchs and Prophets presents the early history of the biblical narrative, beginning with the origin of evil, creation and the patriarchal age, and extending through Israel’s development.

The book explores central themes such as covenant, obedience, worship, judgment and divine guidance. It shows how the stories of Genesis and early Israel continue to speak to the moral struggles of the present.

Its tone is devotional but also instructive, helping readers see spiritual lessons in the lives of Adam, Noah, Abraham, Jacob, Moses and others. It forms an important foundation for the larger Conflict of the Ages series.

For readers seeking to understand the flow of biblical history with spiritual insight, this book is invaluable.
      `,
      image: "https://picsum.photos/seed/patriarchs-prophets/1200/1600",
      category: "Biblical History",
      year: "1890",
    }
  ],
  pt: [
    {
      id: "b1",
      slug: "caminho-a-cristo",
      title: "Caminho a Cristo",
      author: "Ellen G. White",
      excerpt: "Uma obra cristã clássica sobre arrependimento, fé, oração e entrega diária.",
      description: `
Caminho a Cristo é um dos livros devocionais mais amados da literatura cristã. Ele apresenta o caminho da salvação com simplicidade, calor e clareza bíblica.

O livro conduz o leitor por temas como o amor de Deus, arrependimento, confissão, fé, consagração, oração e obediência alegre. Sua força está no fato de ser ao mesmo tempo profundamente espiritual e muito acessível.

Para novos crentes, oferece uma introdução clara à vida cristã. Para crentes maduros, funciona como um retorno renovador ao centro do evangelho. Não trata de religião vazia, mas de um relacionamento vivo com Jesus Cristo.

Suas páginas chamam a alma para longe do medo, da autossuficiência e do formalismo, conduzindo-a à confiança na graça de Deus. Continua sendo um convite poderoso para conhecer Cristo pessoalmente e andar com Ele todos os dias.
      `,
      image: "https://picsum.photos/seed/steps-to-christ/1200/1600",
      category: "Devocional",
      year: "1892",
    },
    {
      id: "b2",
      slug: "o-grande-conflito",
      title: "O Grande Conflito",
      author: "Ellen G. White",
      excerpt: "Uma visão ampla do conflito entre verdade e erro desde o cristianismo primitivo até o fim dos tempos.",
      description: `
O Grande Conflito é uma das obras centrais do pensamento adventista. Ele acompanha a luta entre Cristo e Satanás ao longo da história e da profecia.

O livro percorre momentos decisivos da história da igreja, a Reforma, a autoridade da Escritura, a crise final da adoração e a volta de Cristo. Une história, teologia e profecia numa narrativa forte.

Seu grande objetivo é revelar o caráter de Deus, expor os métodos do engano e chamar os crentes à fidelidade nos últimos dias. Continua sendo uma das obras mais influentes para compreender a cosmovisão adventista.

Não é apenas um livro histórico. É também um apelo espiritual para permanecer ao lado da verdade com coragem, humildade e esperança.
      `,
      image: "https://picsum.photos/seed/great-controversy-book/1200/1600",
      category: "Profecia",
      year: "1888",
    },
    {
      id: "b3",
      slug: "o-desejado-de-todas-as-nacoes",
      title: "O Desejado de Todas as Nações",
      author: "Ellen G. White",
      excerpt: "Um retrato centrado em Cristo sobre a vida, o ministério, o sacrifício e a vitória de Jesus.",
      description: `
O Desejado de Todas as Nações é uma obra profundamente cristocêntrica que contempla a vida terrena de Jesus com reverência, ternura e profundidade doutrinária.

De Belém ao Calvário e além, o livro medita nas palavras, ações e missão de Cristo de modo a aquecer o coração e aprofundar o entendimento. Destaca a compaixão divina, o amor redentor e a beleza do caráter de Cristo.

Muitos leitores guardam este livro com carinho porque ele eleva Jesus acima de todo ruído e O coloca novamente no centro da fé. É ao mesmo tempo devocional e teológico, acessível e profundo.

É especialmente valioso para quem deseja meditar mais profundamente na história do evangelho e crescer em amor pelo Salvador.
      `,
      image: "https://picsum.photos/seed/desire-of-ages/1200/1600",
      category: "Cristologia",
      year: "1898",
    },
    {
      id: "b4",
      slug: "patriarcas-e-profetas",
      title: "Patriarcas e Profetas",
      author: "Ellen G. White",
      excerpt: "Da criação ao reinado de Davi, este volume explora os fundamentos da história bíblica.",
      description: `
Patriarcas e Profetas apresenta a fase inicial da narrativa bíblica, começando com a origem do mal, a criação e a era patriarcal, e avançando pelo desenvolvimento de Israel.

O livro trabalha temas centrais como aliança, obediência, adoração, juízo e direção divina. Mostra como as histórias de Gênesis e do início de Israel continuam a falar às lutas morais do presente.

Seu tom é devocional, mas também instrutivo, ajudando o leitor a perceber lições espirituais na vida de Adão, Noé, Abraão, Jacó, Moisés e outros. Forma uma base importante para a série Conflito dos Séculos.

Para leitores que buscam entender o fluxo da história bíblica com visão espiritual, esta obra é valiosa.
      `,
      image: "https://picsum.photos/seed/patriarchs-prophets/1200/1600",
      category: "História Bíblica",
      year: "1890",
    }
  ],
};

export function getBooks(locale: string): BookItem[] {
  return locale === "pt" ? booksData.pt : booksData.en;
}

export function getBookBySlug(locale: string, slug: string): BookItem | undefined {
  return getBooks(locale).find((book) => book.slug === slug);
}

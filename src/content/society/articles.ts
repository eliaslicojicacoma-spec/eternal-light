export interface SocietyArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const societyArticlesData = {
  en: [
    {
      id: "s1",
      slug: "faith-politics",
      title: "Faith and Politics",
      excerpt:
        "Believers are called to conscience, wisdom and integrity in the public square without surrendering the spirit of Christ.",
      content: `
Politics can easily become a field of anger, division and fear. Yet Christian faith cannot ignore public life, because justice, truth and human dignity are moral concerns.

The issue is not whether believers should care about society, but how they should care. Scripture does not call Christians to blind partisanship. It calls them to truth, humility and principle.

Faith and politics must not be confused. The kingdom of God is not the same as any earthly system. When believers forget this, they defend political identity with a zeal that belongs only to Christ.

The public square needs believers who combine conviction with humility, courage with mercy and clarity with honesty. In a polarized age, that witness matters deeply.
      `,
      author: "Elias Lico",
      date: "2026-03-09",
      category: "Public Life",
      image: "https://picsum.photos/seed/society-politics/1400/900",
    },
    {
      id: "s2",
      slug: "family-fragmented-age",
      title: "Family in a Fragmented Age",
      excerpt:
        "The family remains one of the most important places for truth, stability, affection and spiritual formation.",
      content: `
One of the great struggles of modern society is fragmentation. People are connected digitally yet emotionally distant. In this environment the family becomes both vulnerable and essential.

The home should be more than a place of survival. It should be a place of formation. Children learn there what love feels like, what discipline sounds like and what faith looks like.

A Christian family does not need to be perfect, but it must be intentional. Presence matters. Shared prayer matters. Honest conversation matters. Faithfulness in small things matters.

In a fragmented age, strong homes become a witness that covenant, tenderness and truth still matter.
      `,
      author: "Elias Lico",
      date: "2026-03-10",
      category: "Family",
      image: "https://picsum.photos/seed/society-family/1400/900",
    },
    {
      id: "s3",
      slug: "youth-identity-pressure",
      title: "Youth, Identity and Pressure",
      excerpt:
        "Young people are growing under intense pressure to perform, compare and define themselves apart from God.",
      content: `
The modern young person faces enormous pressure. Expectations come from screens, peers, school, culture and comparison. Identity is often treated like a project of endless reinvention.

The Christian answer is not merely self-esteem, but identity rooted in Christ. Human worth does not begin with public approval. It begins with being created by God and called by grace.

When identity is received in Christ, the soul has a center strong enough to resist confusion. The church must help young people find this center through truth, example and discipleship.
      `,
      author: "Elias Lico",
      date: "2026-03-11",
      category: "Youth",
      image: "https://picsum.photos/seed/society-youth/1400/900",
    },
    {
      id: "s4",
      slug: "media-attention-soul",
      title: "Media, Attention and the Soul",
      excerpt:
        "Digital culture shapes not only what we consume, but how we think, feel and pray.",
      content: `
The question is no longer whether media influences us. It does. The deeper question is how deeply it shapes our habits of attention and the condition of our souls.

Digital tools are not evil in themselves, but constant stimulation weakens patience, reflection and prayer when left unchecked.

The Christian response is wisdom, not panic. We need boundaries, silence and a renewed attention shaped by Scripture instead of endless distraction.

Attention is a spiritual issue because what continually captures the mind slowly shapes the heart.
      `,
      author: "Elias Lico",
      date: "2026-03-12",
      category: "Culture",
      image: "https://picsum.photos/seed/society-media/1400/900",
    }
  ],
  pt: [
    {
      id: "s1",
      slug: "faith-politics",
      title: "Fé e Política",
      excerpt:
        "Os crentes são chamados à consciência, sabedoria e integridade na praça pública sem perder o espírito de Cristo.",
      content: `
A política pode facilmente tornar-se um campo de ira, divisão e medo. Ainda assim, a fé cristã não pode ignorar a vida pública, porque justiça, verdade e dignidade humana são assuntos morais.

A questão não é se os crentes devem se importar com a sociedade, mas como devem se importar. A Escritura não chama os cristãos ao partidarismo cego. Chama à verdade, humildade e princípio.

Fé e política não podem ser confundidas. O reino de Deus não é igual a qualquer sistema terreno. Quando os crentes esquecem isso, defendem identidade política com um zelo que pertence apenas a Cristo.

A praça pública precisa de crentes que juntem convicção com humildade, coragem com misericórdia e clareza com honestidade. Num tempo polarizado, esse testemunho importa muito.
      `,
      author: "Elias Lico",
      date: "2026-03-09",
      category: "Vida Pública",
      image: "https://picsum.photos/seed/society-politics/1400/900",
    },
    {
      id: "s2",
      slug: "family-fragmented-age",
      title: "Família em uma Era Fragmentada",
      excerpt:
        "A família continua a ser um dos lugares mais importantes para verdade, estabilidade, afeto e formação espiritual.",
      content: `
Uma das grandes lutas da sociedade moderna é a fragmentação. As pessoas estão conectadas digitalmente, mas emocionalmente distantes. Nesse ambiente, a família torna-se ao mesmo tempo vulnerável e essencial.

O lar deve ser mais do que um lugar de sobrevivência. Deve ser um lugar de formação. Ali as crianças aprendem como é o amor, como soa a disciplina e como a fé aparece na vida real.

Uma família cristã não precisa ser perfeita, mas precisa ser intencional. Presença importa. Oração em conjunto importa. Conversa honesta importa. Fidelidade nas pequenas coisas importa.

Numa era fragmentada, lares fortes tornam-se testemunho de que aliança, ternura e verdade ainda importam.
      `,
      author: "Elias Lico",
      date: "2026-03-10",
      category: "Família",
      image: "https://picsum.photos/seed/society-family/1400/900",
    },
    {
      id: "s3",
      slug: "youth-identity-pressure",
      title: "Juventude, Identidade e Pressão",
      excerpt:
        "Os jovens crescem sob forte pressão para provar valor, comparar-se e definir-se sem Deus.",
      content: `
O jovem moderno enfrenta enorme pressão. As expectativas vêm das telas, dos colegas, da escola, da cultura e da comparação. A identidade passa a ser tratada como um projeto de reinvenção sem fim.

A resposta cristã não é apenas autoestima, mas identidade firmada em Cristo. O valor humano não começa na aprovação pública. Começa no fato de sermos criados por Deus e chamados pela graça.

Quando a identidade é recebida em Cristo, a alma encontra um centro forte o suficiente para resistir à confusão. A igreja precisa ajudar os jovens a encontrar esse centro por meio da verdade, do exemplo e do discipulado.
      `,
      author: "Elias Lico",
      date: "2026-03-11",
      category: "Juventude",
      image: "https://picsum.photos/seed/society-youth/1400/900",
    },
    {
      id: "s4",
      slug: "media-attention-soul",
      title: "Mídia, Atenção e a Alma",
      excerpt:
        "A cultura digital molda não apenas o que consumimos, mas como pensamos, sentimos e até oramos.",
      content: `
A pergunta já não é se a mídia nos influencia. Influencia. A pergunta mais profunda é o quanto ela molda nossos hábitos de atenção e a condição da nossa alma.

Ferramentas digitais não são más em si mesmas, mas a estimulação constante enfraquece a paciência, a reflexão e a oração quando fica sem controle.

A resposta cristã é sabedoria, não pânico. Precisamos de limites, silêncio e uma atenção renovada moldada pela Escritura em vez de distração sem fim.

A atenção é uma questão espiritual porque aquilo que continuamente domina a mente acaba moldando o coração.
      `,
      author: "Elias Lico",
      date: "2026-03-12",
      category: "Cultura",
      image: "https://picsum.photos/seed/society-media/1400/900",
    }
  ]
};

export function getSocietyArticles(locale: string): SocietyArticle[] {
  return locale === "pt" ? societyArticlesData.pt : societyArticlesData.en;
}

export function getSocietyArticleBySlug(
  locale: string,
  slug: string
): SocietyArticle | undefined {
  return getSocietyArticles(locale).find((article) => article.slug === slug);
}

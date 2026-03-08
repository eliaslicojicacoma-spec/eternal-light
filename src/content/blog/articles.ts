export interface Article {
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

const blogArticles = {
  en: [
    {
      id: "1",
      slug: "beauty-of-grace",
      title: "The Beauty of Grace",
      excerpt:
        "Grace is not weakness. It is the saving kindness of God reaching human brokenness with truth, mercy and transformation.",
      content: `
Grace stands at the center of the Christian message. It is more than pardon after failure. It is the active love of God moving toward sinners with healing, cleansing and hope.

Many think grace only belongs to the beginning of faith, but grace also sustains the whole Christian life. We are saved by grace, shaped by grace and strengthened by grace.

True grace does not excuse sin while leaving us unchanged. It leads us toward repentance, gratitude and obedience. It does not make holiness unnecessary; it makes holiness possible through Christ.

In a culture built on performance, grace reminds us that our value is not created by achievement. In moments of shame, grace gives us a new standing. In weakness, grace assures us that God is still at work.

The beauty of grace is that it reveals both the seriousness of sin and the greatness of divine love. At the cross, grace was not cheap. It cost heaven everything and yet is offered freely to all.

To live by grace is to walk with humility, peace and deep dependence on God. It is to stop pretending and come honestly before the Lord, trusting His mercy for the past and His strength for the present.
      `,
      author: "Elias Lico",
      date: "2026-03-05",
      category: "Theology",
      image: "https://picsum.photos/seed/grace-eternal/1400/900",
    },
    {
      id: "2",
      slug: "hope-in-difficult-times",
      title: "Hope in Difficult Times",
      excerpt:
        "Christian hope is not shallow optimism. It is confidence that God remains faithful when life becomes heavy and uncertain.",
      content: `
There are seasons when life becomes difficult and the future feels clouded. Christian hope does not deny pain, but it refuses to surrender to despair.

Biblical hope is anchored in the character of God. It rests on promise, not mood. It survives delay because it knows that God is not absent in silence.

When believers pass through trial, hope guards the heart. It reminds us that suffering is real, but it is not ultimate. God is still writing the story.

Hope also looks forward to the return of Christ and the restoration of all things. That future changes how we endure the present.

If your soul is weary, hold fast to the promises of Scripture. Pray even if your words are few. Hope grows when the heart remains near the Word of God.

The believer may be tested, but never abandoned. God’s faithfulness is stronger than the darkness of the hour.
      `,
      author: "Elias Lico",
      date: "2026-03-06",
      category: "Spiritual Life",
      image: "https://picsum.photos/seed/hope-eternal/1400/900",
    },
    {
      id: "3",
      slug: "the-discipline-of-prayer",
      title: "The Discipline of Prayer",
      excerpt:
        "Prayer is not merely a religious habit. It is the hidden place where the soul learns dependence, clarity and communion.",
      content: `
Prayer is one of the simplest and deepest acts of the Christian life. It is simple because every believer can pray. It is deep because prayer opens the inner life to God.

A life of prayer does not happen by accident. It requires intention. In a distracted age, prayer becomes an act of resistance against noise and hurry.

Prayer shapes the soul. It reorders desire, exposes pride, calms fear and makes space for gratitude. It does not only change circumstances; it changes the one who prays.

Discipline in prayer is not coldness. It is faithfulness. The richest prayers are often not dramatic, but steady.

If prayer feels difficult, begin honestly. Speak simply. Return again tomorrow. The point is not performance, but relationship with God.
      `,
      author: "Elias Lico",
      date: "2026-03-07",
      category: "Devotion",
      image: "https://picsum.photos/seed/prayer-eternal/1400/900",
    }
  ],
  pt: [
    {
      id: "1",
      slug: "beauty-of-grace",
      title: "A Beleza da Graça",
      excerpt:
        "A graça não é fraqueza. É a bondade salvadora de Deus alcançando a ruína humana com verdade, misericórdia e transformação.",
      content: `
A graça está no centro da mensagem cristã. Ela é mais do que perdão depois da falha. É o amor ativo de Deus avançando em direção ao pecador com cura, limpeza e esperança.

Muitos pensam que a graça pertence apenas ao começo da fé, mas a graça também sustenta toda a vida cristã. Somos salvos pela graça, moldados pela graça e fortalecidos pela graça.

A verdadeira graça não desculpa o pecado deixando-nos iguais. Ela conduz ao arrependimento, à gratidão e à obediência. Não torna a santidade desnecessária; torna-a possível em Cristo.

Numa cultura construída sobre desempenho, a graça lembra-nos que o nosso valor não nasce das conquistas. Em momentos de vergonha, a graça nos dá uma nova posição. Na fraqueza, a graça assegura que Deus continua a agir.

A beleza da graça é revelar ao mesmo tempo a gravidade do pecado e a grandeza do amor divino. Na cruz, a graça não foi barata. Custou tudo ao céu e mesmo assim foi oferecida gratuitamente a todos.

Viver pela graça é andar com humildade, paz e profunda dependência de Deus. É parar de fingir e apresentar-se honestamente diante do Senhor, confiando na Sua misericórdia para o passado e na Sua força para o presente.
      `,
      author: "Elias Lico",
      date: "2026-03-05",
      category: "Teologia",
      image: "https://picsum.photos/seed/grace-eternal/1400/900",
    },
    {
      id: "2",
      slug: "hope-in-difficult-times",
      title: "Esperança em Tempos Difíceis",
      excerpt:
        "A esperança cristã não é otimismo superficial. É confiança de que Deus continua fiel quando a vida fica pesada e incerta.",
      content: `
Há estações em que a vida se torna difícil e o futuro parece encoberto. A esperança cristã não nega a dor, mas recusa render-se ao desespero.

A esperança bíblica está ancorada no caráter de Deus. Ela repousa na promessa, não no humor. Sobrevive ao atraso porque sabe que Deus não está ausente no silêncio.

Quando os crentes passam pela prova, a esperança guarda o coração. Ela lembra que o sofrimento é real, mas não é final. Deus ainda está escrevendo a história.

A esperança também olha para a volta de Cristo e para a restauração de todas as coisas. Esse futuro muda a forma como suportamos o presente.

Se a tua alma estiver cansada, segura-te nas promessas da Escritura. Ora mesmo quando as palavras forem poucas. A esperança cresce quando o coração permanece perto da Palavra de Deus.

O crente pode ser provado, mas nunca abandonado. A fidelidade de Deus é mais forte do que a escuridão da hora.
      `,
      author: "Elias Lico",
      date: "2026-03-06",
      category: "Vida Espiritual",
      image: "https://picsum.photos/seed/hope-eternal/1400/900",
    },
    {
      id: "3",
      slug: "the-discipline-of-prayer",
      title: "A Disciplina da Oração",
      excerpt:
        "A oração não é apenas um hábito religioso. É o lugar secreto onde a alma aprende dependência, clareza e comunhão.",
      content: `
A oração é um dos atos mais simples e profundos da vida cristã. É simples porque todo crente pode orar. É profunda porque abre a vida interior a Deus.

Uma vida de oração não acontece por acidente. Exige intenção. Numa época distraída, a oração torna-se um ato de resistência contra o ruído e a pressa.

A oração molda a alma. Reordena desejos, expõe o orgulho, acalma o medo e cria espaço para gratidão. Não muda apenas circunstâncias; muda também quem ora.

Disciplina na oração não é frieza. É fidelidade. As orações mais ricas muitas vezes não são dramáticas, mas constantes.

Se a oração estiver difícil, começa com honestidade. Fala de forma simples. Volta amanhã. O ponto não é performance, mas relacionamento com Deus.
      `,
      author: "Elias Lico",
      date: "2026-03-07",
      category: "Devoção",
      image: "https://picsum.photos/seed/prayer-eternal/1400/900",
    }
  ],
};

export function getArticles(locale: string): Article[] {
  return locale === "pt" ? blogArticles.pt : blogArticles.en;
}

export function getArticleBySlug(locale: string, slug: string): Article | undefined {
  return getArticles(locale).find((article) => article.slug === slug);
}

export interface AdventistArticle {
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

const adventistArticlesData = {
  en: [
    {
      id: "a1",
      slug: "great-controversy",
      title: "The Great Controversy",
      excerpt:
        "The biblical worldview is not random or morally neutral. It is the unfolding history of a real conflict between truth and rebellion.",
      content: `
One of the strongest themes in Adventist theology is the great controversy. It gives coherence to Scripture and helps explain the moral tension of history.

Behind visible events lies a larger conflict between Christ and Satan, between truth and deception, between self-giving love and self-exalting pride.

The cross stands at the center of this controversy. There God answered rebellion not with force, but with sacrificial love. Calvary exposed both the cruelty of sin and the beauty of divine government.

The resurrection guarantees that the conflict has an outcome. The struggle continues in history, but the decisive victory already belongs to Christ.

This doctrine gives clarity, not panic. It teaches the believer to interpret history, resist deception and remain grounded in hope.
      `,
      author: "Elias Lico",
      date: "2026-03-13",
      category: "Doctrine",
      image: "https://picsum.photos/seed/adventist-1/1400/900",
    },
    {
      id: "a2",
      slug: "sabbath-as-gift",
      title: "The Sabbath as Gift",
      excerpt:
        "The Sabbath is more than a command. It is a gift of rest, identity, worship and joyful dependence on the Creator.",
      content: `
The Sabbath appears in Scripture first as gift, not burden. Before sin, before exhaustion, God separated a day for holy rest.

It reminds humanity that life is not sustained by work alone. We are creatures, not gods. We pause because God is Creator and Lord.

The Sabbath also has covenant meaning. It is a sign of belonging and a weekly testimony that identity is received before it is achieved.

In Christ, the Sabbath is restored to blessing. It is not oppression, but delight, worship and renewal.
      `,
      author: "Elias Lico",
      date: "2026-03-14",
      category: "Sabbath",
      image: "https://picsum.photos/seed/adventist-2/1400/900",
    },
    {
      id: "a3",
      slug: "sanctuary-and-christ",
      title: "The Sanctuary and Christ",
      excerpt:
        "The sanctuary reveals the seriousness of sin, the beauty of mediation and the continuing ministry of Christ for His people.",
      content: `
The sanctuary is one of the richest themes in Scripture. Through symbols and priestly ministry it teaches how a holy God makes a way for sinners to draw near.

Every part of the sanctuary points beyond itself to Christ. The sacrifice points to His death. The priest points to His mediation. The cleansing points to His work of judgment and restoration.

For Adventists, the heavenly ministry of Christ is not distant theology. It is present hope. Jesus ministers for His people now.

The sanctuary teaches that salvation is not only about a past event, but also about Christ’s continuing ministry on behalf of the church.
      `,
      author: "Elias Lico",
      date: "2026-03-15",
      category: "Sanctuary",
      image: "https://picsum.photos/seed/adventist-3/1400/900",
    },
    {
      id: "a4",
      slug: "three-angels-messages",
      title: "The Three Angels’ Messages",
      excerpt:
        "Revelation 14 presents a final call to worship the Creator, reject deception and stand faithfully with Christ.",
      content: `
The three angels’ messages stand at the heart of Adventist mission. They are not merely symbolic announcements, but a living call to the world.

The first angel calls humanity to fear God, give Him glory and worship the Creator. The second announces the fall of Babylon. The third warns against false allegiance and corrupted worship.

These messages are solemn, but they are also filled with gospel urgency. At the center stands the everlasting gospel.

For Adventists, this is not just doctrine for study. It is mission, identity and witness in the last phase of history.
      `,
      author: "Elias Lico",
      date: "2026-03-16",
      category: "Prophecy",
      image: "https://picsum.photos/seed/adventist-4/1400/900",
    }
  ],
  pt: [
    {
      id: "a1",
      slug: "great-controversy",
      title: "O Grande Conflito",
      excerpt:
        "A cosmovisão bíblica não é aleatória nem moralmente neutra. É a história de um conflito real entre verdade e rebelião.",
      content: `
Um dos temas mais fortes da teologia adventista é o grande conflito. Ele dá coerência à Escritura e ajuda a explicar a tensão moral da história.

Por trás dos acontecimentos visíveis existe um conflito maior entre Cristo e Satanás, entre verdade e engano, entre amor que se entrega e orgulho que se exalta.

A cruz está no centro desse conflito. Ali Deus respondeu à rebelião não com força, mas com amor sacrificial. O Calvário revelou tanto a crueldade do pecado quanto a beleza do governo divino.

A ressurreição garante que o conflito tem um desfecho. A luta continua na história, mas a vitória decisiva já pertence a Cristo.

Essa doutrina traz clareza, não pânico. Ensina o crente a interpretar a história, resistir ao engano e permanecer firme na esperança.
      `,
      author: "Elias Lico",
      date: "2026-03-13",
      category: "Doutrina",
      image: "https://picsum.photos/seed/adventist-1/1400/900",
    },
    {
      id: "a2",
      slug: "sabbath-as-gift",
      title: "O Sábado como Dom",
      excerpt:
        "O sábado é mais do que um mandamento. É um dom de descanso, identidade, adoração e dependência alegre do Criador.",
      content: `
O sábado aparece na Escritura primeiro como dom, não como peso. Antes do pecado, antes do cansaço, Deus separou um dia para descanso santo.

Ele lembra à humanidade que a vida não é sustentada apenas pelo trabalho. Somos criaturas, não deuses. Paramos porque Deus é Criador e Senhor.

O sábado também tem significado de aliança. É sinal de pertencimento e testemunho semanal de que a identidade é recebida antes de ser conquistada.

Em Cristo, o sábado é restaurado como bênção. Não é opressão, mas alegria, adoração e renovação.
      `,
      author: "Elias Lico",
      date: "2026-03-14",
      category: "Sábado",
      image: "https://picsum.photos/seed/adventist-2/1400/900",
    },
    {
      id: "a3",
      slug: "sanctuary-and-christ",
      title: "O Santuário e Cristo",
      excerpt:
        "O santuário revela a gravidade do pecado, a beleza da mediação e o ministério contínuo de Cristo por Seu povo.",
      content: `
O santuário é um dos temas mais ricos da Escritura. Através de símbolos e ministério sacerdotal ele ensina como um Deus santo faz caminho para que pecadores se aproximem.

Cada parte do santuário aponta além de si mesma para Cristo. O sacrifício aponta para Sua morte. O sacerdote aponta para Sua mediação. A purificação aponta para Sua obra de juízo e restauração.

Para os adventistas, o ministério celestial de Cristo não é teologia distante. É esperança presente. Jesus ministra agora em favor do Seu povo.

O santuário ensina que a salvação não trata apenas de um evento passado, mas também do ministério contínuo de Cristo em favor da igreja.
      `,
      author: "Elias Lico",
      date: "2026-03-15",
      category: "Santuário",
      image: "https://picsum.photos/seed/adventist-3/1400/900",
    },
    {
      id: "a4",
      slug: "three-angels-messages",
      title: "As Três Mensagens Angélicas",
      excerpt:
        "Apocalipse 14 apresenta um chamado final para adorar o Criador, rejeitar o engano e permanecer fiel a Cristo.",
      content: `
As três mensagens angélicas estão no centro da missão adventista. Não são apenas anúncios simbólicos, mas um chamado vivo ao mundo.

O primeiro anjo chama a humanidade a temer a Deus, dar-Lhe glória e adorar o Criador. O segundo anuncia a queda de Babilônia. O terceiro adverte contra falsa lealdade e adoração corrompida.

Essas mensagens são solenes, mas também cheias de urgência evangélica. No centro delas está o evangelho eterno.

Para os adventistas, isso não é apenas doutrina para estudo. É missão, identidade e testemunho na fase final da história.
      `,
      author: "Elias Lico",
      date: "2026-03-16",
      category: "Profecia",
      image: "https://picsum.photos/seed/adventist-4/1400/900",
    }
  ]
};

export function getAdventistArticles(locale: string): AdventistArticle[] {
  return locale === "pt" ? adventistArticlesData.pt : adventistArticlesData.en;
}

export function getAdventistArticleBySlug(
  locale: string,
  slug: string
): AdventistArticle | undefined {
  return getAdventistArticles(locale).find((article) => article.slug === slug);
}

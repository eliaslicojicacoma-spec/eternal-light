export interface AdventistCard {
  title: string;
  desc: string;
  image: string;
  slug: string;
}

const adventistCardsData = {
  en: [
    {
      title: "The Great Controversy",
      desc: "A biblical vision of the conflict between Christ and Satan throughout history.",
      image: "https://picsum.photos/seed/adventist-1/1200/800",
      slug: "great-controversy"
    },
    {
      title: "The Sabbath as Gift",
      desc: "Discovering the Sabbath as rest, worship and covenant delight.",
      image: "https://picsum.photos/seed/adventist-2/1200/800",
      slug: "sabbath-as-gift"
    },
    {
      title: "The Sanctuary and Christ",
      desc: "Understanding Christ’s priestly ministry through the sanctuary.",
      image: "https://picsum.photos/seed/adventist-3/1200/800",
      slug: "sanctuary-and-christ"
    },
    {
      title: "The Three Angels’ Messages",
      desc: "Why Revelation 14 remains central for mission and final faithfulness.",
      image: "https://picsum.photos/seed/adventist-4/1200/800",
      slug: "three-angels-messages"
    }
  ],
  pt: [
    {
      title: "O Grande Conflito",
      desc: "Uma visão bíblica do conflito entre Cristo e Satanás ao longo da história.",
      image: "https://picsum.photos/seed/adventist-1/1200/800",
      slug: "great-controversy"
    },
    {
      title: "O Sábado como Dom",
      desc: "Descobrindo o sábado como descanso, adoração e alegria da aliança.",
      image: "https://picsum.photos/seed/adventist-2/1200/800",
      slug: "sabbath-as-gift"
    },
    {
      title: "O Santuário e Cristo",
      desc: "Entendendo o ministério sacerdotal de Cristo através do santuário.",
      image: "https://picsum.photos/seed/adventist-3/1200/800",
      slug: "sanctuary-and-christ"
    },
    {
      title: "As Três Mensagens Angélicas",
      desc: "Por que Apocalipse 14 continua central para missão e fidelidade final.",
      image: "https://picsum.photos/seed/adventist-4/1200/800",
      slug: "three-angels-messages"
    }
  ]
};

export function getAdventistCards(locale: string): AdventistCard[] {
  return locale === "pt" ? adventistCardsData.pt : adventistCardsData.en;
}

export interface SocietyCard {
  title: string;
  desc: string;
  image: string;
  slug: string;
}

const societyCardsData = {
  en: [
    {
      title: "Faith & Politics",
      desc: "How believers can remain principled and biblically grounded in public life.",
      image: "https://picsum.photos/seed/society-politics/1200/800",
      slug: "faith-politics"
    },
    {
      title: "Family in a Fragmented Age",
      desc: "Recovering loyalty, affection and spiritual leadership in the home.",
      image: "https://picsum.photos/seed/society-family/1200/800",
      slug: "family-fragmented-age"
    },
    {
      title: "Youth, Identity and Pressure",
      desc: "Helping young people build identity in Christ in a culture of confusion.",
      image: "https://picsum.photos/seed/society-youth/1200/800",
      slug: "youth-identity-pressure"
    },
    {
      title: "Media, Attention and the Soul",
      desc: "How digital culture affects desire, focus and spiritual sensitivity.",
      image: "https://picsum.photos/seed/society-media/1200/800",
      slug: "media-attention-soul"
    }
  ],
  pt: [
    {
      title: "Fé e Política",
      desc: "Como os crentes podem permanecer firmes e bíblicos na vida pública.",
      image: "https://picsum.photos/seed/society-politics/1200/800",
      slug: "faith-politics"
    },
    {
      title: "Família em uma Era Fragmentada",
      desc: "Recuperando lealdade, afeto e liderança espiritual dentro do lar.",
      image: "https://picsum.photos/seed/society-family/1200/800",
      slug: "family-fragmented-age"
    },
    {
      title: "Juventude, Identidade e Pressão",
      desc: "Ajudando jovens a construir identidade em Cristo numa cultura confusa.",
      image: "https://picsum.photos/seed/society-youth/1200/800",
      slug: "youth-identity-pressure"
    },
    {
      title: "Mídia, Atenção e a Alma",
      desc: "Como a cultura digital afeta desejo, foco e sensibilidade espiritual.",
      image: "https://picsum.photos/seed/society-media/1200/800",
      slug: "media-attention-soul"
    }
  ]
};

export function getSocietyCards(locale: string): SocietyCard[] {
  return locale === "pt" ? societyCardsData.pt : societyCardsData.en;
}

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

export const articles: Article[] = [
  {
    id: '1',
    slug: 'beauty-of-grace',
    title: 'The Beauty of Grace',
    excerpt: 'Exploring the depths of divine favor...',
    content: 'Full content here...',
    author: 'Elias Lico',
    date: '2026-03-05',
    category: 'Theology',
    image: 'https://picsum.photos/seed/grace/1200/800',
  }
];

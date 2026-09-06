export type PortfolioItem = {
  id: number;
  title: string;
  categories: string[];
  photos: number;
  views: number;
  client: string;
  website?: string;
  author: string;
};

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Paris Fashion Week", categories: ["fashion"], photos: 15, views: 134, client: "Sirabella's Photography", website: "www.sirabella.ee", author: "John Smith" },
  { id: 2, title: "Fantastic Freckles", categories: ["fashion"], photos: 48, views: 438, client: "Sirabella's Photography", author: "John Smith" },
  { id: 3, title: "Summer Spread", categories: ["portraits"], photos: 33, views: 566, client: "Sirabella's Photography", author: "John Smith" },
  { id: 4, title: "Sit Back and Relax", categories: ["portraits"], photos: 152, views: 449, client: "Sirabella's Photography", author: "John Smith" },
  { id: 5, title: "Dad's Day", categories: ["portraits"], photos: 9, views: 67, client: "Sirabella's Photography", website: "www.sirabella.ee", author: "John Smith" },
  { id: 6, title: "Say Goodbye To Autumn", categories: ["outdoor"], photos: 211, views: 890, client: "Sirabella's Photography", author: "John Smith" },
  { id: 7, title: "Beauty & Fashion", categories: ["outdoor"], photos: 153, views: 672, client: "Sirabella's Photography", author: "John Smith" },
  { id: 8, title: "Fabulous Fog", categories: ["outdoor"], photos: 347, views: 1349, client: "Sirabella's Photography", author: "John Smith" },
  { id: 9, title: "Monday's Monochromes", categories: ["black-and-white"], photos: 15, views: 134, client: "Sirabella's Photography", author: "John Smith" },
  { id: 10, title: "Magically Surreal", categories: ["black-and-white"], photos: 62, views: 850, client: "Sirabella's Photography", website: "www.sirabella.ee", author: "John Smith" },
];

export type SingleShotItem = {
  id: number;
  title: string;
  category: string;
  favorites: number;
  imageUrl: string;
  aspectRatio?: string;
};

export const portfolioSingleShots: SingleShotItem[] = [
  {
    id: 1,
    title: 'Lana Melray',
    category: 'fashion',
    favorites: 69,
    aspectRatio: 'aspect-[2/3]',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Meric ac Setre',
    category: 'fashion',
    favorites: 56,
    aspectRatio: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Nertes Mavera Tatum',
    category: 'portraits',
    favorites: 79,
    aspectRatio: 'aspect-[2/3]',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Kazek Maites',
    category: 'portraits',
    favorites: 188,
    aspectRatio: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Embila Sent Tarum',
    category: 'portraits',
    favorites: 41,
    aspectRatio: 'aspect-[9/16]',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Neveck Kanis',
    category: 'outdoor',
    favorites: 97,
    aspectRatio: 'aspect-square',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Silvia Morais',
    category: 'fashion',
    favorites: 112,
    aspectRatio: 'aspect-[3/4]',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Wild Heart',
    category: 'outdoor',
    favorites: 84,
    aspectRatio: 'aspect-[9/16]',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Studio Vignette',
    category: 'black-and-white',
    favorites: 143,
    aspectRatio: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Golden Hour',
    category: 'outdoor',
    favorites: 210,
    aspectRatio: 'aspect-[3/4]',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Monochrome Gaze',
    category: 'black-and-white',
    favorites: 95,
    aspectRatio: 'aspect-[2/3]',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Urban Solitude',
    category: 'portraits',
    favorites: 128,
    aspectRatio: 'aspect-[4/3]',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
  },
];

export const portfolioFilters = ["all", "fashion", "portraits", "black-and-white", "outdoor"];
export type PortfolioItem = {
    id: number;
    title: string;
    categories: string[];
    photos: number;
    views: number;
    client: string;
    website ? : string;
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
};

export const portfolioSingleShots: SingleShotItem[] = [
  {
    id: 1,
    title: 'Lana Melray',
    category: 'fashion',
    favorites: 69,
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Meric ac Setre',
    category: 'fashion',
    favorites: 56,
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Nertes Mavera Tatum',
    category: 'portraits',
    favorites: 79,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Kazek Maites',
    category: 'portraits',
    favorites: 188,
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Embila Sent Tarum',
    category: 'portraits',
    favorites: 41,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Neveck Kanis',
    category: 'outdoor',
    favorites: 97,
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop',
  },
];


export const portfolioFilters = ["all", "fashion", "portraits", "black-and-white", "outdoor"];
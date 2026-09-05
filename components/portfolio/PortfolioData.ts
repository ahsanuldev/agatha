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

// Detail shots shown on a portfolio-single page — every single page in the
// original theme shared the same demo image set with different titles.
export const portfolioSingleShots = [
    { title: "Lana Melray", category: "fashion", favorites: 69 },
    { title: "Meric ac Setre", category: "fashion", favorites: 56 },
    { title: "Nertes Mavera Tatum", category: "portraits", favorites: 79 },
    { title: "Kazek Maites", category: "portraits", favorites: 188 },
    { title: "Embila Sent Tarum", category: "portraits", favorites: 41 },
    { title: "Neveck Kanis", category: "outdoor", favorites: 97 },
    { title: "Satera Vatum", category: "outdoor", favorites: 254 },
    { title: "Etna Manick", category: "outdoor", favorites: 113 },
    { title: "Tzitra Vat Torres", category: "black & white", favorites: 80 },
    { title: "Narrat Lacus", category: "black & white", favorites: 163 },
];

export const portfolioFilters = ["all", "fashion", "portraits", "black-and-white", "outdoor"];
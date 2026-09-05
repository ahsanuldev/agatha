export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Single Image', href: '/' },
      { label: 'Slideshow', href: '/slideshow' },
      { label: 'Video Background', href: '/video-background' },
      { label: 'Photo Wall', href: '/photo-wall' },
    ],
  },
  {
    label: 'Gallery',
    href: '/portfolio',
    children: [
      { label: 'Carousel', href: '/portfolio' },
      { label: 'Carousel Full', href: '/portfolio/carousel-full' },
      { label: 'Slideshow', href: '/portfolio/slideshow' },
      { label: 'Grid 3 Columns', href: '/portfolio/grid-3col' },
      { label: 'Masonry 3 Columns', href: '/portfolio/masonry-3col' },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio/all',
    children: [
      { label: 'All Work', href: '/portfolio/all' },
      { label: 'Fashion', href: '/portfolio/fashion' },
      { label: 'Portraits', href: '/portfolio/portraits' },
      { label: 'Outdoor', href: '/portfolio/outdoor' },
      { label: 'Black & White', href: '/portfolio/black-and-white' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'All Articles', href: '/blog' },
      { label: 'Single Post', href: '/blog/the-truth-about-photography' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'About Me', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Login/Register', href: '/login' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const offCanvasLinks: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const instagramThumbs = Array.from({ length: 9 }, (_, i) => i + 1);

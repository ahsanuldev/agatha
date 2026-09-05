export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'All Work', href: '/portfolio' },
      { label: 'Fashion', href: '/portfolio' },
      { label: 'Portraits', href: '/portfolio' },
      { label: 'Featured: Portfolio Single v.5', href: '/portfolio/5' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'All Articles', href: '/blog' },
      { label: 'The Truth About Photography', href: '/blog/the-truth-about-photography' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'About Me', href: '/about-me' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Login/Register', href: '/login-register' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const offCanvasLinks: NavLink[] = [
  { label: 'About Us', href: '/about-me' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const instagramThumbs = Array.from({ length: 9 }, (_, i) => i + 1);

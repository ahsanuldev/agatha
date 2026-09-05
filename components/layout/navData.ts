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
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio/all' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Me', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Login/Register', href: '/login' },
  { label: 'Contact', href: '/contact' },
];

export const offCanvasLinks: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const instagramThumbs = Array.from({ length: 9 }, (_, i) => i + 1);

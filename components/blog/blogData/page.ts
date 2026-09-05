export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  type: 'image' | 'carousel' | 'video';
  imageUrl?: string;
  gallery?: string[];
  videoUrl?: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'one-day-fashion-shoot',
    title: 'One Day Fashion Shoot',
    date: '29 Jan 2016',
    author: 'Henry Harrison',
    category: 'black & white',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum.',
    content: [
      "A single afternoon behind the scenes of a fast-turnaround fashion shoot — what worked, what didn't, and why the best shot is rarely the first one.",
      'Working against a tight window means every setup has to earn its place. We planned three looks, two locations, and one backup plan for weather.',
    ],
  },
  {
    slug: 'history-of-photography',
    title: 'The History of Photography',
    date: '12 Jan 2016',
    author: 'Anna Verik',
    category: 'outdoors',
    type: 'carousel',
    gallery: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1400&auto=format&fit=crop',
    ],
    excerpt:
      'Omnesque apeirian prodesset per ad, est ad molestie epicurei disputando. Mei assum impetus pertinacia ea, qui id congue timeam discere. Vocent iracundia consetetur duo te. Facer summo temporibus cu qui.',
    content: [
      'From the camera obscura to the digital sensor — a short tour of the ideas and inventions that shaped how we capture light.',
      'Each leap in the medium changed not just how images were made, but what people chose to photograph in the first place.',
    ],
  },
  {
    slug: 'travel-photography-tips',
    title: 'Travel Photography Tips',
    date: '06 Jan 2016',
    author: 'Joseph Reeves',
    category: 'portraits',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/TSrn-eFxcbs',
    excerpt:
      'Ad nec legimus mediocritatem. Nihil semper graecis ea sea, quo enim oporteat invenire ea. Vero corpora voluptua an pro, no accusam explicari vim, te ridens nemore periculis vis. Ea ipsum neglegentur cum.',
    content: [
      'Pack light, shoot early, and always talk to your subject first. A few field-tested habits for photographing on the move.',
      'The best travel shots usually come from slowing down, not speeding up — give a place time before you point a lens at it.',
    ],
  },
  {
    slug: 'night-photography',
    title: 'Night Photography',
    date: '03 Jan 2016',
    author: 'John Doe',
    category: 'fashion',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'Viris semper epicuri et mel, in unum definiebas pro, id pri nihil elaboraret. Cu saperet graecis mediocritatem qui, vix aperiam explicari ad, sea ne ornatus pertinax. Ei mea dolor legimus ocurreret.',
    content: [
      'Low light rewards patience. Notes on exposure, tripods, and finding the right ambient light to shoot against after dark.',
      "A slower shutter isn't a compromise — it's a different way of describing motion and time in a single frame.",
    ],
  },
  {
    slug: 'the-truth-about-photography',
    title: 'The Truth About Photography',
    date: '01 Jan 2016',
    author: 'John Smith',
    category: 'fashion',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'Has cu brute vocibus lucilius, ne dignissim ullamcorper nec. Nullam omnesque ne eum, integre deleniti eu eum, et his equidem assueverit scribentur. In hinc mutat perpetua sea. No mel veniam timeam.',
    content: [
      'A photograph is always a choice about what to leave out. On honesty, framing, and the myth of the unedited image.',
      'Every frame excludes far more than it includes — the choice of what stays outside the edges is as deliberate as anything inside them.',
    ],
  },
];


export const blogCategories = [
  { label: 'Fashion', count: 26 },
  { label: 'Portraits', count: 54 },
  { label: 'Black & White', count: 17 },
  { label: 'Outdoor', count: 19 },
  { label: 'Varia', count: 67 },
];

export const blogTags = [
  'portfolio',
  'minimal',
  'agency',
  'creatives',
  'freelancers',
  'design',
  'responsive',
  'creative',
  'blog',
  'black & white',
];

export const blogComments = [
  {
    author: 'John Doe',
    date: '01 Feb 2016 · 12:00am',
    text: 'A photograph excludes more than it includes — that framing changed how I read the rest of this piece.',
  },
  {
    author: 'Katie Ryan',
    date: '01 Feb 2016 · 12:02am',
    text: "This is the clearest case I've read for why 'unedited' is a marketing term, not a technical one.",
  },
  {
    author: 'Ashton Brown',
    date: '01 Feb 2016 · 12:12am',
    text: "Agreed on the framing point, though I'd push back on how far you take the argument about intent.",
  },
];

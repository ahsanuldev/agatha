export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'one-day-fashion-shoot',
    title: 'One Day Fashion Shoot',
    date: '29 Jan 2016',
    author: 'Henry Harrison',
    category: 'black & white',
    excerpt:
      "A single afternoon behind the scenes of a fast-turnaround fashion shoot — what worked, what didn't, and why the best shot is rarely the first one.",
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
    excerpt:
      'From the camera obscura to the digital sensor — a short tour of the ideas and inventions that shaped how we capture light.',
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
    excerpt:
      'Pack light, shoot early, and always talk to your subject first. A few field-tested habits for photographing on the move.',
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
    excerpt:
      'Low light rewards patience. Notes on exposure, tripods, and finding the right ambient light to shoot against after dark.',
    content: [
      'Low light rewards patience. Notes on exposure, tripods, and finding the right ambient light to shoot against after dark.',
      "A slower shutter isn't a compromise — it's a different way of describing motion and time in a single frame.",
    ],
  },
  {
    slug: 'the-truth-about-photography',
    title: 'The Truth About Photography',
    date: '01 Jan 2016',
    author: 'Brayan Peterson',
    category: 'fashion',
    excerpt:
      'A photograph is always a choice about what to leave out. On honesty, framing, and the myth of the unedited image.',
    content: [
      'A photograph is always a choice about what to leave out. On honesty, framing, and the myth of the unedited image.',
      'Every frame excludes far more than it includes — the choice of what stays outside the edges is as deliberate as anything inside them.',
      'None of this makes a photograph dishonest. It just means the camera was never a neutral witness to begin with, and pretending otherwise misses what makes the medium interesting.',
      "The most useful question isn't whether an image is true, but what it's arguing for — and whether the photographer is willing to say so.",
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

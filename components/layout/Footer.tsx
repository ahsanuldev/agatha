import Link from 'next/link';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Pinterest', href: 'https://www.pinterest.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; Agatha / All rights reserved</p>
          <ul className="flex items-center gap-5 text-gray-400">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={`Follow us on ${s.label}`}
                  className="hover:text-white transition-colors text-xs uppercase tracking-wide2"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:your@email.com"
                title="Contact Us"
                className="hover:text-white transition-colors text-xs uppercase tracking-wide2"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;

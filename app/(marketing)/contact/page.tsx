import type { Metadata } from 'next';
import ContactForm from '@/components/contact/page';


export const metadata: Metadata = { title: 'Contact Us — Agatha Photography' };

const ContactPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-14">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4 text-sm text-gray-300">
          <p className="font-medium text-white">Telio, Inc.</p>
          <p className="text-gray-400 leading-relaxed">
            1355 Market Street, Suite 900
            <br />
            San Francisco, CA 94103
          </p>
          <p className="text-gray-400">(123) 456-7890</p>
          <p>
            <a
              href="mailto:company@email.com"
              className="text-gray-300 hover:text-white underline"
            >
              company@email.com
            </a>
          </p>
          <ul className="flex gap-4 pt-2">
            {['Facebook', 'Twitter', 'Pinterest', 'Instagram'].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wide2"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg">Don&rsquo;t be shy, tell us what&rsquo;s on your mind.</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Whether it's a project inquiry, a licensing question, or something else entirely —
            send it over and we'll get back to you.
          </p>
        </div>
      </div>

      <ContactForm />

      <div className="aspect-[16/6] bg-neutral-900 flex items-center justify-center text-xs text-gray-600 uppercase tracking-wide2">
        Map placeholder — embed Google Maps here
      </div>
    </section>
  );
};

export default ContactPage;


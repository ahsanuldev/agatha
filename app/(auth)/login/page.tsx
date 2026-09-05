import type { Metadata } from 'next';
import LoginRegisterTabs from '@/components/login/page';


export const metadata: Metadata = { title: 'Login / Register — Agatha Photography' };

const LoginRegisterPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <LoginRegisterTabs />
      </div>

      <aside className="space-y-4">
        <h3 className="text-xs uppercase tracking-wide2 text-gray-400">Information</h3>
        <hr className="border-white/10" />
        <p className="text-sm text-gray-400 leading-relaxed">
          Create an account to save favorite photos, follow new uploads, and get early access to
          print releases.
        </p>
        <a
          href="#"
          className="block text-center text-xs uppercase tracking-wide2 border border-white/30 py-3 hover:bg-white hover:text-black transition-colors"
        >
          More Info
        </a>
      </aside>
    </section>
  );
};

export default LoginRegisterPage;


import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between overflow-x-hidden relative bg-[#131313]">
      <Header />
      <main className="flex-1 flex flex-col pt-16 relative">{children}</main>
      <Footer />
    </div>
  );
}

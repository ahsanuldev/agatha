import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-col justify-between overflow-hidden relative bg-[#0B0B0B]">
      <Header />
      <main className="flex-1 flex flex-col pt-16 overflow-hidden relative">{children}</main>
      <Footer />
    </div>
  );
}

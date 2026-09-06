import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import LoginRegisterTabs from '@/components/login/page';

export const metadata: Metadata = {
  title: 'Login / Register — Agatha Photography',
  description: 'Login or create an account on Agatha Photography.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#131313] text-white">
      {/* Page Header */}
      <PageHeader
        title="LOGIN / REGISTER"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Page - Login/Register' },
        ]}
        bgImage="https://images.unsplash.com/photo-1511468102400-883d6ea28755?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Content Section matching Agatha Compact Container & Sidebar */}
      <section id="content-section" className="-mt-[80px] md:-mt-[100px] relative z-10 w-full pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1320px] mx-auto bg-[#0b0b0b] border border-neutral-800/80 rounded-[6px] p-6 md:p-[45px] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 font-mono">
              
              {/* Left Column: Login/Register Tabs & Form */}
              <div className="col-left md:col-span-8 font-mono">
                <LoginRegisterTabs />
              </div>

              {/* Right Column: Information Sidebar Widget */}
              <div className="col-right md:col-span-4 font-mono">
                <div className="sidebar sidebar-right space-y-8 pl-0 md:pl-8 lg:pl-10 md:border-l md:border-dotted md:border-[#2d2d2d]">
                  <div>
                    <h3 className="text-xl md:text-2xl font-mono uppercase text-[#e0e0e0] font-light tracking-normal mb-1">
                      Information
                    </h3>
                    <div className="text-2xl md:text-3xl font-mono text-[#888888] mb-4 select-none leading-none">~</div>
                    <p className="text-[13px] text-[#b0b0b0] leading-[1.85] font-mono mb-4">
                      Create an account to save favorite photos, follow new uploads, and get early access to print releases.
                    </p>
                    <p className="text-[13px] text-[#b0b0b0] leading-[1.85] font-mono">
                      Quos nemo alias architecto, accusantium tempora attes nam consequuntur ab sunt.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#212121] hover:bg-[#2a2a2a] border border-neutral-700 text-white text-[12px] font-mono uppercase tracking-normal transition-all duration-200 shadow-md cursor-pointer w-full text-center"
                    >
                      More Info...
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

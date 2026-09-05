import Link from "next/link";

export default function Hero() {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/home-hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-xl text-center bg-black/40 px-8 py-12 md:px-16 md:py-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide2 mb-6">
            Agatha&rsquo;s Photography
          </h1>
          <p className="hidden sm:block text-gray-300 text-sm leading-relaxed mb-10">
            A quiet study of light, motion, and moments worth keeping — portraits, landscapes, and
            stories told frame by frame.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3 border border-white text-xs uppercase tracking-wide2 hover:bg-white hover:text-black transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-6 left-6 z-10 text-xs text-gray-400">
        Made with <span className="text-red-500">&hearts;</span>
      </div>
    </section>
    </>
  );
}

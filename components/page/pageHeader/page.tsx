type Crumb = {
  label: string;
  href?: string;
};

const PageHeader = ({ title, crumbs }: { title: string; crumbs: Crumb[] }) => {
  return (
    <section className="relative h-64 md:h-80 pt-20 flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-4xl font-light tracking-wide2 mb-4">{title}</h1>

        <ol className="flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-wide2">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}

              {c.href ? (
                <a href={c.href} className="hover:text-white transition-colors">
                  {c.label}
                </a>
              ) : (
                <span className="text-gray-200">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PageHeader;

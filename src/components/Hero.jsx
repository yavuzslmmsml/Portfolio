import RevealSection from './RevealSection';

const tags = ['Cloud Mimarisi', 'Backend ve API', 'Yapay Zeka Otomasyonu'];

export default function Hero() {
  return (
    <RevealSection
      id="home"
      className="relative scroll-mt-6 overflow-hidden border-b border-[#1E2329]/5 bg-[#FFFFFB] transition-colors duration-300 ease-in-out dark:border-white/5 dark:bg-[#1E2329]"
    >
      <div
        className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#1E2329]/5 to-transparent dark:from-[#0B0E11]/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-kalam text-4xl font-bold leading-tight tracking-tight text-[#1E2329] sm:text-5xl lg:text-6xl dark:text-white">
            Cloud altyapıları ve backend sistemler üzerine kendimi geliştiriyorum.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#1E2329]/70 sm:text-lg dark:text-zinc-200">
            Cloud deneyimimi; API tasarımı, otomasyon ve ölçeklenebilir sistem
            mantığıyla güçlendiriyorum.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1E2329]/15 bg-[#FFFFFB] p-6 shadow-md shadow-[#1E2329]/10 transition-colors duration-300 ease-in-out dark:border-white/15 dark:bg-[#1E2329] dark:shadow-black/25">
          <div className="flex items-center justify-between pb-5">
            <div>
              <h2 className="mt-1 text-xl font-semibold text-[#1E2329] dark:text-white">
                Gelişim yönü
              </h2>
            </div>
            <span className="rounded-md bg-[#FCD535] px-3 py-1 text-xs font-semibold text-[#1E2329]">
              2026
            </span>
          </div>

          <div className="mt-2 grid gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center justify-between rounded-2xl border border-[#1E2329]/10 bg-[#FFFFFB] px-4 py-4 shadow-sm shadow-[#1E2329]/5 transition-colors duration-300 ease-in-out hover:border-[#FCD535]/80 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20 dark:hover:border-[#FCD535]/80"
              >
                <span className="text-sm font-semibold text-[#1E2329] dark:text-zinc-100">
                  {tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#FCD535]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

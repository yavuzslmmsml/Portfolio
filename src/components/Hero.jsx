import RevealSection from './RevealSection';

const tags = ['Cloud Mimarisi', 'Backend ve API', 'Yapay Zeka Otomasyonu'];

export default function Hero() {
  return (
    <RevealSection
      id="home"
      className="relative scroll-mt-6 overflow-hidden border-b border-[#1E2329]/10 bg-white transition-colors duration-300 ease-in-out dark:border-white/10 dark:bg-[#1E2329]"
    >
      <div
        className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#1E2329]/5 to-transparent dark:from-[#0B0E11]/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-[#FCD535] px-4 py-2 text-sm font-semibold text-[#1E2329] shadow-sm">
            Junior Cloud Specialist
          </p>
          <h1 className="font-kalam text-4xl font-bold leading-tight tracking-tight text-[#1E2329] sm:text-5xl lg:text-6xl dark:text-white">
            Cloud altyapıları ve backend sistemler üzerine kendimi geliştiriyorum.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#1E2329]/70 sm:text-lg dark:text-zinc-200">
            Cloud deneyimimi; API tasarımı, otomasyon ve ölçeklenebilir sistem
            mantığıyla güçlendiriyorum.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1E2329] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-[#FCD535] hover:text-[#1E2329] focus:outline-none focus:ring-2 focus:ring-[#FCD535] focus:ring-offset-4 dark:bg-[#FCD535] dark:text-[#1E2329] dark:hover:bg-white dark:focus:ring-offset-[#1E2329]"
            >
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-[#F5F5F5] p-6 transition-colors duration-300 ease-in-out hover:bg-[#F2F2F2] dark:border dark:border-white/10 dark:bg-[#1E2329] dark:hover:border-[#FCD535]">
          <div className="flex items-center justify-between pb-5">
            <div>
              <p className="text-sm font-semibold text-[#FCD535]">Odak alanlarım</p>
              <h2 className="mt-1 text-xl font-semibold text-[#1E2329] dark:text-white">
                Teknik gelişim yönü
              </h2>
            </div>
            <span className="rounded-full bg-[#FCD535] px-3 py-1 text-xs font-semibold text-[#1E2329]">
              2026
            </span>
          </div>

          <div className="mt-2 grid gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 transition-colors duration-300 ease-in-out dark:border dark:border-white/10 dark:bg-white/5"
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

import RevealSection from './RevealSection';

export default function About() {
  return (
    <RevealSection
      id="about"
      className="scroll-mt-6 bg-white py-20 transition-colors duration-300 ease-in-out sm:py-24 dark:bg-[#1E2329]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
            Hakkımda
          </p>
          <h2 className="mt-4 font-kalam text-3xl font-bold leading-tight tracking-tight text-[#1E2329] sm:text-4xl dark:text-white">
            Sistemleri anlamaya ve doğru mimariyle geliştirmeye odaklanıyorum.
          </h2>
        </div>

        <div className="text-base leading-8 text-[#1E2329]/70 sm:mt-11 sm:text-lg lg:mt-12 dark:text-zinc-200">
          <p>
            Ben Yavuz Selim Muşmul. Cloud alanına odaklanıyor; sistemleri
            yalnızca kullanmayı değil, çalışma mantığını anlamayı ve tasarlamayı
            önemsiyorum. Backend servisler, API tasarımı ve mimari kararlar
            ilgimi çeken ana konular. Öğrenme sürecimi küçük ama gerçek sistem
            mantığı taşıyan projelerle ilerletiyorum.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}

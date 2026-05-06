import RevealSection from './RevealSection';
import aboutProfile from '../assets/about-profile.png';

export default function About() {
  return (
    <RevealSection
      id="about"
      className="scroll-mt-6 bg-[#FFFFFB] py-20 transition-colors duration-300 ease-in-out sm:py-24 dark:bg-[#1E2329]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
            Hakkımda
          </p>
          <h2 className="mt-4 font-kalam text-3xl font-bold leading-tight tracking-tight text-[#1E2329] sm:text-4xl dark:text-white">
            Sistemleri anlamaya ve doğru mimariyle geliştirmeye odaklanıyorum.
          </h2>
          <p className="mt-8 text-base leading-8 text-[#1E2329]/70 sm:text-lg dark:text-zinc-200">
            Ben Yavuz Selim Muşmul. Cloud alanına odaklanıyor; sistemleri
            yalnızca kullanmayı değil, çalışma mantığını anlamayı ve tasarlamayı
            önemsiyorum. Backend servisler, API tasarımı ve mimari kararlar
            ilgimi çeken ana konular. Öğrenme sürecimi küçük ama gerçek sistem
            mantığı taşıyan projelerle ilerletiyorum.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-4 border-[#FCD535] shadow-2xl shadow-[#1E2329]/20 sm:max-w-[420px] dark:shadow-black/40">
            <img
              src={aboutProfile}
              alt="Yavuz Selim Muşmul kod yazarken illüstrasyon"
              className="h-full w-full scale-[1.035] object-cover"
            />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

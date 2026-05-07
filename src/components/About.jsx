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
          
          <p className="mt-8 text-base leading-8 text-[#1E2329]/70 sm:text-lg dark:text-zinc-200">Merhaba, ben Yavuz Selim Muşmul.</p>
          <p className="mt-8 text-base leading-8 text-[#1E2329]/70 sm:text-lg dark:text-zinc-200">
            Cloud alanına odaklanan, 
            sistemleri yalnızca kullanmakla kalmayıp doğru mimarilerle tasarlamayı önemseyen bir geliştiriciyim. 
            Özellikle backend servisleri, API tasarımı ve ölçeklenebilir sistem mimarileri üzerinde yoğunlaşıyorum. Öğrenme sürecimi; gerçek dünya senaryolarını temel alan, teknik olarak anlamlı ve sürdürülebilir projeler geliştirerek ilerletiyorum.
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

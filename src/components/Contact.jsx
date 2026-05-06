import envelopeIcon from '../assets/envelope.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import RevealSection from './RevealSection';

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yavuzselimmsml/', target: '_blank', icon: linkedinIcon },
  { label: 'GitHub', href: 'https://github.com/yavuzslmmsml', target: '_blank', icon: githubIcon },
  { label: 'E-posta', href: 'mailto:yavuzselimmsml@gmail.com', icon: envelopeIcon },
];

export default function Contact() {
  return (
    <RevealSection
      id="contact"
      className="scroll-mt-6 border-t border-[#1E2329]/10 bg-white py-20 text-[#1E2329] transition-colors duration-300 ease-in-out sm:py-24 dark:border-white/10 dark:bg-[#1E2329] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
              İletişim
            </p>
            <h2 className="mt-4 font-kalam text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Teknik fikirler ve iş birlikleri için iletişime açığım.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#1E2329]/70 dark:text-zinc-200">
              Cloud, backend veya otomasyon odağındaki projeler için bağlantı
              kurabilir; teknik bir sohbet başlatabiliriz.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#1E2329]/10 bg-[#1E2329] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-[#FCD535] hover:text-[#1E2329] focus:outline-none focus:ring-2 focus:ring-[#FCD535] focus:ring-offset-4 dark:border-white/10 dark:bg-[#FCD535] dark:text-[#1E2329] dark:hover:bg-white dark:focus:ring-offset-[#1E2329]"
                >
                  <img
                    src={link.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 brightness-0 invert transition duration-300 ease-in-out group-hover:invert-0 dark:invert-0"
                  />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

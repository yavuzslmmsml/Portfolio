import RevealSection from './RevealSection';

const skills = [
  {
    title: 'Cloud ve Mimari',
    items: ['Huawei Cloud', 'Azure', 'VPC/VPN', 'Load Balancer', 'Ölçeklenebilirlik'],
  },
  {
    title: 'Backend ve API',
    items: ['API tasarımı', 'Veri akışı', 'Servis mantığı', 'Sistem entegrasyonu'],
  },
  {
    title: 'Yapay Zeka ve Otomasyon',
    items: ['AI API servisleri', 'API orkestrasyonu', 'n8n', 'İş akışı otomasyonu'],
  },
  {
    title: 'Araçlar',
    items: ['GitHub', 'VS Code', 'Linux', 'React/Vite', 'Temel CI/CD'],
  },
];

export default function Skills() {
  return (
    <RevealSection
      id="skills"
      className="scroll-mt-6 border-b border-[#1E2329]/5 bg-[#FFFFFB] pb-20 pt-10 text-[#1E2329] transition-colors duration-300 ease-in-out sm:pb-24 sm:pt-12 dark:border-white/5 dark:bg-[#1E2329] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
            Yetenekler
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-[#1E2329]/15 bg-[#FFFFFB] p-6 shadow-md shadow-[#1E2329]/10 transition-colors duration-300 ease-in-out dark:border-white/15 dark:bg-[#1E2329] dark:shadow-black/25"
            >
              <h3 className="text-lg font-semibold text-[#1E2329] dark:text-white">
                {skill.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#1E2329]/15 px-3 py-2 text-sm font-medium text-[#1E2329]/70 transition-colors duration-300 ease-in-out hover:border-[#FCD535]/80 hover:text-[#1E2329] dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-[#FCD535]/70 dark:hover:text-[#FCD535]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

import RevealSection from './RevealSection';

const projects = [
  {
    title: 'Yapay Zeka Servis Entegrasyonları',
    description:
      'Yapay zeka servislerini sistem akışlarına entegre etmeye ve veri akışını yönetmeye odaklanan çalışma alanı.',
    technologies: ['AI API', 'Backend', 'İş Akışı'],
  },
  {
    title: 'Otomasyon Mini Projeleri',
    description:
      'Tekrar eden teknik süreçleri API orkestrasyonu ve iş akışı mantığıyla düzenleyen küçük projeler.',
    technologies: ['n8n', 'API', 'Orkestrasyon'],
  },
];

export default function Projects() {
  return (
    <RevealSection
      id="projects"
      className="scroll-mt-6 bg-white py-20 transition-colors duration-300 ease-in-out sm:py-24 dark:bg-[#1E2329]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
              Projeler
            </p>
            <h2 className="mt-4 font-kalam text-3xl font-bold leading-tight tracking-tight text-[#1E2329] sm:text-4xl dark:text-white">
              Gelişim aşamasındaki teknik projeler.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[300px] flex-col rounded-2xl border border-[#1E2329]/10 bg-white p-6 transition-colors duration-300 ease-in-out hover:border-[#FCD535] dark:border-white/10 dark:bg-[#1E2329]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-[#1E2329] dark:text-white">
                  {project.title}
                </h3>
                <span className="shrink-0 rounded-full bg-[#FCD535] px-3 py-1 text-xs font-semibold text-[#1E2329]">
                  Yakında
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-[#1E2329]/70 dark:text-zinc-200">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-[#1E2329] px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-[#1E2329]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

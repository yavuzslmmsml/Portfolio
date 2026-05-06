import RevealSection from './RevealSection';
import azureLogo from '../assets/skills/azure.png';
import chatgptLogo from '../assets/skills/chatgpt.png';
import csharpLogo from '../assets/skills/csharp.png';
import githubLogo from '../assets/skills/github.svg';
import huaweiLogo from '../assets/skills/huawei.png';
import n8nLogo from '../assets/skills/n8n.png';
import phpLogo from '../assets/skills/php.png';
import reactLogo from '../assets/skills/react.png';

const sliderSkills = [
  { name: 'Huawei Cloud', logo: huaweiLogo },
  { name: 'Azure', logo: azureLogo },
  { name: 'React', logo: reactLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'ChatGPT', logo: chatgptLogo },
  { name: 'n8n', logo: n8nLogo },
  { name: 'GitHub', logo: githubLogo },
];

export default function SkillSlider() {
  return (
    <RevealSection
      className="overflow-hidden bg-white py-10 transition-colors duration-300 ease-in-out dark:bg-[#1E2329]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FCD535]">
              Teknolojiler
            </p>
            <h2 className="mt-2 font-kalam text-2xl font-bold text-[#1E2329] dark:text-white">
              Kullandığım ve geliştirdiğim alanlar
            </h2>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-[#1E2329]/10 py-5 dark:border-white/10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#1E2329]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#1E2329]" />

        <div className="skill-slider-track flex w-max">
          {[0, 1, 2, 3].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-4 pr-4"
              aria-hidden={group === 1}
            >
              {sliderSkills.map((skill) => (
                <div
                  key={`${group}-${skill.name}`}
                  className="flex h-24 w-44 items-center justify-center rounded-md border border-[#1E2329]/10 bg-white px-6 py-4 shadow-sm transition-colors duration-300 ease-in-out hover:border-[#FCD535] dark:border-white/10 dark:bg-white dark:hover:border-[#FCD535]"
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

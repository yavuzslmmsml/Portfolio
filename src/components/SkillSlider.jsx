import RevealSection from './RevealSection';
import azureLogo from '../assets/skills/azure.png';
import chatgptLogo from '../assets/skills/chatgpt.png';
import csharpLogo from '../assets/skills/csharp.png';
import githubLogo from '../assets/skills/github.svg';
import huaweiLogo from '../assets/skills/huawei.png';
import n8nLogo from '../assets/skills/n8n.png';
import postgresqlLogo from '../assets/skills/postgresql-wordmark.svg';
import phpLogo from '../assets/skills/php.png';
import reactLogo from '../assets/skills/react-wordmark.svg';

const sliderSkills = [
  { name: 'Huawei Cloud', logo: huaweiLogo, wide: true },
  { name: 'Azure', logo: azureLogo },
  { name: 'React', logo: reactLogo, wide: true },
  { name: 'PHP', logo: phpLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'ChatGPT', logo: chatgptLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo, wide: true },
  { name: 'n8n', logo: n8nLogo },
  { name: 'GitHub', logo: githubLogo },
];

export default function SkillSlider() {
  return (
    <RevealSection
      className="overflow-hidden bg-[#FFFFFB] py-3 transition-colors duration-300 ease-in-out dark:bg-[#1E2329]"
    >
      <div className="relative overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFFFFB] to-transparent dark:from-[#1E2329]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFFFFB] to-transparent dark:from-[#1E2329]" />

        <div className="skill-slider-track flex w-max">
          {[0, 1, 2, 3].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-14 pr-14"
              aria-hidden={group === 1}
            >
              {sliderSkills.map((skill) => (
                <div
                  key={`${group}-${skill.name}`}
                  className={`flex h-20 ${skill.wide ? 'w-56' : 'w-36'} items-center justify-center`}
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

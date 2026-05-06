import RevealSection from './RevealSection';
import azureLogo from '../assets/skills/azure-icon.png';
import chatgptLogo from '../assets/skills/chatgpt.png';
import csharpLogo from '../assets/skills/csharp.png';
import githubLogo from '../assets/skills/github.svg';
import huaweiLogo from '../assets/skills/huawei-icon.png';
import n8nLogo from '../assets/skills/n8n.png';
import postgresqlLogo from '../assets/skills/postgresql-icon.png';
import phpLogo from '../assets/skills/php.png';
import reactLogo from '../assets/skills/react-icon.png';

const sliderSkills = [
  { name: 'Huawei Cloud', logo: huaweiLogo },
  { name: 'Azure', logo: azureLogo },
  { name: 'React', logo: reactLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'ChatGPT', logo: chatgptLogo, invertInDark: true },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'n8n', logo: n8nLogo },
  { name: 'GitHub', logo: githubLogo, invertInDark: true },
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
                  className={`relative flex h-20 ${skill.wide ? 'w-56' : 'w-36'} items-center justify-center`}
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`max-h-16 max-w-full object-contain ${
                      skill.darkLogo ? 'dark:hidden' : ''
                    } ${skill.invertInDark ? 'dark:brightness-0 dark:invert' : ''}`}
                  />
                  {skill.darkLogo && (
                    <img
                      src={skill.darkLogo}
                      alt={skill.name}
                      className="hidden max-h-16 max-w-full object-contain dark:block"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
